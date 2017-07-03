import { Component, OnInit } from '@angular/core';

import { GetdataService } from '../services/getdata/getdata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _products: GetdataService) { }

  ngOnInit() {
  }

  getOtherProducts()
  {
  	
  }
}
