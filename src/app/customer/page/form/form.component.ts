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
  submit() {

    if (this.form.invalid) {
      this.servit.createForm(this.form.value).subscribe((data) => {
        this.router.navigate(['/login'])
      })
    }
  }
  form: any = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)],),
    number: new FormControl('', [Validators.required, Validators.pattern(/^(0|[1-9][0-9]*)$/)])

  });

  get f(): any {
    return this.form.controls;
  }
}
