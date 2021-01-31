import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  form: FormGroup;

 constructor(fb: FormBuilder) {
    this.form = fb.group({
      email: ['',
      [
        Validators.required,
        Validators.email,
        Validators.minLength(5),
        Validators.maxLength(25)
      ]
    ],

    password: ['',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern('(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}')
      ]
    ]
    })
  }
  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.form.value);
  }
}
