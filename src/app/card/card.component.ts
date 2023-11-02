import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() itemName!: string;
  @Input() itemInfo!: string;
  @Input() icon!: string;
  @Input() color!: string;
}