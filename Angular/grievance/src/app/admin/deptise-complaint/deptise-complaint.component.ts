import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AdminService } from 'src/app/service/admin.service';
import { count } from 'rxjs/operators';

@Component({
  selector: 'app-deptise-complaint',
  templateUrl: './deptise-complaint.component.html',
  styleUrls: ['./deptise-complaint.component.css']
})
export class DeptiseComplaintComponent implements OnInit {
  //@ts-ignore
  counts: any[] = [];

  d1 = 1
  constructor(private adminservice: AdminService) { }

  getComplaintCount(status: any) {
    //@ts-ignore
    this.adminservice.getDepartmentwiseCount(status).subscribe(
      data => {
        //@ts-ignore
        this.counts = data
        //@ts-ignore
        this.d1 = this.counts[0]
      }
    )

    var myChart = new Chart('myChart', {
      type: 'bar',
      data: {
        labels: ['Gas', 'Water', 'Light', 'Garbage', 'Health'],
        datasets: [{
          label: 'Number of complaints',
          data: [this.counts[0], this.counts[1], this.counts[2], this.counts[3], this.counts[4]],
          backgroundColor: [
            'rgba(241, 68, 56, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }

  ngOnInit(): void {


  }

}
