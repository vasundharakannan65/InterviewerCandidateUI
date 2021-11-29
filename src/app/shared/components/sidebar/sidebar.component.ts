import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
  <section class="card">
      <div class="card-body">
          <label>Search</label>
          <input type="text" placeholder="Keyword Search" class="form-control" />
      </div>
  </section>
  <section class="card">
      <div class="card-header">
          Category
      </div>
      <div class="card-body">
          <ul class="nav">
              <li class="nav-item">
                  <a href="#" class="active"><i class="fas fa-angle-right"></i> Dress</a>
              </li>
              <li class="nav-item">
                  <a href="#"><i class="fas fa-angle-right"></i> Beauty</a>
              </li>
              <li class="nav-item">
                  <a href="#"><i class="fas fa-angle-right"></i> Jeans</a>
              </li>
              <li class="nav-item">
                  <a href="#"><i class="fas fa-angle-right"></i> Jewellery</a>
              </li>
              <li class="nav-item">
                  <a href="#"><i class="fas fa-angle-right"></i> Electronics</a>
              </li>
              <li class="nav-item">
                  <a href="#"><i class="fas fa-angle-right"></i> Sports</a>
              </li>
          </ul>
      </div>
  </section>
  <section class="card">
      <div class="card-header">
          Price Range
      </div>
      <div class="card-body">
          <input type="range" class="form-range" min="50" max="500" step="50" id="customRange3">
      </div>
  </section>
  <section class="card">
      <div class="card-header">
          Filter
      </div>
      <div class="card-body">
          <form role="form product-form">
              <div class="form-group">
                  <label>Brand</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                  <option>Levis</option>
                  <option>Nike</option>
                  <option>Flower</option>
                  </select>
              </div>
              <div class="form-group">
                  <label>Color</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                  <option>Red</option>
                  <option>Black</option>
                  <option>White</option>
                  <option>Yellow</option>
                  <option>Orange</option>
                  </select>
              </div>
              <div class="form-group">
                  <label>Type</label>
                  <select class="form-control" id="exampleFormControlSelect1">
                  <option>XS</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                  <option>XXL</option>
                  </select>
              </div>
              <button class="btn btn-primary btn-sm" type="submit">Filter</button>
          </form>
      </div>
  </section>`,
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
