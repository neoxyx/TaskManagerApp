import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule],  // ✅ Agregar IonicModule
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  name = '';
  email = '';
  password = '';

  constructor(private readonly apiService: ApiService, private readonly router: Router) { }

  async register() {
    try {
      await this.apiService.register(this.name, this.email, this.password);
      //this.router.navigate(['/login']); // Redirigir a login después del registro
    } catch (error) {
      console.error('Error en registro:', error);
      alert('No se pudo registrar.');
    }
  }

  async login() {
    this.router.navigate(['/login']); // Redirigir a registro
  }
}
