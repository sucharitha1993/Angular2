import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class InfoService {
 
 constructor(public http: Http){}
 
 getInfo(){
   return this.http.get('/assets/data/personal-info.json').map( res => res.json());
 }
}