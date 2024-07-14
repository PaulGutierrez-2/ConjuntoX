<<<<<<< HEAD
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
=======
import { Component, HostListener } from '@angular/core';
import { TopicStartComponent } from '../../../components/topic-start/topic-start.component';
>>>>>>> 613cf46fcaff7ca109703778d1a4bdd4a9bff8ab

@Component({
  selector: 'app-se-theory',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet],
=======
  imports: [TopicStartComponent],
>>>>>>> 613cf46fcaff7ca109703778d1a4bdd4a9bff8ab
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
