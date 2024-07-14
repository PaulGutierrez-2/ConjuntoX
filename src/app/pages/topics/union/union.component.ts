import { Component, HostListener } from '@angular/core';
import { TopicStartComponent } from '../../../components/topic-start/topic-start.component';

@Component({
  selector: 'app-union',
  standalone: true,
  imports: [TopicStartComponent],
  templateUrl: './union.component.html',
  styleUrl: './union.component.css'
})
export class UnionComponent {
  isHome:boolean = true

  @HostListener('document:keydown', ['$event'])
  onDocumentKeydown(event: KeyboardEvent) {
    this.isHome = false
  }
}
