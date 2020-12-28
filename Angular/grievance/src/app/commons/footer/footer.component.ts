import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  //theme:any=localStorage.getItem('theme')
  theme:any
  constructor(private _userService:UserService) { }

  ngOnInit(): void {
    this._userService.theme.subscribe(data=>{
      this.theme=data
    })
    console.log(this.theme)
  }


}
