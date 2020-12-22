import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-admin-complaint',
  templateUrl: './admin-complaint.component.html',
  styleUrls: ['./admin-complaint.component.css']
})
export class AdminComplaintComponent implements OnInit {
 d1=10
 d2=20
 d3=30
  data = {
    datasets: [{
        data: [this.d1, this.d2, this.d3],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ],
        hoverBackgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56"
        ]
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      this.d1, this.d2, this.d3
       
    ],
    
};
  constructor() { }

  ngOnInit(): void {

    var myDoughnutChart = new Chart("ctx", {
      type: 'doughnut',
      data: this.data,
      options: {
        responsive: true,
        legend: {
          display: false
        },
       
      }
  });






  
  }

}
