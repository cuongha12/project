import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDataService } from 'src/app/product-data.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  item: any = {};
  constructor(private service: ProductDataService, private actRouter: ActivatedRoute) { }

  ngOnInit(): void {
    let id: number = this.actRouter.snapshot.params['id']
    this.service.getDetailHome(id).subscribe((data) => {
      this.item = data
      

    })
  }
  mark(mark: any) {
    let quantily: any = document.getElementById('quantity')
    console.log(quantily)
    if (mark == '-') {
      if (quantily.value > 1) {
        quantily.value = quantily.value - 1
      }
    } else {
      quantily.value = Number(quantily.value) + 1
    }
  }
}
