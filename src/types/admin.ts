export interface Lecturer {
  id: string;
  name: string;
  dept: string;
  courses: number;
  students: number;
  syncHealth: number;
  performance: number;
  lastUpload: string;
  avatar: string;
}

export interface Student {
  id: string;
  name: string;
  dept: string;
  enrolled: number;
  progress: number;
  avgScore: number;
  syncStatus: "synced" | "offline" | "pending";
  attendance: number;
  avatar: string;
}

export interface Device {
  id: string;
  name: string;
  owner: string;
  dept: string;
  lastSync: string;
  storage: string;
  health: string;
  type: "Tablet" | "Laptop" | "Mobile";
  os: string;
}

export interface Course {
  id: string;
  title: string;
  dept: string;
  lecturer: string;
  students: number;
  progress: number;
  status: string;
  offline: string;
  image: string;
}

export interface Department {
  id: string;
  name: string;
  head: string;
  students: number;
  lecturers: number;
  courses: number;
  completionRate: number;
  performance: string;
  image: string;
}

export interface FinanceRecord {
  id: string;
  name: string;
  course: string;
  total: number;
  paid: number;
  balance: number;
  status: "Cleared" | "Pending" | "Overdue";
}
