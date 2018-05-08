import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    public flashMessages: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  onSubmitLogin() {
    this.authService.loginEmail(this.email, this.password)
      .then((res) => {
        this.flashMessages.show('Wszystko przebiegło poprawnie - użytkownik został zalogowany',
        { cssClass: 'alert-success', timeout: 4000 });
        this.router.navigate(['/user']);
      }).catch((err) => {
        this.flashMessages.show(err.message,
        { cssClass: 'alert-danger', timeout: 4000 });
        this.router.navigate(['/login']);
      });

  }

  onClickGoogleLogin() {
    this.authService.loginGoogle()
    .then((res) => {
      this.flashMessages.show('Wszystko przebiegło poprawnie - użytkownik został zalogowany',
      { cssClass: 'alert-success', timeout: 4000 });
      this.router.navigate(['/user']);
    }).catch( err =>  this.flashMessages.show(err.message,
      { cssClass: 'alert-danger', timeout: 4000 }));
  }

  onClickFacebookLogin() {
    this.authService.loginFacebook()
    .then((res) => {
      this.flashMessages.show('Wszystko przebiegło poprawnie - użytkownik został zalogowany',
      { cssClass: 'alert-success', timeout: 4000 });
      this.router.navigate(['/user']);
    }).catch( err =>  this.flashMessages.show(err.message,
      { cssClass: 'alert-danger', timeout: 4000 }));
  }

}