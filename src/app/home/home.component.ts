import { Component, OnInit } from '@angular/core';
import { LaravelService } from '../services/laravel.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private me = {
    name: '',
    email: '',
  };
  constructor(
    private ws: LaravelService
  ) {  }

  ngOnInit() {
    this.ws.me().subscribe(
      response => {
        this.me = response;
      }
    );
  }

}
