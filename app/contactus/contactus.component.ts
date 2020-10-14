import { Component, OnInit } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, EmailValidator } from '@angular/forms'

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
  providers: [{ provide: NG_VALIDATORS, useExisting: EmailValidator, multi:true }]
})
export class ContactusComponent implements OnInit {

  public input: any;


  constructor() {
    this.input = {
      "email": "",
      "fullname": "",
      "phone":"",
    }
  }


  ngOnInit(): void {
  }

  public validate(control: AbstractControl): { [key: string]: any } {
    let emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let valid = emailRegex.test(control.value);
    return control.value < 1 || valid ? null : { 'email': true };
  }

}
