import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-task-create',
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
  templateUrl: './task-create.page.html',
  styleUrls: ['./task-create.page.scss'],
})
export class TaskCreatePage {
  task = { title: '', description: '', status: 'pending' };
  userId: string | null = null;

  constructor(
    private readonly apiService: ApiService,
    private readonly storageService: StorageService,
    private readonly router: Router
  ) {}

  async ionViewWillEnter() {
    this.userId = await this.storageService.get('user_id');
  }

  async saveTask() {
    await this.apiService.createTask({ ...this.task, user_id: this.userId });
    this.router.navigate(['/tasks']);
  }
}
