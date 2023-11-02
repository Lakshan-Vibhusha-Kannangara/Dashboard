/* chart.component.ts */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'], 
})
export class ChartComponent {
  @Input() chartOptions: any;
  chartsOptions = {
    type: "bar",
    data: [
      {
        label: "Assessment Area 1 for Science",
        yValue: 0
      },
      {
        label: "Assessment Area 2 for Science",
        yValue: 0
      },
      {
        label: "Assessment Area 3 for Science",
        yValue: 1
      },
      // ...
    ],
    axisX: {
      label: "Assessment Area"
    },
    axisY: {
      label: "Score"
    }
  };
}
