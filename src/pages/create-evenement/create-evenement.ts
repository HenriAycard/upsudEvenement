import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseProvider } from '../../providers/firebase/firebase';

import { AngularFireAuth } from "angularfire2/auth"
import { Http } from '@angular/http';


import { LoginPage } from '../login/login';
import { BdePage } from '../bde/bde';

/**
 * Generated class for the CreateEvenementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-evenement',
  templateUrl: 'create-evenement.html',
})
export class CreateEvenementPage {


  NomBde
  uid

  nomEvenement
  description
  date
  time
  lieu

  constructor(private myAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public firebaseService: FirebaseProvider, public http: Http) {
   this.myAuth.authState.subscribe( data => {
     if( data && data.email && data.uid){
        this.uid = data.uid
        var opt = JSON.stringify(data.uid)
        this.http.post('http://51.38.187.84/nombde.php', opt).subscribe(data => {
          this.NomBde = data['_body'];
          })
     }else{
       this.navCtrl.setRoot(LoginPage)
     }
   })

  }

 cancel(){
   this.navCtrl.setRoot(BdePage)
 }

  addItem() {
    var opt = JSON.stringify({uid:this.uid,
                              nomEvenement:this.nomEvenement,
                              description:this.description,
                              date:this.date,
                              time:this.time,
                              lieu:this.lieu});

    this.http.post('http://51.38.187.84/createEvenement.php', opt).subscribe(data => {
      console.log(data['_body']);
      })
    //this.firebaseService.addEvenement(this.nomBDE, this.nomEvenement, this.description, this.date, this.time, this.lieu, this.uid);
    this.navCtrl.setRoot(BdePage);
  }
  
}
