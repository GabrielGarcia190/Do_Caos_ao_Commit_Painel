import type { Student } from "../domain/Student";
import type { StudentRepository } from "../domain/StudentRepository";

export class ListStudents {
  constructor(private readonly studentRepository: StudentRepository) {}

  execute(completionYear?: number): Promise<Student[]> {
    return this.studentRepository.list(completionYear);
  }
}
