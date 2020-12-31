import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-csidenav',
  templateUrl: './csidenav.component.html',
  styleUrls: ['./csidenav.component.css']
})
export class CsidenavComponent implements OnInit {

  //theme:any=localStorage.getItem('theme')
  theme: any
  username = sessionStorage.getItem('username')
  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.theme.subscribe(data =>
      this.theme = data
    )

  }
}
