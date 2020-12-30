import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  num=0
  news:any
  constructor(private userService: UserService) {
    this.news=this.userService.getnews().subscribe(data =>{
      //@ts-ignore
      this.news=data.articles;
    })
   }

  ngOnInit(): void {
   
  }

}
