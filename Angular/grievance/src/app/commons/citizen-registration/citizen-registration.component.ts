import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CitizenDTO } from 'src/app/models/citizen-dto';
import { CitizenService } from 'src/app/service/citizen.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-citizen-registration',
  templateUrl: './citizen-registration.component.html',
  styleUrls: ['./citizen-registration.component.css']
})
export class CitizenRegistrationComponent implements OnInit {
  submitted = false;
  registerForm: FormGroup;
  fieldTextType: boolean;

  constructor(private citizenService: CitizenService,
    private router: Router,
    private fb: FormBuilder) {
      this.createForm();
   
  }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.registerForm = this.fb.group({
      name: ['', [Validators.required,Validators.minLength(3),Validators.pattern("^[a-zA-Z]*(?:\s+[a-zA-Z][a-zA-Z]+)?$")]],
      username: ['', [Validators.required,Validators.minLength(3)]],
      password: ['', [Validators.required,Validators.minLength(6)]], 
      address: ['', Validators.required],
      contact: ['',[Validators.required,Validators.pattern("^[0-9]{10}$")]]
    });
  }

  cancel(){
    this.router.navigate(['home']);
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  registerCitizen() {
    this.submitted = true;
    let citizen: any = this.registerForm.value;
    let citizenDTO = new CitizenDTO();
    citizenDTO.name = citizen.name;
    citizenDTO.username = citizen.username;
    citizenDTO.password = citizen.password;
    citizenDTO.address = citizen.address;
    citizenDTO.contact = citizen.contact;

    this.citizenService.registerCitizen(citizenDTO).subscribe(
      data => {
        console.log(data)
          },
      error => console.log(error)
    )
  }
  transfer(){
    this.router.navigate(['login']);
  }
}



