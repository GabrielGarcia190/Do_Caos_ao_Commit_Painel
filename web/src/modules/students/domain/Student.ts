export interface Student {
  readonly id: string;
  readonly fullName: string;
  readonly completionYear: number;
  readonly occupation: string;
  readonly imageUrl: string;
  readonly codeUrl?: string;
  readonly profileUrl?: string;
}
