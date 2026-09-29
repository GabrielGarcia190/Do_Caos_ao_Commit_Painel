import { createStudentServices } from "@/modules/students/composition/createStudentServices";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {

    const yearParameter = new URL(request.url).searchParams.get("year");

    let completionYear: number | undefined;

    if (yearParameter && yearParameter !== "all") {
        if (!/^\d{4}$/.test(yearParameter)) {
            return Response.json(
                { error: "O parâmetro 'year' deve ser um ano com quatro dígitos." },
                { status: 400 },
            );
        }

        completionYear = Number(yearParameter);
    }

    try {
        const { listStudents } = createStudentServices();
        const students = await listStudents.execute(completionYear);

        return Response.json(
            { data: students, total: students.length },
            { headers: { "Cache-Control": "no-store" } },
        );
    } catch {
        return Response.json(
            { error: "Não foi possível carregar os estudantes." },
            { status: 500 },
        );
    }

}