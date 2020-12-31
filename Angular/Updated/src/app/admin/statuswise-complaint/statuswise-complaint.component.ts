import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { reduce } from 'rxjs/operators';

@Component({
  selector: 'app-statuswise-complaint',
  templateUrl: './statuswise-complaint.component.html',
  styleUrls: ['./statuswise-complaint.component.css']
})
export class StatuswiseComplaintComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var myChart = new Chart("mychart", {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        datasets: [{
          label: 'Total Complaints',
          borderColor: "#FF6384",
          borderWidth: 2,
          fill: false,
          data: [20, 10, 50, 20, 40, 10, 50, 10, 30, 50, 40, 50]
        },
        {
          label: 'Solved Complaints',
          borderColor: "#36A2EB",
          borderWidth: 2,
          fill: false,
          data: [10, 10, 40, 20, 20, 8, 30, 10, 20, 40, 40, 47]
        }
        ]
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Monthly Report of Complaints'
        },
        tooltips: {
          mode: 'index',
          intersect: true
        },
      }
    });
  }
}
