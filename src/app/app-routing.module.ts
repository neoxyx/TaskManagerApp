import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';
import { TasksPage } from './pages/tasks/tasks.page';
import { TaskCreatePage } from './pages/task-create/task-create.page';
import { TaskEditPage } from './pages/task-edit/task-edit.page';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPage },
  { path: 'register', component: RegisterPage },
  { path: 'tasks', component: TasksPage },
  { path: 'task-create', component: TaskCreatePage },
  { path: 'task-edit/:id', component: TaskEditPage },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
