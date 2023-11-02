import { Component, OnInit } from '@angular/core';
import { StateService } from '../services/state.service';
import { LoginUser } from '../utilites/interfaces/interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public loginUser!: LoginUser; 
constructor(private state:StateService){

}
  ngOnInit() {
    this.state.loginusr.subscribe((response:LoginUser)=>{
      this.loginUser=response;
  })
  }
}
