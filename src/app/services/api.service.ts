import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { StorageService } from 'src/app/services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private readonly storageService: StorageService,) { }

  async register(name: string, email: string, password: string) {
    const res = await axios.post(`${this.apiUrl}/users`, { name, email, password });
    return res.data;
  }

  async login(email: string, password: string) {
    const res = await axios.post(`${this.apiUrl}/login`, { email, password });
    return res.data;
  }

  async getTasks(userId: number | null) {
    try {
      const token = await this.storageService.get('token');
      if (!token) {
        throw new Error('No hay token disponible');
      }
      const res = await axios.get(`${this.apiUrl}/tasks/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      console.error('Error al obtener las tareas:', error);
      throw error;
    }
  }

  async createTask(task: any) {
    try {
      const token = await this.storageService.get('token');
      if (!token) {
        throw new Error('No hay token disponible');
      }
      const res = await axios.post(`${this.apiUrl}/tasks`, task, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      console.error('Error al crear la tarea:', error);
      throw error;
    }
  }

  async updateTask(id: any, status: any) {
    try {
      const token = await this.storageService.get('token');
      if (!token) {
        throw new Error('No hay token disponible');
      }
      const res = await axios.patch(`${this.apiUrl}/tasks/${id}/status`, status, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      console.error('Error al actualizar el estado de la tarea:', error);
      throw error;
    }
  }

  async deleteTask(id: any) {
    try {
      const token = await this.storageService.get('token');
      if (!token) {
        throw new Error('No hay token disponible');
      }
      const res = await axios.delete(`${this.apiUrl}/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      console.error('Error al eliminar la tarea:', error);
      throw error;
    }
  }
}
