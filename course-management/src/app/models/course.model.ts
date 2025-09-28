export interface User {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
}

export interface Department {
  id: number;
  name: string;
}

export interface Classification {
  id: number;
  name: string;
}

export interface Course {
  id: number;
  title: string;
  description?: string;
  durationHours?: number;
  department?: Department;
  classification?: Classification;
  participants?: User[];
}
