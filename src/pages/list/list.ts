import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string,FromTime:string,ToTime:string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];
    this.items=[];
    this.items.push({
      title: 'AWS Session ' ,
      note: 'Building 2, Floor 1 Conf 1' ,
      FromTime:'6/15/2018 - 12:30 PM',
      ToTime:'6/15/2018 - 02:30 PM',
      icon: this.icons[1]
    });
    this.items.push({
      title: 'GPOC Team' ,
      note: 'Building 2, Floor 1 Conf 3' ,
      FromTime:'6/18/2018 - 02:30 PM',
      ToTime:'6/15/2018 - 03:30 PM',
      icon: this.icons[1]
    });
    this.items.push({
      title: 'Staff Meeting' ,
      note: 'Building 2, Floor 1 Conf 5' ,
      FromTime:'6/14/2018 - 04:30 PM',
      ToTime:'6/15/2018 - 05:00 PM',
      icon: this.icons[1]
    });
    // this.items = [{title: 'AWS Session',note: 'Building 2, Floor 1 Conf 1' },{title: 'GPOC Team',note: 'Building 2, Floor 1 Conf 3' }];
    // for (let i = 1; i < 11; i++) {
    //   this.items.push({
    //     title: 'Meeting ' + i,
    //     note: 'This is item #' + i,
    //     icon: this.icons[Math.floor(Math.random() * this.icons.length)]
    //   });
    // }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
