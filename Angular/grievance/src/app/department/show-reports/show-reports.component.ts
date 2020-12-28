import { Component, OnInit, ViewChild, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { ReportsComponent } from '../reports/reports.component'
import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from 'src/app/service/department.service';
import { map, filter, tap } from 'rxjs/operators';
@Component({
  selector: 'app-show-reports',
  templateUrl: './show-reports.component.html',
  styleUrls: ['./show-reports.component.css']
})
export class ShowReportsComponent implements OnInit {

  status: string = ''
  deptId: any
  complains: any = []
  totalRecords: number
  page: number = 1
  index: number = 1;

  constructor(private route: ActivatedRoute, private departmentService: DepartmentService) {
  }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.status = params['status'];
      this.departmentService.getDeptId(this.departmentService.getUsername()).subscribe(
        id => {
          this.deptId = id.deptId
          this.departmentService.getComplainList(this.deptId).pipe(
            map(dataList => dataList.filter((data: { status: string; }) => data.status === this.status))
          ).subscribe(
            data => {
              this.complains = data
              this.totalRecords = data.length
            }
          )
        })

    })



  }

  increaseCount(): number {
    return this.index + (this.page - 1) * 10
  }



}
