import studentsData from "./data/students.json";
import type { Student } from "../domain/Student";
import type { StudentRepository } from "../domain/StudentRepository";

const students = studentsData satisfies Student[];

export class JsonStudentRepository implements StudentRepository {
  async list(completionYear?: number): Promise<Student[]> {
    const result = completionYear === undefined
      ? students
      : students.filter((student) => student.completionYear === completionYear);

    return result.map((student) => ({ ...student }));
  }
}
