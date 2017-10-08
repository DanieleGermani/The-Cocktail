import { Component} from '@angular/core';
import {ApiGeneratorService } from '../../services/api-generator.service';

@Component({
  selector: 'app-section4',
  templateUrl: './section4.component.html',
  styleUrls: ['./section4.component.scss']
})
export class Section4Component  {

  constructor(public _RndTextS:ApiGeneratorService) { }



}
