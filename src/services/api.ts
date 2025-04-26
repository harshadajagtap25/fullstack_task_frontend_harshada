import axios from "axios";

const API_URL = "http://localhost:4000/api";

export const fetchTasks = async (): Promise<[]> => {
  try {
    const response = await axios.get<[]>(`${API_URL}/fetchAllTasks`);
    return response.data;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
};

export const addTask = async (content: string): Promise<any> => {
  try {
    const response = await axios.post<any>(`${API_URL}/add`, { content });
    return response.data;
  } catch (error) {
    console.error("Error adding task:", error);
    throw error;
  }
};
