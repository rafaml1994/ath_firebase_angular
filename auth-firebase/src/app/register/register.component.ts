import { Component,  OnInit  } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  email!:string;
  password!:string;
  checkoutForm;

  constructor(
    private authService: AuthService,
    private router : Router
  ) {
    this.checkoutForm = new FormGroup({
      email:new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit() {
    /* this.authService.register(this.email,this.password); */
  }

  onSubmit(data:any){
    this.authService.register(data)
    .then(response =>{
      console.log(response);
      
    })
    .catch( err => console.log(err));
    this.checkoutForm.reset();
    console.log(data);
    this.router.navigate(['/login'])
  }
}
