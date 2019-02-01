import { Component, OnInit } from '@angular/core';
import {NgModule} from '@angular/core';

import { FormControl, Validators } from '@angular/forms';


@NgModule ({
  declarations: [
    Component,
    NgModule
  ]
})

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor() { }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'Você precisa digitar um valor' : this.email.hasError('email') ? 'Não é um email valido' : '';
  }
}
