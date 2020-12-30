import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { DepartmentService } from 'src/app/service/department.service';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-department-entry',
  templateUrl: './department-entry.component.html',
  styleUrls: ['./department-entry.component.css']
})
export class DepartmentEntryComponent implements OnInit {

  deptId: any
  count: any[] = []
  total: any = this.count[0] + this.count[1] + this.count[2]
  chart: any = []


  constructor(private s: AuthenticationService, private departmentService: DepartmentService) {
   

  }

  totalComplain() {
    return this.count[0] + this.count[1] + this.count[2]
  }
  ngOnInit(): void {
     this.departmentService.getDeptId(this.departmentService.getUsername()).subscribe(
      id => {
        this.deptId = id.deptId
        this.departmentService.getCountOfAllComplains(this.deptId).subscribe(
          data => {
            this.count = data

            this.chart = new Chart("mychart", {
              type: 'doughnut',
              data: {
                labels: ["Solved", "Pending", "Reopen"],
                datasets: [{
                  label: 'Total Complaints',
                  backgroundColor: [
                    "#f8933b",
                    "#4edab4",
                    "#1b9edb"
                  ],
                  hoverBackgroundColor: [
                    "#f8933b",
                    "#4edab4",
                    "#1b9edb"
                  ],
                  borderColor: "#FF6384",
                  borderWidth: 2,
                  fill: false,
                  // data: [30,40,12]
                  data: this.count

                }
                ]
              },
              options: {
                responsive: true,
                title: {
                  display: true,
                  text: 'Report of Complaints'
                },
                tooltips: {
                  mode: 'index',
                  intersect: true
                },

              }
            })
          }

        )
      })

  }


  logout() {
    this.s.logout()
  }


}
