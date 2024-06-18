import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  registerForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService,
    private router:Router
  ){

  }

  ngOnInit(): void {
    this.registerForm = this.initForm();
  }

  initForm(): FormGroup{
   return this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(){
    this.userService.register(this.registerForm.value.email, this.registerForm.value.password)
    .then(response => {
      console.log(response);
      this.router.navigate(['/login']);
    })
    .catch(error => {
      console.log(error);
    });
  }
}
