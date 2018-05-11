import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//import { AngularFireList } from 'angularfire2/database';
//import { FirebaseProvider } from '../../providers/firebase/firebase';
//import { HTTP } from '@ionic-native/http';
import { Http } from '@angular/http';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  posts

  constructor (public navCtrl: NavController, public http: Http) {
    console.log("1");
    this.http.get('http://51.38.187.84/test.php').map(res => res.json()).subscribe(data => {
        this.posts = data;
    });

    /*this.firebaseService.getNomBdeByIndex().snapshotChanges().map(actions => {
      return actions.map(action => ({ key: action.key, ...action.payload.val() }));
      }).subscribe(items => {
    });*/
 
  }

  ionViewWillEnter(){
    this.http.get('http://51.38.187.84/test.php').map(res => res.json()).subscribe(data => {
        this.posts = data;
    });
  }


}
