import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class GetdataService {

  products:any = [];
 
  constructor(private _http: Http) { }

  getProducts()
  {
  	return this._http.get('http://localhost:3000/products').map((res: any) => res.json());

  
  	
  	/* return this._http.post('', {
  	 	headers: {
  	 			'x-access-token': '',  	 			
  	 		}

  	 	 }).map((res) => (res.json())); */ 
  }
  getOtherProducts()
  {
  	 return this._http.get('http://localhost:3000/products_1').map((res: any) => res.json());
  }
}
