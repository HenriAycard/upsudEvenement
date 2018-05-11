import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { User } from '../../modules/user'
import { AngularFireAuth } from  "angularfire2/auth";

import { BdePage } from '../bde/bde';
import { FirebaseProvider } from '../../providers/firebase/firebase';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  loginForm: FormGroup;
  loading: Loading;

  user = {} as User;
  connecter = false 

  constructor(private myAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public firebaseService: FirebaseProvider) {
    
    this.loginForm = formBuilder.group({
      email: [
        '',
        Validators.compose([Validators.required, EmailValidator.isValid]),
      ],
      password: [
        '',
        Validators.compose([Validators.minLength(6), Validators.required]),
      ],
    });



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginUser(){
    if (!this.loginForm.valid){
      console.log(this.loginForm.value);
    } else {
      const result = this.myAuth.auth.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password)

      result.then( authData => {
        this.myAuth.authState.subscribe(data => {
          if(data && data.email && data.uid){
            this.navCtrl.setRoot(BdePage)
          }
        })  


      }, error => {
        this.loading.dismiss().then( () => {
          let alert = this.alertCtrl.create({
            message: error.message,
            buttons: [
              {
                text: "Ok",
                role: 'cancel'
              }
            ]
          });
          alert.present();
        });
      });
  
      this.loading = this.loadingCtrl.create({
        dismissOnPageChange: true,
      });
      this.loading.present();
    }
  }

  

}

export class EmailValidator {
  static isValid(control: FormControl) {
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(
      control.value
    );

    if (re) {
      return null;
    }

    return {
      invalidEmail: true,
    };
  }
}
