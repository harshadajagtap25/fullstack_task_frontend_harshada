import axios from "axios";
import { Task } from "../components/Task";

// const API_URL = "http://localhost:4000/api";
const API_URL = "https://todos-ooi8.onrender.com/api";

export const fetchTasks = async (): Promise<Task[]> => {
  try {
    const response = await axios.get<Task[]>(`${API_URL}/fetchAllTasks`);
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

export const addTask = async (content: string): Promise<Task> => {
  try {
    const response = await axios.post<Task>(`${API_URL}/tasks`, { content });
    return response.data;
  } catch (error) {
    console.error("Error adding task:", error);
    throw error;
  }
};
