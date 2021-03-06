import { Component, OnInit } from '@angular/core';

import { SocialLoginModule, AuthServiceConfig, AuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from '../cookieservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor( private socialAuthService: AuthService, private http: HttpClient, private router: Router, private cookieService: CookieService) {}

  ngOnInit() {
  }

  public signinWithGoogle () {
    let socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;

     this.socialAuthService.signIn(socialPlatformProvider)
     .then((userData) => {
        //on success
        //this will return user data from google. What you need is a user token which you will send it to the server
        this.sendToRestApiMethod(userData.id, userData.authToken);
     });
  }

  sendToRestApiMethod(user_id: string, token: string) : void {
    console.log("Angular token: " + token);
    this.http.post("https://safe-ridge-41224.herokuapp.com/updateAndVerifyToken",
       {
          user_id: user_id,
          token: token
       }, {
         headers: new HttpHeaders()
             .set('Accept', 'application/json')
       }
    ).subscribe(
       onSuccess => {
         console.log("Success - " + token);
          //login was successful
          //save the token that you got from your REST API in your preferred location i.e. as a Cookie or LocalStorage as you do with normal login
          this.cookieService.setWithExpiryInSeconds("sessionId", token, 20);
          this.cookieService.setWithExpiryInSeconds("user_id", user_id, 20);
          this.router.navigate(['/issues']);
       }, onFail => {
         console.log("Fail");
          //login was unsuccessful
          //show an error message
       }
    );
  }
}
