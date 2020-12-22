import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/service/department.service';

@Component({
  selector: 'app-complain-list',
  templateUrl: './complain-list.component.html',
  styleUrls: ['./complain-list.component.css']
})
export class ComplainListComponent implements OnInit {


  complains:any = [];
  compId:string =""
  display ="none";
  transferDisplay ="none";
  index:number=1;
  remark:string='';

  constructor(private departmentService:DepartmentService) {
    this.departmentService.getComplainList().subscribe(
      data=>this.complains=data
      )
   }

  ngOnInit(): void {
   
  }

  onClose(){
    this.display ="none";
  }
  onTransferClose(){
    this.transferDisplay = "none";
  }

  openModel(id:string){
    this.compId = id;
    this.display ="block";
  }
  openTransferModel(id:string){
    this.compId = id;
    this.transferDisplay ="block";
  }



}
