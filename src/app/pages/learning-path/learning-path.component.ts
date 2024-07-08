import { Component } from '@angular/core';
import { TextBoxComponent } from '../../components/text-box/text-box.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-learning-path',
  standalone: true,
  imports: [TextBoxComponent, RouterLink],
  templateUrl: './learning-path.component.html',
  styleUrl: './learning-path.component.css'
})
export class LearningPathComponent {

}
