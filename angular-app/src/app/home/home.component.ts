import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public serverData: string;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<string>('https://localhost:44340/api/test')
      .subscribe(result => {
        this.serverData = result;
      });
  }
}
