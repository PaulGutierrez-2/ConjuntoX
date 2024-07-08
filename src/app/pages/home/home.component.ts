import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router) {}

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    this.router.navigate(['/info']);
  }

  @HostListener('document:keydown', ['$event'])
  onDocumentKeydown(event: KeyboardEvent) {
    this.router.navigate(['/info']);
  }
}
