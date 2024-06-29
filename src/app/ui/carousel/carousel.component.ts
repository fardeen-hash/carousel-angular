import { Component, Input } from '@angular/core';
import { Product } from '../../../models/product.interface';
@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  @Input() category:string=' ';
  filtered_data: any = [];
  data1: any;
    async getData(){
      try{
          let data= await fetch('https://dummyjson.com/products')
          let Data = await data.json();
          this.data1=Data.products;
         this.filtered_data = Data.products.filter( (product:Product) =>product.category === this.category);
          console.log(this.filtered_data)
      }
      catch(error){
        console.log(error)
      }
    }
    ngOnInit(): void {
      this.getData();
    }
}
