import axios from "axios";
export interface User {
  email: string;
  password: string;
  confirmPassword: string;
}

export const register = async (formData: User) => {
  try {
    const res = await axios.post("http://localhost:3000/api/register", formData);
    return res.data;
  } catch (error: any) {
    throw error;
  }
};
