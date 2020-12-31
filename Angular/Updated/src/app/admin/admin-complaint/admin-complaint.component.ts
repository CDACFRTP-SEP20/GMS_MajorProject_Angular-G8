import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AdminService } from 'src/app/service/admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-complaint',
  templateUrl: './admin-complaint.component.html',
  styleUrls: ['./admin-complaint.component.css']
})
export class AdminComplaintComponent implements OnInit {
  solved: number
  pending: number
  reopen: number
  total: number

  constructor(private adminservice: AdminService, private route: Router) { }

  getCounts() {

  }
  viewComplaint() {
    this.route.navigate(['admin/admin-complaintreport'])
  }

  ngOnInit(): void {

    //@ts-ignore
    this.adminservice.getComplaintCount().subscribe(
      data => {
        this.solved = data[2]
        this.pending = data[0]
        this.reopen = data[1]
        this.total = this.solved + this.reopen + this.pending


        var myDoughnutChart = new Chart("ctx", {
          type: 'doughnut',
          data: {
            labels: [
              "solved", "pending", "reopen"
            ],
            datasets: [{
              //@ts-ignore
              data: [this.solved, this.pending, this.reopen],
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
          },
          options: {
            responsive: true,
            legend: {
              display: false
            },
          }
        });
      }
    )
  }
}
