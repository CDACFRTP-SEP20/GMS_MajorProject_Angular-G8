import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  //theme:any=localStorage.getItem('theme')
  theme: any
  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.theme.subscribe(data => {
      this.theme = data
    })
  }
}
