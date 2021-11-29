import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbox',
  template: `
      <form class="searchbox" id="header-searchbox">
        <div class="input-group">
          <input class="form-control" placeholder="Search" type="text">
          <div class="input-group-btn">
            <button class="btn btn-default" type="submit">
                  <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
    </form>
  `,
  styles: [ ]
})

export class SearchboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
