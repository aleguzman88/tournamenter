import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) {}

  login() {
    // Here you can add the login logic, if necessary.
    //For example, you could validate the user's credentials with an authentication service.
    //Afterwards, you can navigate to the login route using the Router service.
    
    this.router.navigate(['/login']);
  }
  register(){
    this.router.navigate(['/register']);
  }

  home(){
    this.router.navigate(['/landing']);
  }

}

