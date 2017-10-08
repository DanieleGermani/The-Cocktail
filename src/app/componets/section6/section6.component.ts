import { Component} from '@angular/core';
import {ApiGeneratorService } from '../../services/api-generator.service';

@Component({
  selector: 'app-section6',
  templateUrl: './section6.component.html',
  styleUrls: ['./section6.component.scss']
})
export class Section6Component  {

  constructor(public _RndTextS:ApiGeneratorService ) { }



}
