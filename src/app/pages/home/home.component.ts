import { Component } from '@angular/core';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private auth: UserService, private router: Router){

  }

  logout(){
    this.auth.logout()
    .then(() => {
      this.router.navigate(['/login']);
    })
    .catch(error => {
      console.log(error);      
    });
  }
}
