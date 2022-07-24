import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductDataService } from 'src/app/product-data.service';
@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {
  
  checkImg: boolean = false
  imageMain: string = ''
  image_child: Array<string> = []
  listCategory: any
  data = new onilit()
  formData = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    id: new FormControl(''),
    sale_price: new FormControl(''),
    image: new FormControl(''),
    image_child: new FormControl([]),
    category_id: new FormControl([]),
    new: new FormControl(false),
    sale: new FormControl(false),
    feature: new FormControl(false)
  })
  constructor(private service: ProductDataService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    
    const children = document.querySelector('.showImage')
    children?.addEventListener('click', (e: any) => {
      let id: number = e.target.id
      let test = document.getElementById("change-image-child")
      if (id) {
        test?.click()
        document.querySelector("#change-image-child")?.addEventListener('change', (e: any) => {
          let render = new FileReader()
          let file = e.target.files
          render.readAsDataURL(file[0])
          render.onload = () => {
            this.image_child[id] = (render.result as string)
            this.formData.value.image_child[id] = this.image_child[id]
          }
        })
      }
    })
    // phần thêm mới của edit
    let id_edit = this.route.snapshot.params['id']
    this.service.getItem(id_edit).subscribe(data => {
      this.formData.patchValue(data)
      console.log(this.formData.value.image);
      this.imageMain = this.formData.value.image
      this.image_child = this.formData.value.image_child
      this.formData.value.category_id.forEach((id: any) => {
        let data: any = document.getElementById(id)
        data.checked = true
      })
    })
  }
  submitForm() {
    if (!this.formData.value.image) {
      this.checkImg = true
    } else {
      this.data.id = this.formData.value.id
      this.data.name = this.formData.value.name
      this.data.feature = this.formData.value.feature
      this.data.price = this.formData.value.price
      this.data.sale = this.formData.value.sale
      this.data.sale_price = this.formData.value.sale_price
      this.data.new = this.formData.value.new
      this.data.image_child = this.formData.value.image_child
      this.data.category_id = this.formData.value.category_id
      this.data.image = this.formData.value.image
      this.service.putProduct(this.data,).subscribe(() => {
        console.log(this.data);
        alert('Done')
        this.router.navigate(['/admin/products'])
      })
    }
  }
  
  
  get f(): any {
    return this.formData.controls
  }

}
