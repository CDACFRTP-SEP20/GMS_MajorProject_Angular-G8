import { CitizenService } from './../../service/citizen.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-citizen-home',
  templateUrl: './citizen-home.component.html',
  styleUrls: ['./citizen-home.component.css']
})
export class CitizenHomeComponent implements OnInit {

  citizenId: string
  constructor(private citizenService: CitizenService) {
    this.citizenService.getCitizenId(citizenService.getUsername()).subscribe(
      id => {
        this.citizenId = id.citizenId
        localStorage.setItem('citizenId', this.citizenId);


      }

    )

  }

  ngOnInit(): void {
  }

}
