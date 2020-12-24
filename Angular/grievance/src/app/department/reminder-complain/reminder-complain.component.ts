import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/service/department.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reminder-complain',
  templateUrl: './reminder-complain.component.html',
  styleUrls: ['./reminder-complain.component.css']
})
export class ReminderComplainComponent implements OnInit {

  complains:any = [];
  compId:string =''
  display ="none";
  index:number=1;
  remark:string='';
  deptId:string
  deptList:any=[]
  msg:string='';
  remarkNumber!:number;


  constructor(private departmentService:DepartmentService,private router:Router) {
    this.departmentService.getDeptId(this.departmentService.getUsername()).subscribe(
      id=>{
        this.deptId=id.deptId
        this.departmentService.getreminderComplain(this.deptId).subscribe(
          data=>{
            this.complains=data
          }
          )
      }
    )
   }

   ngOnInit(){
   }


  onClose(){
    this.display ="none";
  }


  openModel(id:string,index:number){
    this.compId = id;
    this.remarkNumber = index;
    this.display ="block";
  }
 
  onRemarkSubmit(form :NgForm){
    this.complains.splice(this.remarkNumber, 1);
    this.departmentService.submitRemark(this.compId,form.value.remark).subscribe(
      message=>{
       if(message != null){
         this.msg="Complain is solved";
       }
       else{
         this.msg="Try Again";
       }
      }
    )
    form.reset();
    this.onClose();
    
}

}
