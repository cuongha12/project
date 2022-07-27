import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDataService } from 'src/app/product-data.service';

@Component({
  selector: 'app-adproduct',
  templateUrl: './adproduct.component.html',
  styleUrls: ['./adproduct.component.css']
})
export class AdproductComponent implements OnInit {


  checkImg: boolean = false
  imageMain: string = ''
  image_child: Array<string> = []
  listCategory: any
  data: any = {}
  formData = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    id: new FormControl(''),
    img: new FormControl(''),
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
    // let id_edit = this.route.snapshot.params['id']
    // this.service.getDetailHome(id_edit).subscribe(data => {
    //   this.formData.patchValue(data)
    //   console.log(this.formData.value.img);
    //   console.log(this.formData.value.price);
    //   console.log(this.formData.value.id);
    // })
  }
  submitForm() {
    alert('ok')
    // if (!this.formData.value.img) {
    //   this.checkImg = true
    // } else {
    this.data.id = this.formData.value.id
    this.data.name = this.formData.value.name
    this.data.price = this.formData.value.price
    this.data.img = this.formData.value.img


    this.service.postProduct(this.data).subscribe((data) => {
      console.log(data);
      if (confirm('ban co muon ra trang danh sach khong ? ')) {
        this.router.navigate(['/admin/products'])
      }

    })
    // }
  }


  get f(): any {
    return this.formData.controls
  }

}
