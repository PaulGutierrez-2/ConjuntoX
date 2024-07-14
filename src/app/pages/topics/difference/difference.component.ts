import { Component, HostListener } from '@angular/core';
import { TopicStartComponent } from '../../../components/topic-start/topic-start.component';

@Component({
  selector: 'app-difference',
  standalone: true,
  imports: [TopicStartComponent],
  templateUrl: './difference.component.html',
  styleUrl: './difference.component.css'
})
export class DifferenceComponent {
  isHome: boolean = true

  @HostListener('document:keydown', ['$event'])
  onDocumentKeydown(event: KeyboardEvent) {
    this.isHome = false
  }
}
