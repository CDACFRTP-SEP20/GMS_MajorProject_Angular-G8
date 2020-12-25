import { Component, OnInit,EventEmitter ,Output} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  status:string = ''

  

  constructor() { }

  ngOnInit(): void {
  }


  
}
