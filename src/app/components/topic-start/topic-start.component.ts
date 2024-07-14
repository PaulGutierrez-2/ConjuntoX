import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-topic-start',
  standalone: true,
  imports: [],
  templateUrl: './topic-start.component.html',
  styleUrl: './topic-start.component.css'
})
export class TopicStartComponent {
  @Input() Title!: string;

}
