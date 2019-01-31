import { Component, OnInit } from '@angular/core';
import {NgModule} from '@angular/core';

import { MatInputModule } from '@angular/material/input'; 
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';


@NgModule ({
  declarations: [
    Component,
    NgModule
  ],
  imports: [
    MatInputModule, 
    FormControl, 
    FormGroupDirective, 
    NgForm, 
    Validators, 
    ErrorStateMatcher 
  
  ],
  exports: []
})

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  constructor() { }

  ngOnInit() {
    

  }

  

}
