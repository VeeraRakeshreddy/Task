import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class ResponseCountriesService {
 

  constructor( private http:HttpClient) { }


  endPoint:string = 'https://api.nationalize.io/?name';
  getDataFromAPI(name:string):Observable<Country>{
    let actualEndPoint = this.endPoint+'='+name;
    console.log('inside Service :-'+actualEndPoint);
    return this.http.get<Country>('${ actualEndPoint}');
  }

}
