import { Component } from '@angular/core';

import { ResponseCountriesService } from './response-countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  service :ResponseCountriesService;

  allData:any;

  constructor( service :ResponseCountriesService){
    this.service=service;
  }
  
  submitAction(name:string){
    this.service.getDataFromAPI(name).subscribe(
      data=>{
        this.allData=(data);
        console.log(this.allData);
      },
      err=>{
        console.log(err)
      }
    );
  }

}









    