import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AlertService} from '../../services/alert.service';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  loginFailed: boolean = false;

  constructor( private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.initializeForm();
   
  }

  initializeForm(){
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

   // convenience getter for easy access to form fields
   get formGetter() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    const formData = {
  username : this.formGetter.username.value,
  password : this.formGetter.password.value
    }

    this.loading = true;
    this.loginService.login(formData)
    .subscribe(
      (data) => {

        if( data.message == 'Successfully Login'){
          this.loading = false;
          this.alertService.success(data.message);
          this.router.navigate(['/directory']);

        } else if(data.message == 'Incorrect username or password') {
          this.alertService.error('Incorrect username or password', true);
          this.loading = false;
        }

      },
      error => {
        this.alertService.error('Incorrect username or password', true);
        this.loading = false;
      });

  }


}
