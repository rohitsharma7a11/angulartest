import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent {
  constructor(private router:Router){
    if(localStorage.getItem('auth')){
      this.router.navigate([''])
    }
  }
users=[{
  email:'admin123@gmail.com',
  password:'Admin@123'
}]
  authForm = new FormGroup({
    userEmail: new FormControl('admin123@gmail.com', Validators.required,),
    password: new FormControl('Admin@123', [Validators.required, Validators.maxLength(5), Validators.minLength(10)]),
  })
  create(){
    const result = this.users.find(({ email}) => email==this.authForm.value.userEmail );
    if(result){
      if(result.password==this.authForm.value.password){
        localStorage.setItem('auth','login_Success')
        this.router.navigate([''])
      }else{
        alert("Password do not match")
      }

    }else{
      alert("Details do not match")
    }


  }
}
