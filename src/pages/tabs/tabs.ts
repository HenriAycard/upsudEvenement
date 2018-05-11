import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';


import { AngularFireAuth } from  "angularfire2/auth";
import { BdePage } from '../bde/bde';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root

  constructor(private myAuth: AngularFireAuth) {
    this.myAuth.authState.subscribe(data => {
      if(data && data.email && data.uid){
        this.tab2Root = BdePage
      }else{
        this.tab2Root = LoginPage
      }
    })
  }
}
