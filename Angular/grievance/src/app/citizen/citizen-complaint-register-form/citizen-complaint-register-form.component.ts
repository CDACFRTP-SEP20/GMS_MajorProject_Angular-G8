import { Complaint } from './../../models/complaint';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CitizenService } from './../../service/citizen.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-citizen-complaint-register-form',
  templateUrl: './citizen-complaint-register-form.component.html',
  styleUrls: ['./citizen-complaint-register-form.component.css'],
})
export class CitizenComplaintRegisterFormComponent implements OnInit {
  
  deptName: any = '';
  d="basas"
  complainForm:FormGroup
  constructor(private citizenService: CitizenService, private formBuilder : FormBuilder ) {
    // this.createForm();
  }
  
  ngOnInit() {
    this.citizenService.deptName$.subscribe((message) => {
      this.deptName = message;
      console.log(this.deptName);
    });
    
  }
  createForm() {
    // this.complainForm = this.formBuilder.group({
    //   department: [''],
    //   description: [''],
    //   file: [''],
    //  });
    
    }
    // onFileSelect(event){
    //   const file = event.target.files[0];
    //   this.complainForm.get('file').setvalue(file);
    // }

 
}
