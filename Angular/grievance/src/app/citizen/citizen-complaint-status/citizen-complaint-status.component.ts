import { UserService } from 'src/app/service/user.service';
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
  citizenId =  localStorage.getItem('citizenId');
  errorMsg:string = ''
  reopenErrorMsg:string = ''
  index:number=1
  page: number = 1
  totalRecords: number

  //without async pipe
  complainStatus:Array<ComplaintStatusDto> = []

  
  increaseCount(): number {
    return this.index + (this.page - 1) * 10
  }
  constructor(private citizenService : CitizenService, private router : Router,private userService:UserService) {
    this.citizenService.getComplainStatus(this.citizenId).subscribe(
      res => this.complainStatus = res
      
    )
   }
      
  // setting reminder
   reminder(compId:any, i:number) {
     this.compId=compId
    this.citizenService.reminder(this.complainStatus[i].compId).subscribe(msg=>{
      console.log(msg)
      if(msg==1){
        this.errorMsg='Reminder sent successfully';
        }
      
    },error=>{
     
      this.errorMsg='Wait for minimum 7 Days';
    }
    

     )
     
   }
// for repoening of complain
   reopen(compId:any){
    this.compId=compId
   this.citizenService.reopen(this.compId).subscribe(msg=>
   { 
    this.router.navigate(['citizen-complaint-status']); 
     console.log(msg)
     if(msg==1){
      this.reopenErrorMsg='YOut complain is Reopened';
      }
    
  },error=>{
   
    this.reopenErrorMsg='Your Complain is Still Pending';
  }
  

   )
  }


  ngOnInit(): void {
  }
 
}


