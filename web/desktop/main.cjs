const { app, BrowserWindow, shell, dialog } = require("electron");
const http = require("node:http");
const next = require("next");

const isDevelopment = !app.isPackaged;
const hostname = "127.0.0.1";
const appPort = 3210;
const serverPort = appPort;

let mainWindow;
let nextServer;
let httpServer;

async function startWebApp() {
  if (isDevelopment) {
    return;
  }

  const projectDirectory = app.getAppPath();

  nextServer = next({
    dev: false,
    dir: projectDirectory,
    hostname,
    port: appPort,
  });

  await nextServer.prepare();
  const requestHandler = nextServer.getRequestHandler();
  httpServer = http.createServer((request, response) => {
    requestHandler(request, response);
  });

  await new Promise((resolve, reject) => {
    httpServer.once("error", reject);
    httpServer.listen(appPort, hostname, resolve);
  });
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1440,
    height: 960,
    minWidth: 900,
    minHeight: 640,
    show: false,
    autoHideMenuBar: true,
    backgroundColor: "#081624",
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });

  mainWindow.once("ready-to-show", () => mainWindow.show());
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith("https://") || url.startsWith("http://")) {
      void shell.openExternal(url);
    }
    return { action: "deny" };
  });
  mainWindow.webContents.on("will-navigate", (event, url) => {
    if (!url.startsWith(`http://${hostname}:${appPort}/`)) {
      event.preventDefault();
      if (url.startsWith("https://") || url.startsWith("http://")) {
        void shell.openExternal(url);
      }
    }
  });

  void mainWindow.loadURL(`http://${hostname}:${serverPort}`);
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.whenReady().then(async () => {
  try {
    await startWebApp();
    createWindow();
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    dialog.showErrorBox(
      "Não foi possível iniciar o Mural do Caos ao Commit",
      `O servidor local da aplicação não iniciou.\n\n${message}`,
    );
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0 && httpServer) {
    createWindow();
  }
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("before-quit", () => {
  if (httpServer) {
    httpServer.close();
    httpServer = null;
  }
  if (nextServer && typeof nextServer.close === "function") {
    void nextServer.close();
  }
});
