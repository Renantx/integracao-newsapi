import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class NewapiService {

  constructor() { }

  apiKey = 'd74187b75a744046b54a6080915abcf9';

  getTopHeadlines() {
    return axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${this.apiKey}`);
  }
}
