import { Component, OnInit } from '@angular/core';
import { CitizenService } from 'src/app/service/citizen.service';
import { CitizenProfile } from 'src/app/models/citizen-profile';
import { Profile } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-citizen-profile',
  templateUrl: './citizen-profile.component.html',
  styleUrls: ['./citizen-profile.component.css']
})
export class CitizenProfileComponent implements OnInit {

  citizenId = localStorage.getItem('citizenId');
  profile:CitizenProfile
  constructor(private citizenService: CitizenService) { }

  ngOnInit(): void {
    this.citizenService.getCitizen(this.citizenId).subscribe(data=>
      {this.profile= data;
      console.log(this.profile)}
      
      )
  }

}
