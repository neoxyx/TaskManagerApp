import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly apiUrl = 'http://localhost:8000/api';

  async register(name: string, email: string, password: string) {
    const res = await axios.post(`${this.apiUrl}/users`, { name, email, password });
    return res.data;
  }

  async login(email: string, password: string) {
    const res = await axios.post(`${this.apiUrl}/login`, { email, password });
    return res.data;
  }

  async getTasks(userId: number | null) {
    const res = await axios.get(`${this.apiUrl}/tasks/user/${userId}`);
    return res.data;
  }

  async createTask(task: any) {
    const res = await axios.post(`${this.apiUrl}/tasks`, task);
    return res.data;
  }

  async updateTask(id: any, status: any) {
    const res = await axios.patch(`${this.apiUrl}/tasks/${id}/status`, status);
    return res.data;
  }

  async deleteTask(id: any) {
    const res = await axios.delete(`${this.apiUrl}/tasks/${id}`);
    return res.data;
  }
}
