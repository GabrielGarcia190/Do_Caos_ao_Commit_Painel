import { ListStudents } from "../application/ListStudents";
import { JsonStudentRepository } from "../infrastructure/JsonStudentRepository";

export function createStudentServices() {
  const studentRepository = new JsonStudentRepository();

  return {
    listStudents: new ListStudents(studentRepository),
  };
}
