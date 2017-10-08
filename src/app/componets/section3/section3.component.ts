import { Component } from '@angular/core';
import{ApiGeneratorService} from '../../services/api-generator.service';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss']
})
export class Section3Component  {

  constructor(public _RndTextS:ApiGeneratorService) { }



}
