import axios from "axios";
import type { UserData } from "../types/types";
const BASE_API_URL = "http://localhost:3000/user";

axios.defaults.withCredentials = true;

export const registerUser = async (userData: UserData) => {
  try {
    const response = await axios.post(`${BASE_API_URL}/register`, userData);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Registration failed");
  }
};

export const loginUser = async (userData: UserData) => {
  try {
    const response = await axios.post(`${BASE_API_URL}/login`, userData);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

export const logoutUser = async () => {
  try {
    const response = await axios.post(`${BASE_API_URL}/logout`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Logout failed");
  }
};

export const getLoggedInUser = async () => {
  try {
    const response = await axios.get(`${BASE_API_URL}/me`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Failed to fetch user");
  }
};
