import { Observable } from 'rxjs';
import { ComplaintStatusDto } from './../../models/complaint-status-dto';
import { CitizenService } from './../../service/citizen.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-citizen-complaint-status',
  templateUrl: './citizen-complaint-status.component.html',
  styleUrls: ['./citizen-complaint-status.component.css']
})
export class CitizenComplaintStatusComponent implements OnInit {
  
  //without async pipe
  complainStatus:Array<ComplaintStatusDto> = []
 
  constructor(private citizenService : CitizenService) {
    this.citizenService.getComplainStatus().subscribe(
      res => this.complainStatus = res
      
    )
   }
  
  // constructor(private citizenService : CitizenService) { 
  //    this.complainStatus= this.citizenService.getComplainStatus()
  // }



  reopenComplain(){

  }


  ngOnInit(): void {
  }

}
