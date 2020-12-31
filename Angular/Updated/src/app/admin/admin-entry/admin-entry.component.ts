import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-admin-entry',
  templateUrl: './admin-entry.component.html',
  styleUrls: ['./admin-entry.component.css']
})
export class AdminEntryComponent implements OnInit {
  solved: number
  pending: number
  reopen: number
  total: number
  usercount: number
  constructor(private s: AuthenticationService, private adminservice: AdminService) {

  }

  ngOnInit(): void {
    this.adminservice.getComplaintCount().subscribe(
      data => {
        this.solved = data[2]
        this.pending = data[0]
        this.reopen = data[1]
        this.total = this.solved + this.reopen + this.pending
      }
    )
    this.adminservice.getCountOfCitizen().subscribe(data => {
      //@ts-ignore
      this.usercount = data
    })
  }
  logout() {
    this.s.logout()
  }
}
