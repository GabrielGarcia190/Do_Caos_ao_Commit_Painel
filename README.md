# Mural do Caos ao Commit

O Mural do Caos ao Commit reúne os perfis de estudantes que concluíram o mini-curso e apresenta o projeto usado para aprender a contribuir com software na prática. A participação acontece pelo GitHub: os dados são revisados em pull requests antes de entrarem no mural.

## Funcionalidades

- Mural de estudantes com ocupação, ano de conclusão e links de perfil.
- Filtro de estudantes por ano.
- Página `/sobre-curso` com o roteiro de contribuição.
- Página `/quem-somos` sobre a equipe do mini-curso.
- API de estudantes com filtro opcional por ano.
- Aplicativo desktop para Windows, feito com Electron e a mesma interface Next.js.

## Tecnologias

- Next.js e React com TypeScript.
- Tailwind CSS.
- Vitest e Testing Library para testes.
- Electron e Electron Builder para o aplicativo desktop.

## Requisitos

- Node.js 22 ou compatível com Next.js 16.
- npm.
- Windows para gerar o instalador desktop.

## Executar localmente

Na pasta `web`, instale as dependências e inicie o servidor:

```bash
npm ci
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Testes e build web

```bash
npm test
npm run build
npm start
```

`npm run build` executa os testes antes de gerar o build de produção. Depois do build, `npm start` inicia a aplicação localmente em modo de produção.

## API

O endpoint `GET /api/students` retorna os estudantes cadastrados. Para filtrar por ano, use `GET /api/students?year=2026`; para listar todos, use `GET /api/students?year=all` ou omita o parâmetro.

Resposta de sucesso:

```json
{
	"data": [
		{
			"id": "student-001",
			"fullName": "Ana Exemplo",
			"completionYear": 2026,
			"occupation": "Desenvolvedora de Software",
			"imageUrl": "https://exemplo.com/foto.jpg",
			"profileUrl": "https://github.com/ana-exemplo"
		}
	],
	"total": 1
}
```

O parâmetro `year` deve conter quatro dígitos ou o valor `all`. Um valor inválido retorna HTTP 400; falhas ao carregar os dados retornam HTTP 500.

## Adicionar um estudante

Os perfis ficam em `src/modules/students/infrastructure/data/students.json`. Adicione um objeto ao array com os campos obrigatórios abaixo:

```json
{
	"id": "student-014",
	"fullName": "Seu Nome",
	"completionYear": 2026,
	"occupation": "Sua ocupação",
	"imageUrl": "https://exemplo.com/sua-foto.jpg",
	"profileUrl": "https://github.com/seu-usuario"
}
```

`id`, `fullName`, `completionYear`, `occupation` e `imageUrl` são obrigatórios. `profileUrl` e `codeUrl` são opcionais; `imageUrl` pode ser uma string vazia quando não houver foto. Use um `id` único e mantenha o JSON válido.

Fluxo recomendado para contribuir:

1. Faça um fork do repositório e clone sua cópia.
2. Crie uma branch para a alteração.
3. Atualize o arquivo JSON e rode `npm test`.
4. Abra um pull request descrevendo a contribuição.

## Aplicativo desktop para Windows

O Electron inicia a aplicação local em uma janela desktop. Durante o desenvolvimento:

```bash
npm run desktop:dev
```

Para gerar o instalador Windows (NSIS):

```bash
npm run desktop:build
```

O instalador é gerado em `release/`. Para gerar apenas a pasta descompactada:

```bash
npm run desktop:dir
```

A primeira compilação pode baixar componentes do Electron e do NSIS.

## Estrutura principal

```text
src/
	app/                 páginas, componentes e API
	modules/students/    domínio, serviços e repositório JSON
```
