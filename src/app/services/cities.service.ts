import { Injectable } from '@angular/core';
import{Http} from '@angular/http';

@Injectable()
export class CitiesService {
  infoService:any={};
  cities:any[]=[];
  loading:boolean=false;

  constructor(public http:Http) {
    this.loadingCities()

  }

  public loadingCities() {

  this.http.get('http://sepomex.icalialabs.com/api/v1/cities')
    .subscribe(data => {
      this.loading = true;
      this.infoService = data.json();
      for (let i = 0; i < this.infoService.cities.length; i++) {
        let city = this.infoService.cities[i].name;

        this.cities.push(city)
       //console.info(this.cities);

      }
    })
}


//   public searchCities(input: string) {
//     if (this.cities.length === 0) {
//     this.loadingCities()
//     .then(() => {
//       this.filterCity(input);
//     });
//   } else {
//     this.filterCity(input);
//   }
//
//   }
//
// public filterCity(input:string){
//
// }



}
