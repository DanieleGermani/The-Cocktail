import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ApiGeneratorService {
  textRandom:any[]=[];
  loading:boolean = false;

  constructor(public http:Http) {
    this.lodindigInfoS3();
    this.lodindigInfoS3();
    this.lodindigInfoS3();
    this.lodindigInfoS3();
    this.lodindigInfoS3();
  }

  public lodindigInfoS3() {
  this.http.get('https://www.randomtext.me/api/gibberish')
    .subscribe(data => {
      this.loading = true;

      this.textRandom.push(data.json().text_out.replace(/<p>|<\/p>/g, ''));
    
    })


}

}
