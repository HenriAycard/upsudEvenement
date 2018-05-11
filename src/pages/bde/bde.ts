import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'
import { CreateEvenementPage } from '../create-evenement/create-evenement';
import { LoginPage } from '../login/login';
import { Http } from '@angular/http';

/**
 * Generated class for the BdePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bde',
  templateUrl: 'bde.html',
})
export class BdePage {

  NomBde
  uid



  constructor(private myAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public platform: Platform, public http: Http) {

    this.myAuth.authState.subscribe(data => {
      if(data && data.email && data.uid){
        this.uid = data.uid
        var opt = JSON.stringify(data.uid)
        this.http.post('http://51.38.187.84/nombde.php', opt).subscribe(data => {
          this.NomBde = data['_body'];
          })
      }else{
        this.logout()
      }
    })
  }

  creerEvenement(){
    this.navCtrl.push(CreateEvenementPage)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BdePage');
  }

  logout() {
    this.myAuth.auth.signOut().then( () => {
      this.navCtrl.setRoot(LoginPage)
    })
  }



}

