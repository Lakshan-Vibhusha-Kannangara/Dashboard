import { Component, Input } from '@angular/core';
import { ClassInfo } from '../utilites/interfaces/interface';

@Component({
  selector: 'app-class-cards',
  templateUrl: './class-cards.component.html',
  styleUrls: ['./class-cards.component.css']
})
export class ClassCardsComponent {
@Input() classrooms!:ClassInfo[];
columnCount = 0;
i: any;
}
