export interface Product {
  _id: string;
  name: string;
  company: string;
  price: number;
  rating?: number;
  featured: boolean;
}

export type Role = "Admin" | "User";

export interface UserData {
  email: string;
  password: string;
  name?: string;
  role?: Role;
}
