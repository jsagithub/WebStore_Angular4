import { Component, OnInit } from '@angular/core';

import { GetdataService } from '../services/getdata/getdata.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  itemsList: any = [];
  constructor(private _products: GetdataService) { 
  	this._products.getProducts().subscribe(
        data => {
          console.log(data);
          this.itemsList = data;          
        }
    );
  	
  }

  getOtherProducts()
  {
  	this._products.getOtherProducts().subscribe(
        data => {
          this.itemsList = data;          
        }
    );
  }

  ngOnInit() {
  	
  }

}
