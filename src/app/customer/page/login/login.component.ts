import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  formSigup= new FormGroup({
    userName: new FormControl('',[
      Validators.required,
      Validators.minLength(6)
    ]),
    email: new FormControl('',[
      Validators.required,
      Validators.email
    ]),
    phone: new FormControl('',[
      Validators.required,
      Validators.pattern("(09|03|07|08|05)+([0-9]{8})")
    ]),
    password:new FormControl('',[
      Validators.required
    ]),
    address: new FormControl(''),
    date:new FormControl(''),
   })

   get f():any{
    return this.formSigup.controls;
  }
  onSubmit(){
   
  }

}
