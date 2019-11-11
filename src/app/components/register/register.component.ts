import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formRegister: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formRegister =  this.fb.group({
      email: ['', [Validators.required, gmailValidators]],
      password: '',
      subjects: this.fb.group({
        NodeJS: false,
        Angular: false,
        ReactJS: false
      })
    });
  }

  onSubmit() {
    console.log(this.formRegister.value);

  }
}

function gmailValidators(formControl: FormControl) {
  if(formControl.value.includes('@gmail.com')) {
    return null;
  }
  return {
    gmail: true
  }

}
