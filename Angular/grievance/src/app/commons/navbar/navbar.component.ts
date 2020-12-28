import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { UserService } from 'src/app/service/user.service';
import { LanguageService } from 'src/app/service/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  browserlang:string
  selectedlang1:string
  theme:any=localStorage.getItem('theme')
  constructor(private router:Router,public authService: AuthenticationService,private userService:UserService,private _langtranslate:LanguageService,public translate:TranslateService) {
    
    this._langtranslate.selectedlang.subscribe(res=>{
      console.log("res = "+res)
      this.selectedlang1=res
    })


    translate.addLangs(['hindi','en'])
    translate.setDefaultLang('en')
   
    this.browserlang=translate.getDefaultLang()
    this.languagechanged()
    this._langtranslate.selectedlang.next(this.browserlang)
    console.log("service "+this._langtranslate.selectedlang)
   }
   languagechanged(){
    this.translate.use(this.browserlang.match(/hindi|en/) ? this.browserlang:'en') 
  }
  changelang(lang:any){
    console.log(lang)
    // this.activeclass=lang
    this._langtranslate.selectedlang.next(lang)
    this.translate.use(lang)
    console.log(this._langtranslate.selectedlang)
  }
  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['login'])
  }
  dashboard(){
    let role = sessionStorage.getItem('username')
    console.log(role)
    if(role == "admin"){
      this.router.navigate(['/admin'])
    }
    if(role === "citizen"){
      this.router.navigate(['/citizen'])
    }
    if(role === "department"){
      this.router.navigate(['/department'])
    }
  }
  logout(){
    this.authService.logout()
    this.router.navigate(['/login'])
  }
  onRegisterClick(){
   this.router.navigate(['register'])
  }
  setTheme(theme:any){
    localStorage.setItem('theme',theme )
    this.theme=localStorage.getItem('theme')
    this.userService.theme.next(theme)

  }
}
