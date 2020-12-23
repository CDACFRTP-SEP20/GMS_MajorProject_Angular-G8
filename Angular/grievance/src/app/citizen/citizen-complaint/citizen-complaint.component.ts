import { CitizenService } from './../../service/citizen.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-citizen-complaint',
  templateUrl: './citizen-complaint.component.html',
  styleUrls: ['./citizen-complaint.component.css']
})
export class CitizenComplaintComponent implements OnInit {

  constructor(private citizinService : CitizenService) { }

  ngOnInit(): void {
  }
  sendToForm(msg:string){

    localStorage.setItem('department', msg);
      }
    

}
