import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { InfoComponent } from './pages/info/info.component';
import { HomeComponent } from './pages/home/home.component';
import { LearningPathComponent } from './pages/learning-path/learning-path.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'login', component: LoginComponent},
    {path:'register', component: RegisterComponent},
    {path:'info', component: InfoComponent},
    {path:'learningpath', component: LearningPathComponent},
];
