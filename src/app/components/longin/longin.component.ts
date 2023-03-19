import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-longin',
  templateUrl: './longin.component.html',
  styleUrls: ['./longin.component.css']
})



  export class LonginComponent {
    email: string;
    password: string;

    constructor(private router: Router) { 
      this.password = '';
      this.email= '';
    }
  
    login() {
      console.log(this.email);
      console.log(this.password);
      this.router.navigate(['/tournaments']);
    }
  }


