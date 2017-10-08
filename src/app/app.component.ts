import { Component } from '@angular/core';
import {ApiGeneratorService } from './services/api-generator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public _RndTextS:ApiGeneratorService){}



}
