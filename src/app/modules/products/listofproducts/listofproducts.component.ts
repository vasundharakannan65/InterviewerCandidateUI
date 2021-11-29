import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-listofproducts',
  template: `
      <div class="card-deck">
      <div class="card" *ngFor="let item of products;">
                <img class="card-img-top img-fluid" src="{{ item.image }}" alt="Card image cap" width="50" height="75">
                <div class="card-body">
                            <h4 class="card-title">{{ item.title }}</h4>
                            <p class="card-text">{{ item.description }}</p>
                            <p class="card-text">{{ item.category }}</p>
                </div>
                <div class="card-footer">
                            <h5 class="card-title">Rs.{{ item.price }}</h5>
                            <button class="btn btn-sm float-right" type="submit"><i class="fas fa-plus"></i></button>
                </div> 
              </div>
          
      </div>`,
  styles: [ ]
})
export class ListofproductsComponent implements OnInit {

  constructor(private _productService : ProductService) { }

  //INITIALISING
  products : any = [];

  //NGONINIT EXECUTES ONCE COMPONENT IS LOADED
  ngOnInit(): void {
    this.GetAllProducts();
  }

  //GETTING LIST OF PRODUCTS
  public GetAllProducts() {
      this._productService.listOfProducts().subscribe((products:any) => {
        this.products = products,
        (error : any) => {
          console.log(error);
        }
      })
  }

}

