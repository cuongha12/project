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
    let id_edit = this.route.snapshot.params['id']
    this.service.getDetailHome(id_edit).subscribe(data => {
      this.formData.patchValue(data)
      console.log(this.formData.value.img);
      console.log(this.formData.value.price);
      console.log(this.formData.value.id);
      let dataEdit: any = document.getElementById('address')
      dataEdit.value
      if (data.itemhome === true) {
        dataEdit.value = 'Home'
      }
      if (data.itemfoot === true) {
        dataEdit.value = 'Foot'
      }
      if (data.itemwomen === true) {
        dataEdit.value = 'Women'
      }
      if (data.itemman === true) {
        dataEdit.value = 'Man'
      }
      if (data.itemacc === true) {
        dataEdit.value = 'Accessories'
      }
      if (data.itembags === true) {
        dataEdit.value = 'Bags'
      }
    })
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
    this.service.putProduct(this.data, this.formData.value.id).subscribe((data) => {
      console.log(data);
      alert('Done')
      this.router.navigate(['/admin/products'])
    })
    // }
  }


  get f(): any {
    return this.formData.controls
  }
  Address() {
    let data: any = document.getElementById('address')
    data.value
    let add: string = data.value
    alert(add)
    if (add.toLocaleLowerCase() == 'home') {
      this.data.itemhome = true
    } else {
      this.data.itemhome = false
    }
    if (add.toLocaleLowerCase() == 'foot') {
      this.data.itemfoot = true
    } else {
      this.data.itemfoot = false
    }
    if (add.toLocaleLowerCase() == 'accessories') {
      this.data.itemacc = true
    } else {
      this.data.itemacc = false
    }
    if (add.toLocaleLowerCase() == 'women') {
      this.data.itemwomen = true
    } else {
      this.data.itemwomen = false
    }
    if (add.toLocaleLowerCase() == 'man') {
      this.data.itemman = true
    } else {
      this.data.itemman = false
    }
    if (add.toLocaleLowerCase() == 'bags') {
      this.data.itembags = true
    } else {
      this.data.itembags = false
    }
  }
}
