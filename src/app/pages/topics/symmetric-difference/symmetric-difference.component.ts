import { Component, HostListener } from '@angular/core';
import { TopicStartComponent } from '../../../components/topic-start/topic-start.component';

@Component({
  selector: 'app-symmetric-difference',
  standalone: true,
  imports: [TopicStartComponent],
  templateUrl: './symmetric-difference.component.html',
  styleUrl: './symmetric-difference.component.css'
})
export class SymmetricDifferenceComponent {
  isHome: boolean = true

  @HostListener('document:keydown', ['$event'])
  onDocumentKeydown(event: KeyboardEvent) {
    this.isHome = false
  }
}
