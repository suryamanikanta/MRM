import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LayoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-layout',
  templateUrl: 'layout.html',
})
export class LayoutPage {

  disableDIV:boolean;
 country : string;
 location:string;
 building:string;
 floor:string;
  countryDrpDownVals: Array<{title: string,id:string}>;
  locationDrpDownVals: Array<{title: string,id:string}>;
  buildingDrpDownVals: Array<{title: string,id:string}>;
  floorDrpDownVals : Array<{title: string,id:string}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LayoutPage');
  }

  fillDropdown(region:string){
    if(this.disableDIV == false)
    {
      this.disableDIV = true;
    }
    this.country= this.location = this.building = this.floor = "";
    this.countryDrpDownVals = this.locationDrpDownVals= this.buildingDrpDownVals = this.floorDrpDownVals=[];
    if(region=="apj"){
    this.countryDrpDownVals = [
      { title: 'India', id: "1" },
      { title: 'Pakistan', id:"2" },
      { title: 'Japan', id:"3" }
    ];
  }
  else if(region=="emea"){

    this.countryDrpDownVals = [
      { title: 'France', id: "4" },
      { title: 'Germany', id:"5" },
      { title: 'Iran', id:"6" }
    ];
  }
  else if(region == "la")
  {
    this.countryDrpDownVals = [
      { title: 'Argentina', id: "7" },
      { title: 'Brazil', id:"8" },
      { title: 'Venezuela', id:"9" }
    ];
  }
  else if(region=="na")
  {
    this.countryDrpDownVals = [
      { title: 'US', id: "4" },
      { title: 'Canada', id:"5" },
      { title: 'Mexico', id:"6" }
    ];

  }
} 

fillLocationDrpDown(selectedVal:any){
  if(selectedVal == 1)
  {
    this.locationDrpDownVals = [
      { title: 'Hyderabad', id: "1" },
      { title: 'Bangalore', id:"2" }
    ];

  }
  
}
fillBuildingDrpDown(selectedVal:any){
  if(selectedVal == 1)
  {
    this.buildingDrpDownVals = [
      { title: 'Bldg 1', id: "1" },
      { title: 'Bldg 2', id:"2" }
    ];

  }
  else
  {
    this.buildingDrpDownVals = [
      { title: 'Bldg 1', id: "1" },
    ];
  }
}
fillFloorDrpDown(selectedVal:any){
  if(selectedVal == 1)
  {
    this.floorDrpDownVals = [
      { title: 'Floor 1', id:"1" },
      { title: 'Floor 2', id:"2" },
      { title: 'Floor 3', id:"3" },
      { title: 'Floor 4', id:"4" },
      { title: 'Floor 5', id:"5" },
      { title: 'Floor 6', id:"6" },
    ];

  }
  else
  {
    this.floorDrpDownVals = [
      { title: 'Floor 1', id:"1" },
      { title: 'Floor 2', id:"2" },
      { title: 'Floor 3', id:"3" },
      { title: 'Floor 4', id:"4" },
    ];
  }
}

}
