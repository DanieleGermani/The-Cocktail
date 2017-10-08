import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ChuckjokeService {
  RndJoke: any[] = [];
  loading: boolean = false;

  constructor(public http: Http) {
    this.lodindigJoke();
    this.lodindigJoke();
    this.lodindigJoke();
    this.lodindigJoke();
  }

  public lodindigJoke() {
    this.http.get("https://api.chucknorris.io/jokes/random")
      .subscribe(data => {
        this.loading = true;
        this.RndJoke.push(data.json());
      })

  }

}
