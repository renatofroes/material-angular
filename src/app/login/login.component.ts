import { Component, OnInit } from '@angular/core';
import {NgModule} from '@angular/core';

import { FormControl, Validators } from '@angular/forms';
import { LaravelService } from '../services/laravel.service';
import { Router } from '@angular/router';
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
  password = new FormControl('', [Validators.required]);
  constructor(
    private ws: LaravelService,
    public router: Router
  ) {  }

  ngOnInit() {
  }

  getErrorMessage(field) {
    if ( field === 'password' ) {
      return this.password.hasError('required') ? 'Digite uma senha' : '';
    }
    return this.email.hasError('required') ? 'Você precisa digitar um email cadastrado' :
            this.email.hasError('email') ? 'Não é um email valido' : '';
  }

  logar() {
    // window.console.log(this.email.value, this.password.value);
    this.ws.login(this.email.value, this.password.value)
    .subscribe(
      response => {
        if (response) {
          this.router.navigate(['/home']);
        } else {
          alert('erro ao logar');
        }
      },
      error => {
        alert('erro ao realizar login');
      }
    );
  }
}
