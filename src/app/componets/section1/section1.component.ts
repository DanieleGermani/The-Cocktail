import { Component} from '@angular/core';
import {CitiesService} from '../../services/cities.service';


@Component({
  selector: 'app-section1',
  templateUrl: './section1.component.html',
  styleUrls: ['./section1.component.scss']
})


export class Section1Component  {

  constructor(public _CitiesS:CitiesService) { }


  public searchCities(Input: string) {
    console.log(Input)


  }



}
