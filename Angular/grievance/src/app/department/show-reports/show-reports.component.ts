import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ReportsComponent} from '../reports/reports.component'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-show-reports',
  templateUrl: './show-reports.component.html',
  styleUrls: ['./show-reports.component.css']
})
export class ShowReportsComponent implements OnInit{

  status:string = ''
  constructor(private route:ActivatedRoute) {
   }
  
 
  ngOnInit(): void {
    
    this.route.queryParams.subscribe(params =>{
      this.status = params['status'];
    })
   
  }
  
  

}
