import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductDataService } from 'src/app/product-data.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private servit: ProductDataService, private router: Router) { }

  ngOnInit(): void {
  }
  formSigup = new FormGroup({
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern("(09|03|07|08|05)+([0-9]{8})")
    ]),
    password: new FormControl('', [
      Validators.required
    ]),
    address: new FormControl(''),
    date: new FormControl(''),
  })

  onSubmit(): void {
    this.servit.createForm(this.formSigup.value).subscribe((data) => {
      if(data){
        this.router.navigate(['login'])
      }
    })
    console.log(this.formSigup.value)
  }
  get f(): any {
    return this.formSigup.controls;
  }
}
