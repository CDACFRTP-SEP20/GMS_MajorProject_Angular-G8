import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-admin-entry',
  templateUrl: './admin-entry.component.html',
  styleUrls: ['./admin-entry.component.css']
})
export class AdminEntryComponent implements OnInit {

  constructor(private s:AuthenticationService) { }

  ngOnInit(): void {
  }
  logout(){
      this.s.logout()
  }
}
