import { Component } from '@angular/core';
import { AlertController, IonicModule } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { ApiService } from 'src/app/services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-tasks',
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage {

  userId: number | null = null;
  tasks: any[] = [];

  constructor(
    private readonly storageService: StorageService,
    private readonly apiService: ApiService,
    private readonly alertController: AlertController,
    private readonly router: Router
  ) { }

  async ionViewWillEnter() {
    this.userId = await this.storageService.get('user_id');
    if (this.userId) {
      this.loadTasks();
    }
  }

  async loadTasks() {
    try {
      this.tasks = await this.apiService.getTasks(this.userId);
    } catch (error) {
      console.error('Error al cargar tareas:', error);
    }
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'pending':
        return 'danger'; // Rojo
      case 'in_progress':
        return 'warning'; // Amarillo
      case 'completed':
        return 'success'; // Verde
      default:
        return 'medium'; // Color gris por defecto
    }
  }

  async deleteTask(taskId: string) {
    const alert = await this.alertController.create({
      header: 'Eliminar tarea',
      message: '¿Estás seguro de que deseas eliminar esta tarea?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Eliminar',
          handler: async () => {
            await this.apiService.deleteTask(taskId);
            this.tasks = this.tasks.filter(task => task.id !== taskId);
            console.log('Tarea eliminada:', taskId);
          },
        },
      ],
    });

    await alert.present();
  }

  async logout() {
    await this.storageService.remove('user_id'); // ❌ Eliminar ID del usuario del almacenamiento
    this.router.navigate(['/login']); // 🔄 Redirigir al login
  }
}
