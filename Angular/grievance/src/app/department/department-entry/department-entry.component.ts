import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-department-entry',
  templateUrl: './department-entry.component.html',
  styleUrls: ['./department-entry.component.css']
})
export class DepartmentEntryComponent implements OnInit {

  constructor(private s:AuthenticationService) { }

  ngOnInit(): void {
  }
  logout(){
    this.s.logout()
  }
}
