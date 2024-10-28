import { Component, Input } from '@angular/core';
import { character } from '../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})

export class CardComponent {
  @Input()
  characters?: character[];
}
