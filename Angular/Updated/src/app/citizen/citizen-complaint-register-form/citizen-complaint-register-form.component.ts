import { Router } from '@angular/router';
import { Complaint } from './../../models/complaint';
import { FormBuilder, Validators } from '@angular/forms';
import { CitizenService } from './../../service/citizen.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-citizen-complaint-register-form',
  templateUrl: './citizen-complaint-register-form.component.html',
  styleUrls: ['./citizen-complaint-register-form.component.css'],
})
export class CitizenComplaintRegisterFormComponent implements OnInit {
  submitted = false;
  complainForm: any;
  deptName: any = 'aaa';
  dept = localStorage.getItem('department');
  citizenId = localStorage.getItem('citizenId');
  returnData: any

  constructor(
    private citizenService: CitizenService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.createForm();
  }

  ngOnInit() { }
  // creating reactive form
  createForm() {
    this.complainForm = this.formBuilder.group({
      department: [this.dept],
      citizenId: [this.citizenId],
      description: ['', [Validators.required, Validators.minLength(10)]],
      file: [null],
    });
  }
  // image upload
  onFileSelect(event: any) {
    const fileUpload = event.target.files[0];
    this.complainForm.patchValue({
      file: fileUpload,
    });
    this.complainForm.get('file').updateValueAndValidity();
  }

  submitForm() {
    this.submitted = true;
    var formData = new FormData();
    formData.append('department', this.complainForm.get('department').value);
    formData.append('description', this.complainForm.get('description').value);
    formData.append('file', this.complainForm.get('file').value);
    formData.append('citizenId', this.complainForm.get('citizenId').value);


    this.citizenService
      .submitComplain(formData)
      .subscribe((data) => this.returnData = data,
      );


  }
  transfer() {
    this.router.navigate(['/citizen/citizen-complaint-status'])
  }


}
