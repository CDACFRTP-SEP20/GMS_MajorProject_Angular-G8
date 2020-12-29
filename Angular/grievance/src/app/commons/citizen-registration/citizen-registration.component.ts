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
  citizendto: CitizenDTO = new CitizenDTO();
  validUsername:boolean = false;

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
      name: ['', [Validators.required,Validators.minLength(3),Validators.pattern("^[a-zA-Z\\s]*$")]],
      username: ['', [Validators.required,Validators.minLength(3)]],
      password: ['', [Validators.required,Validators.minLength(6)]], 
      address: ['', Validators.required],
      email: ['',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
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
    citizenDTO.email = citizen.email;

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

  checkUsername(){
    this.citizenService.checkUsername(this.registerForm.get('username').value).subscribe(data => { 
      this.validUsername = data;
      console.log(this.validUsername);
      
    });
  }
}



