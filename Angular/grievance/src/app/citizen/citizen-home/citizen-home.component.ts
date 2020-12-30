import { CitizenService } from './../../service/citizen.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-citizen-home',
  templateUrl: './citizen-home.component.html',
  styleUrls: ['./citizen-home.component.css']
})
export class CitizenHomeComponent implements OnInit {

  citizenId:string
  constructor(private citizenService : CitizenService) { 
    console.log("inside ctor")
    this.citizenService.getCitizenId(citizenService.getUsername()).subscribe(
      id=>{
        console.log("inside id call///////////////")
        this.citizenId=id.citizenId
        console.log("id "+ id.citizenId)
        localStorage.setItem('citizenId', this.citizenId);
        console.log("citizen id"+this.citizenId)

      }
     
    )
    
  }

  ngOnInit(): void {
  }

}
