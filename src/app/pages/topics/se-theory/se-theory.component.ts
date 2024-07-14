import { Component, HostListener } from '@angular/core';
import { TopicStartComponent } from '../../../components/topic-start/topic-start.component';

@Component({
  selector: 'app-se-theory',
  standalone: true,
  imports: [TopicStartComponent],
  templateUrl: './se-theory.component.html',
  styleUrl: './se-theory.component.css'
})
export class SeTheoryComponent {
  isHome: boolean = true

  @HostListener('document:keydown', ['$event'])
  onDocumentKeydown(event: KeyboardEvent) {
    this.isHome = false
  }
}
