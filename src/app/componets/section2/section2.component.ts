import { Component } from '@angular/core';
import {ChuckjokeService } from '../../services/chuckjoke.service';


@Component({
  selector: 'app-section2',
  templateUrl: './section2.component.html',
  styleUrls: ['./section2.component.scss']
})
export class Section2Component  {



  constructor(public _RndJoke: ChuckjokeService) {}


}
