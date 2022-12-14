import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() character:any = null;
  data:number = 0;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.data = this.character.id;
    this.http.get(`https://rickandmortyapi.com/api/character/${this.data}`)
    .subscribe(res => this.character = res);
  }

}
