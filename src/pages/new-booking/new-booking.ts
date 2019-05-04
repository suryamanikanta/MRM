import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Nav, Platform } from 'ionic-angular';
import { LayoutPage } from '../layout/layout';
import { MyApp } from '../../app/app.component';
// declare var jquery:any;
declare var $: any;

/**
 * Generated class for the NewBookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-booking',
  templateUrl: 'new-booking.html',
})
export class NewBookingPage {
  @ViewChild(Nav) nav: Nav;

  layoutPage = LayoutPage;
  
  minDate: string = new Date().toISOString();
  params: any = {
    title: 'Rajeev Deshpande meeting',
    date: new Date().toISOString(),
    time: this.calculateTime(),
    location: 'APJ-India',
    region: 'ITC Hyderabad',
    building: '2',
    floor: '1',
    room: 'Conference 4'
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.calculateTime());
  }

  ionViewDidLoad() {
    $("#range").ionRangeSlider({
      params: this.params,
      type: "double",
      grid: true,
      min: 0.0,
      max: 24.0,
      from: this.params.time.from,
      to: this.params.time.to,
      step: "0.5",
      grid_num: 12,
      prettify: function (number) {
        var temp;
        if (Math.round(number) == number) {
          temp = number+":00";
          // this.params.time.from = number+":00";
        } else {
          temp = (number - 0.5) + ":30";
          // this.params.time.to = (number - 0.5) + ":30";
        }
        return temp;
      },
      onFinish: function (obj) {
        this.params.time.from = obj.from_pretty;
        this.params.time.to = obj.to_pretty;
      }
    });
  }
  navigate(){
   
    //this.activePage = page;
  }
  onChange(ev: any) {
    console.log('Changed', ev);
  }

  updateTime(obj) {
    console.log(obj);
    console.log(this.params);

  }

  calculateTime(){
    var d = new Date();
    if(d.getMinutes() >0 && d.getMinutes() <= 30){
      return {'from':parseFloat(d.getHours()+'.5'), 'to': d.getHours()+1};
    } else if(d.getMinutes() >30 && d.getMinutes() < 60) {
      return {'from':d.getHours()+1, 'to':parseFloat(d.getHours()+1+'.5')};
    }
  }

}
