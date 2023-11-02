import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-percentage',
  templateUrl: './percentage.component.html',
  styleUrls: ['./percentage.component.css']
})
export class PercentageComponent implements OnInit {
  @Input() itemName: string = '';
  @Input() itemInfo: string = '';
  @Input() icon: string = '';
  @Input() color: string = '';
  @Input() percentage: string = '';
  num: number = 0;

  ngOnInit() {
    this.num = parseInt(this.percentage);
  }
}
