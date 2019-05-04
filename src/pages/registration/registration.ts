import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NewBookingPage } from '../new-booking/new-booking';
import { Http,RequestOptions,URLSearchParams} from '@angular/http';
//import {HttpClient, HttpClientModule} from '@angular/common/http'
import 'rxjs/add/operator/map';


/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})

export class RegistrationPage {

  //@ViewChild('countryDiv') countryDiv: ElementRef;

  /*ngAfterViewInit() {
   alert(this.countryDiv.nativeElement);
 }*/

  apjSelected: string = "outline";
  emeaSelected: string = ""
  laSelected: string = "";
  naSelected: string = "";
  disableDIV: boolean;
  country: string;
  location: string;
  building: string;
  floor: string;
  countryDrpDownVals: any;
  locationDrpDownVals: Array<{title: string,id:string}>;
  buildingDrpDownVals: Array<{title: string,id:string}>;
  floorDrpDownVals : Array<{title: string,id:string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http) {
    this.disableDIV = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
    this.fillDropdown("apj");
  }


  save() {
    this.navCtrl.setRoot(NewBookingPage);
    //  alert("Selected " + this.country + " " + this.location + " "+this.building + " "+this.floor);
  }


fillDropdown(region:string){
      if(this.disableDIV == false)
      {
        this.disableDIV = true;
      }
      
      this.country= this.location = this.building = this.floor = "";
      let params: URLSearchParams = new URLSearchParams();
      params.set('path','getCountries');
      params.set('region',region);
      params.set('method',"GET");
      
      let requestOptions = new RequestOptions();
      requestOptions.search = params;

      this.http.get("https://cl08om4rdi.execute-api.us-east-1.amazonaws.com/dev/mrmusersettings", requestOptions)
      .toPromise()
      .then(response => response.json())
      .catch(console.log);      
  } 

  fillLocationDrpDown(selectedVal: any) {
    if (selectedVal == 1) {
      this.locationDrpDownVals = [
        { title: 'Hyderabad', id: "1" },
        { title: 'Bangalore', id: "2" }
      ];

    }

  }
  fillBuildingDrpDown(selectedVal: any) {
    if (selectedVal == 1) {
      this.buildingDrpDownVals = [
        { title: 'Bldg 1', id: "1" },
        { title: 'Bldg 2', id: "2" }
      ];

    }
    else {
      this.buildingDrpDownVals = [
        { title: 'Bldg 1', id: "1" },
      ];
    }
  }
  fillFloorDrpDown(selectedVal: any) {
    if (selectedVal == 1) {
      this.floorDrpDownVals = [
        { title: 'Floor 1', id: "1" },
        { title: 'Floor 2', id: "2" },
        { title: 'Floor 3', id: "3" },
        { title: 'Floor 4', id: "4" },
        { title: 'Floor 5', id: "5" },
        { title: 'Floor 6', id: "6" },
      ];

    }
    else {
      this.floorDrpDownVals = [
        { title: 'Floor 1', id: "1" },
        { title: 'Floor 2', id: "2" },
        { title: 'Floor 3', id: "3" },
        { title: 'Floor 4', id: "4" },
      ];
    }
  }
}
