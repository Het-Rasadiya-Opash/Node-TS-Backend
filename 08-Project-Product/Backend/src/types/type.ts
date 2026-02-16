export type Role = "Admin" | "User";

export interface JwtPayloadType {
  _id: string;
  email: string;
  name: string;
  role: Role;
}

export interface UserType {
  name: string;
  email: string;
  password: string;
  role: Role;
  isPasswordCorrect(password: string): Promise<boolean>;
  generateToken(): string;
}

export interface SearchQuery {
  company?: string;
  name?: string;
  featured?: string;
  sort?: string;
  select?: string;
  page?: string;
  limit?: string;
}
