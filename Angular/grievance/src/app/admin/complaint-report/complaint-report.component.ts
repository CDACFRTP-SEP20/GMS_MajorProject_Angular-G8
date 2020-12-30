import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';
import { ComplaintsDetails } from 'src/app/models/complaintDetails';

@Component({
  selector: 'app-complaint-report',
  templateUrl: './complaint-report.component.html',
  styleUrls: ['./complaint-report.component.css']
})
export class ComplaintReportComponent implements OnInit {

  allComplaints:ComplaintsDetails[]
  constructor(private _adminservice:AdminService) { }

  getAllComplaints(){
    this._adminservice.getAllComplaints().subscribe(data=>{
      this.allComplaints=data
    })
  }
  getComplaintsByStatus(status:string){
    this._adminservice.getComplaintsByStatus(status).subscribe(data=>{
      this.allComplaints=data
    })
  }
  ngOnInit(): void {
   
  }

}
