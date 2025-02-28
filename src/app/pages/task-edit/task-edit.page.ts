import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-task-edit',
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
  templateUrl: './task-edit.page.html',
  styleUrls: ['./task-edit.page.scss'],
})
export class TaskEditPage {
  task = { id: '', status: '' };

  constructor(
    private readonly route: ActivatedRoute,
    private readonly apiService: ApiService,
    private readonly router: Router
  ) {}

  async ionViewWillEnter() {
    this.task.id = this.route.snapshot.paramMap.get('id')!;
  }

  async updateStatus() {
    await this.apiService.updateTask(this.task.id, { status: this.task.status });
    this.router.navigate(['/tasks']);
  }
}
