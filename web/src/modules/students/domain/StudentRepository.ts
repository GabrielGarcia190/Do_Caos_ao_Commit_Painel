import type { Student } from "./Student";

export interface StudentRepository {
  list(completionYear?: number): Promise<Student[]>;
}
