import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpClient : HttpClient) { }

  //BASE URL
  baseUrl: string = 'https://fakestoreapi.com/products';


  //GET LIST OF PRODUCTS
  public listOfProducts(): Observable<any> {
    return this._httpClient.get(this.baseUrl);
  }

}
