import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor  (public afd: AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
  }

  getNomBde() {
    return this.afd.list('/evenement/nomBDE/');
  }

  getTime(){
    return this.afd.list('/evenement/time')
  }
  getNomEvenement(){
    return this.afd.list('/evenement/nomEvenement')
  }
  getLieu(){
    return this.afd.list('/evenement/lieu')
  }

  getDes() {
    return this.afd.list('/evenement/description');
  }

  getDate() {
    return this.afd.list('/evenement/date/');
  }
  getUID(){
    //let productos = this.afd.list('/BDE/UID/').map(products => products.map(product => product.$key));

    
    return this.afd.list('/BDE/UID/')
  }

  getNomBdeByIndex(){
    return this.afd.list('/BDE/nomBde')
  }
 
  addEvenement(nomBDE,nomEvenement,description,date,time,lieu,uid) {
    this.afd.list('/evenement/id/').push(uid);
    this.afd.list('/evenement/nomBDE/').push(nomBDE);
    this.afd.list('/evenement/nomEvenement').push(nomEvenement);
    this.afd.list('/evenement/description/').push(description);
    this.afd.list('/evenement/date/').push(date)
    this.afd.list('/evenement/time/').push(time)
    this.afd.list('/evenement/lieu/').push(lieu)
  }
 
  removeEvement(id) {
    this.afd.list('/evenement/nomBDE/').remove(id);
    this.afd.list('/evenement/description/').remove(id);

  }

  addBDE(uid,nomBde){
    this.afd.list('/BDE/UID/').push(uid);
    this.afd.list('/BDE/nomBde/').push(nomBde);
  }

  

}