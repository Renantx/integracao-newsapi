import { Component, OnInit } from '@angular/core';
import { NewapiService } from '../../services/newapi.service';

@Component({
  selector: 'app-integrcao',
  templateUrl: './integrcao.component.html',
  styleUrls: ['./integrcao.component.css']
})
export class IntegrcaoComponent implements OnInit {

  consumir = false;
  articles!: any[];

  constructor(private newapiservice: NewapiService) { }

  ngOnInit() {
    this.newapiservice.getTopHeadlines().then(response => {
      this.articles = response.data.articles;
      console.log(response)
    });
  }

  botao() {

  }
}
