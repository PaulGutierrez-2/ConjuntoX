import { Component, HostListener } from '@angular/core';
import { TopicStartComponent } from '../../../components/topic-start/topic-start.component';

@Component({
  selector: 'app-cardinality',
  standalone: true,
  imports: [TopicStartComponent],
  templateUrl: './cardinality.component.html',
  styleUrl: './cardinality.component.css'
})
export class CardinalityComponent {
  isHome: boolean = true

  @HostListener('document:keydown', ['$event'])
  onDocumentKeydown(event: KeyboardEvent) {
    this.isHome = false
  }
}
