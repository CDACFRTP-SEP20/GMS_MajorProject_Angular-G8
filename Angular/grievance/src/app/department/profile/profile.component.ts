import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

isOn : boolean = false;

@Output() messageEvent = new EventEmitter<boolean>();

  hideComponent(){
    this.isOn =true;
    this.messageEvent.emit(this.isOn);
  }
  

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  changePass(){
      this.route.navigate(['department/department-change-password'])
  }
}
