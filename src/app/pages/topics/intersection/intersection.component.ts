import { Component, HostListener } from '@angular/core';
import { TopicStartComponent } from '../../../components/topic-start/topic-start.component';

@Component({
  selector: 'app-intersection',
  standalone: true,
  imports: [TopicStartComponent],
  templateUrl: './intersection.component.html',
  styleUrl: './intersection.component.css'
})
export class IntersectionComponent {
  isHome: boolean = true

  @HostListener('document:keydown', ['$event'])
  onDocumentKeydown(event: KeyboardEvent) {
    this.isHome = false
  }
}
