import { Component, HostListener } from '@angular/core';
import { TopicStartComponent } from '../../../components/topic-start/topic-start.component';

@Component({
  selector: 'app-complement',
  standalone: true,
  imports: [TopicStartComponent],
  templateUrl: './complement.component.html',
  styleUrl: './complement.component.css'
})
export class ComplementComponent {
  isHome: boolean = true

  @HostListener('document:keydown', ['$event'])
  onDocumentKeydown(event: KeyboardEvent) {
    this.isHome = false
  }
}
