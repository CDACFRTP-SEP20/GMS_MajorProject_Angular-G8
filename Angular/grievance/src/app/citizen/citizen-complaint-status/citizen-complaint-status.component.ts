import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { ComplaintStatusDto } from './../../models/complaint-status-dto';
import { CitizenService } from './../../service/citizen.service';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-citizen-complaint-status',
  templateUrl: './citizen-complaint-status.component.html',
  styleUrls: ['./citizen-complaint-status.component.css']
})
export class CitizenComplaintStatusComponent implements OnInit {
  
  compId:any
  //without async pipe
  complainStatus:Array<ComplaintStatusDto> = []

  
 
  constructor(private citizenService : CitizenService, private router : Router) {
    this.citizenService.getComplainStatus().subscribe(
      res => this.complainStatus = res
      
    )
   }
      
  // setting reminder
   reminder(compId:any) {
     this.compId=compId
    this.citizenService.reminder(this.compId).subscribe(msg=>
      console.log(msg)
     )
   }
// for repoening of complain
   reopen(compId:any){
    this.compId=compId
   this.citizenService.reopen(this.compId).subscribe(msg=>
   { 
    this.router.navigate(['citizen-complaint-status']); 
     console.log(msg)
    })
  }



  reopenComplain(){

  }


  ngOnInit(): void {
  }
 
}


