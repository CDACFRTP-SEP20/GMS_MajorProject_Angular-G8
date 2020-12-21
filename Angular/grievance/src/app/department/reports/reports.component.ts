import { Component, OnInit,EventEmitter ,Output} from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  status:string = ''

  
//@Output() messageEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

//  showComplains(){
//     this.messageEvent.emit(this.status);
   
//   }

  
}
