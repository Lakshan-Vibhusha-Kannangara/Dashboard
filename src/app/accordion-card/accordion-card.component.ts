import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-accordion-card',
  templateUrl: './accordion-card.component.html',
  styleUrls: ['./accordion-card.component.css']
})
export class AccordionCardComponent {
  @Input() items!: string[];
}
