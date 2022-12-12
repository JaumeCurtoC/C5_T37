import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  characters: any = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://rickandmortyapi.com/api/character/1,2,3,4,5')
    .subscribe(res => this.characters=res);
  }

}
