import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  standalone: true,  // 👈 Importante
  imports: [CommonModule, FormsModule, IonicModule],  // 👈 Agregamos los módulos aquí
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email = '';
  password = '';

  constructor(private readonly apiService: ApiService, private readonly router: Router, private readonly storageService: StorageService) { }

  async login() {
    try {
      const response = await this.apiService.login(this.email, this.password);

      if (response) {
        await this.storageService.set('user_id', response.user.id);  // 📌 Guardar ID del usuario en Storage
        this.router.navigate(['/tasks']); // Redirigir a tareas
      }
    } catch (error) {
      console.error('Error en login:', error);
      alert('Credenciales incorrectas.');
    }
  }

  async register() {
    this.router.navigate(['/register']); // Redirigir a registro
  }
}
