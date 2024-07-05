import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
