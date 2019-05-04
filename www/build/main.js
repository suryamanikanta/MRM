webpackJsonp([4],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LayoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LayoutPage = /** @class */ (function () {
    function LayoutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LayoutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LayoutPage');
    };
    LayoutPage.prototype.fillDropdown = function (region) {
        if (this.disableDIV == false) {
            this.disableDIV = true;
        }
        this.country = this.location = this.building = this.floor = "";
        this.countryDrpDownVals = this.locationDrpDownVals = this.buildingDrpDownVals = this.floorDrpDownVals = [];
        if (region == "apj") {
            this.countryDrpDownVals = [
                { title: 'India', id: "1" },
                { title: 'Pakistan', id: "2" },
                { title: 'Japan', id: "3" }
            ];
        }
        else if (region == "emea") {
            this.countryDrpDownVals = [
                { title: 'France', id: "4" },
                { title: 'Germany', id: "5" },
                { title: 'Iran', id: "6" }
            ];
        }
        else if (region == "la") {
            this.countryDrpDownVals = [
                { title: 'Argentina', id: "7" },
                { title: 'Brazil', id: "8" },
                { title: 'Venezuela', id: "9" }
            ];
        }
        else if (region == "na") {
            this.countryDrpDownVals = [
                { title: 'US', id: "4" },
                { title: 'Canada', id: "5" },
                { title: 'Mexico', id: "6" }
            ];
        }
    };
    LayoutPage.prototype.fillLocationDrpDown = function (selectedVal) {
        if (selectedVal == 1) {
            this.locationDrpDownVals = [
                { title: 'Hyderabad', id: "1" },
                { title: 'Bangalore', id: "2" }
            ];
        }
    };
    LayoutPage.prototype.fillBuildingDrpDown = function (selectedVal) {
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
    };
    LayoutPage.prototype.fillFloorDrpDown = function (selectedVal) {
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
    };
    LayoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-layout',template:/*ion-inline-start:"C:\Users\DOLSU01\Desktop\MRM\MRM-Mobile\src\pages\layout\layout.html"*/'<!--\n\n  Generated template for the LayoutPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="custom">\n\n        <ion-title>Selection</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <div id="countryDiv" #countryDiv>\n\n        <ion-list>\n\n            <ion-item>\n\n                <ion-label>Geo</ion-label>\n\n                <ion-select type="text" [(ngModel)]="geo" (ionChange)="fillLocationDrpDown($event)" required>\n\n                    <ion-option *ngFor="let p of countryDrpDownVals" value="{{p.id}}">{{p.title}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>Country</ion-label>\n\n                <ion-select type="text" [(ngModel)]="country" (ionChange)="fillLocationDrpDown($event)" required>\n\n                    <ion-option *ngFor="let p of countryDrpDownVals" value="{{p.id}}">{{p.title}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>Location</ion-label>\n\n                <ion-select [(ngModel)]="location" (ionChange)="fillBuildingDrpDown($event)" required>\n\n                    <ion-option *ngFor="let p of locationDrpDownVals" value="{{p.id}}">{{p.title}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>Floor</ion-label>\n\n                <ion-select [(ngModel)]="floor" required>\n\n                    <ion-option *ngFor="let p of floorDrpDownVals" value="{{p.id}}">{{p.title}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n        </ion-list>\n\n        <ion-list-header>\n\n            Buildings\n\n        </ion-list-header>\n\n        <ion-segment [(ngModel)]="relationship" color="primary">\n\n            <ion-segment-button value="friends">\n\n                Building 1\n\n            </ion-segment-button>\n\n            <ion-segment-button value="enemies">\n\n                Building 2\n\n            </ion-segment-button>\n\n        </ion-segment>\n\n\n\n        <ion-list>\n\n            <ion-list-header>\n\n                Conference Room\n\n            </ion-list-header>\n\n\n\n            <ion-item>\n\n                <ion-label>Conf-1</ion-label>\n\n                <ion-radio value="cord"></ion-radio>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label>Conf-2</ion-label>\n\n                <ion-radio value="duesenberg"></ion-radio>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label>Conf-3</ion-label>\n\n                <ion-radio value="hudson"></ion-radio>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label>Conf-4</ion-label>\n\n                <ion-radio value="packard"></ion-radio>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label>Conf-5</ion-label>\n\n                <ion-radio value="studebaker"></ion-radio>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>Team room-1</ion-label>\n\n                <ion-radio value="studebaker"></ion-radio>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label>Team room-2</ion-label>\n\n                <ion-radio value="studebaker"></ion-radio>\n\n            </ion-item>\n\n        </ion-list>\n\n        <button ion-button color="primary" myitem (click)=\'openFilters()\'>Ok</button>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\DOLSU01\Desktop\MRM\MRM-Mobile\src\pages\layout\layout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LayoutPage);
    return LayoutPage;
}());

//# sourceMappingURL=layout.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_registration_registration__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.login = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_registration_registration__["a" /* RegistrationPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('email'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "email", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\DOLSU01\Desktop\MRM\MRM-Mobile\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar color="custom">\n\n    <ion-title>\n\n      Meeting Room\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <!-- <ion-row>\n\n    <ion-col text-center>\n\n      <img src="assets/imgs/MRM.png" width="300">\n\n    </ion-col>\n\n  </ion-row> -->\n\n  <div>\n\n    <!-- <form (ngSubmit)="login()" autocomplete="off"> -->\n\n\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-input placeholder="Username" name="username" id="loginField" type="text"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input placeholder="Password" name="password" id="passwordField" type="password"></ion-input>\n\n      </ion-item>\n\n    </ion-list>\n\n\n\n    <ion-row>\n\n      <ion-col>\n\n        <!-- <div *ngIf="error" class="alert alert-danger">{{ error }}</div> -->\n\n        <button ion-button color="custom" full type="submit" (click)="login()">Login</button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <!-- </form> -->\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\DOLSU01\Desktop\MRM\MRM-Mobile\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 112:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/layout/layout.module": [
		275,
		3
	],
	"../pages/login/login.module": [
		276,
		2
	],
	"../pages/new-booking/new-booking.module": [
		277,
		1
	],
	"../pages/registration/registration.module": [
		278,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        this.items.push({
            title: 'AWS Session ',
            note: 'Building 2, Floor 1 Conf 1',
            FromTime: '6/15/2018 - 12:30 PM',
            ToTime: '6/15/2018 - 02:30 PM',
            icon: this.icons[1]
        });
        this.items.push({
            title: 'GPOC Team',
            note: 'Building 2, Floor 1 Conf 3',
            FromTime: '6/18/2018 - 02:30 PM',
            ToTime: '6/15/2018 - 03:30 PM',
            icon: this.icons[1]
        });
        this.items.push({
            title: 'Staff Meeting',
            note: 'Building 2, Floor 1 Conf 5',
            FromTime: '6/14/2018 - 04:30 PM',
            ToTime: '6/15/2018 - 05:00 PM',
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
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\DOLSU01\Desktop\MRM\MRM-Mobile\src\pages\list\list.html"*/'<ion-header>\n\n    <ion-navbar color="custom">\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>My Bookings</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ion-list>\n\n        <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <!-- <ion-icon [name]="item.icon" item-start></ion-icon> -->\n\n      {{item.title}}\n\n      <ion-row>\n\n      <div class="item-note " item-end>\n\n            <label class="note">{{item.note}},   </label>\n\n        <label class="note"> {{item.FromTime}} - {{item.ToTime}}</label>\n\n      </div>\n\n    </ion-row>\n\n    </button>\n\n    </ion-list>\n\n    <div *ngIf="selectedItem" padding>\n\n        You navigated here from <b>{{selectedItem.title}}</b>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\DOLSU01\Desktop\MRM\MRM-Mobile\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_new_booking_new_booking__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_list_list__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_registration_registration__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_layout_layout__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_new_booking_new_booking__["a" /* NewBookingPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_registration_registration__["a" /* RegistrationPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_layout_layout__["a" /* LayoutPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["b" /* HttpModule */],
                //HttpClientModule,
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/layout/layout.module#LayoutPageModule', name: 'LayoutPage', segment: 'layout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-booking/new-booking.module#NewBookingPageModule', name: 'NewBookingPage', segment: 'new-booking', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registration/registration.module#RegistrationPageModule', name: 'RegistrationPage', segment: 'registration', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_new_booking_new_booking__["a" /* NewBookingPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_registration_registration__["a" /* RegistrationPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_list_list__["a" /* ListPage */], __WEBPACK_IMPORTED_MODULE_11__pages_layout_layout__["a" /* LayoutPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_new_booking_new_booking__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_registration_registration__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */];
        this.splash = true;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'New Booking', component: __WEBPACK_IMPORTED_MODULE_4__pages_new_booking_new_booking__["a" /* NewBookingPage */] },
            { title: 'My Bookings', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Settings', component: __WEBPACK_IMPORTED_MODULE_6__pages_registration_registration__["a" /* RegistrationPage */] },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */] },
        ];
        this.activePage = this.pages[0];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            setTimeout(function () {
                _this.splash = false;
            }, 4000);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
        this.activePage = page;
    };
    MyApp.prototype.checkActive = function (page) {
        return page == this.activePage;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\DOLSU01\Desktop\MRM\MRM-Mobile\src\app\app.html"*/'<!-- <div id="custom-overlay" [style.display]="splash ? \'flex\': \'none\'">\n\n  <div class="flb">\n\n    <div class="Aligner-item Aligner-item--top"></div>\n\n    <img src="../assets/logo.svg">\n\n    <div class="Aligner-item Aligner-item--bottom"></div>\n\n  </div>\n\n</div> -->\n\n\n\n<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar color="custom">\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <!-- <ion-card class="profile">\n\n        <ion-list>\n\n          <ion-item>\n\n            <ion-label>Rajeev Deshpande</ion-label>\n\n          </ion-item>\n\n          <ion-item>\n\n            <ion-label>CA Technologies</ion-label>\n\n          </ion-item>\n\n        </ion-list>\n\n        <img src="../assets/imgs/profile.png" alt="profile">\n\n      </ion-card> -->\n\n      <button menuClose ion-item *ngFor="let p of pages" [class.activeHighlight] = "checkActive(p)" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\DOLSU01\Desktop\MRM\MRM-Mobile\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_booking_new_booking__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import {HttpClient, HttpClientModule} from '@angular/common/http'

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistrationPage = /** @class */ (function () {
    function RegistrationPage(navCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        //@ViewChild('countryDiv') countryDiv: ElementRef;
        /*ngAfterViewInit() {
         alert(this.countryDiv.nativeElement);
       }*/
        this.apjSelected = "outline";
        this.emeaSelected = "";
        this.laSelected = "";
        this.naSelected = "";
        this.disableDIV = true;
    }
    RegistrationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistrationPage');
        this.fillDropdown("apj");
    };
    RegistrationPage.prototype.save = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__new_booking_new_booking__["a" /* NewBookingPage */]);
        //  alert("Selected " + this.country + " " + this.location + " "+this.building + " "+this.floor);
    };
    RegistrationPage.prototype.fillDropdown = function (region) {
        if (this.disableDIV == false) {
            this.disableDIV = true;
        }
        this.country = this.location = this.building = this.floor = "";
        var params = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* URLSearchParams */]();
        params.set('path', 'getCountries');
        params.set('region', region);
        params.set('method', "GET");
        var requestOptions = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* RequestOptions */]();
        requestOptions.search = params;
        this.http.get("https://cl08om4rdi.execute-api.us-east-1.amazonaws.com/dev/mrmusersettings", requestOptions)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(console.log);
    };
    RegistrationPage.prototype.fillLocationDrpDown = function (selectedVal) {
        if (selectedVal == 1) {
            this.locationDrpDownVals = [
                { title: 'Hyderabad', id: "1" },
                { title: 'Bangalore', id: "2" }
            ];
        }
    };
    RegistrationPage.prototype.fillBuildingDrpDown = function (selectedVal) {
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
    };
    RegistrationPage.prototype.fillFloorDrpDown = function (selectedVal) {
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
    };
    RegistrationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registration',template:/*ion-inline-start:"C:\Users\DOLSU01\Desktop\MRM\MRM-Mobile\src\pages\registration\registration.html"*/'<!--\n\n  Generated template for the RegistrationPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="custom">\n\n    <ion-title>Settings</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content overflow-scroll="false">\n\n  <ion-grid align-items-center>\n\n    <ion-row>\n\n      <ion-col col-4></ion-col>\n\n      <ion-col col-4 class="profile" >\n\n        <img src="../../assets/imgs/profile.png" >\n\n      </ion-col>\n\n      <ion-col col-4></ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col class="textcenter">Rajeev Deshpande</ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col class="textcenter">Sr. Platform Administrator</ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button full [outline] = "apjSelected" color="custom" (click)=\'fillDropdown("APJ")\'>APJ</button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button full color="custom" [outline]="emeaSelected" (click)=\'fillDropdown("EMEA")\'>EMEA</button>\n\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-6>\n\n        <button ion-button full color="custom" [outline]="laSelected" (click)=\'fillDropdown("LA")\'>Latin America</button>\n\n      </ion-col>\n\n      <ion-col col-6>\n\n        <button ion-button full color="custom" [outline]="naSelected" (click)=\'fillDropdown("NA")\'>North America</button>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <div id="countryDiv" #countryDiv [hidden]="!disableDIV">\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-label color="custom">Country</ion-label>\n\n        <ion-select type="text" [(ngModel)]="country" (ionChange)="fillLocationDrpDown($event)" required>\n\n          <ion-option *ngFor="let p of countryDrpDownVals" value="{{p.id}}">{{p.title}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="custom">Location</ion-label>\n\n        <ion-select [(ngModel)]="location" (ionChange)="fillBuildingDrpDown($event)" required>\n\n          <ion-option *ngFor="let p of locationDrpDownVals" value="{{p.id}}">{{p.title}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="custom">Building</ion-label>\n\n        <ion-select [(ngModel)]="building" (ionChange)="fillFloorDrpDown($event)" required>\n\n          <ion-option *ngFor="let p of buildingDrpDownVals" value="{{p.id}}">{{p.title}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label color="custom">Floor</ion-label>\n\n        <ion-select [(ngModel)]="floor" required>\n\n          <ion-option *ngFor="let p of floorDrpDownVals" value="{{p.id}}">{{p.title}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n    </ion-list>\n\n    <ion-grid>\n\n      <ion-row>\n\n        <!-- <ion-col col-5></ion-col> -->\n\n        <ion-col col-12 class="save">\n\n            <ion-icon name="arrow-round-forward" (click)=\'save()\'></ion-icon>\n\n        </ion-col>\n\n        <!-- <ion-col col-5></ion-col> -->\n\n      </ion-row>\n\n    </ion-grid>\n\n    \n\n    <!-- <button ion-button color="primary" myitem (click)=\'save()\'>Submit</button> -->\n\n  </div>\n\n\n\n\n\n  <!--<div padding>\n\n    <ion-segment [(ngModel)]="region">\n\n      <ion-segment-button value="apj">\n\n        APJ\n\n      </ion-segment-button>\n\n      <ion-segment-button value="emea">\n\n        EMEA\n\n      </ion-segment-button>\n\n      <ion-segment-button value="la">\n\n      LATIN America\n\n        </ion-segment-button>\n\n        <ion-segment-button value="na">\n\n            NORTH America\n\n              </ion-segment-button>\n\n    </ion-segment>\n\n  </div>\n\n\n\n  <div [ngSwitch]="region">\n\n    <ion-list *ngSwitchCase="\'apj\'">\n\n      <ion-item>\n\n          <ion-label>Country</ion-label>\n\n          <ion-select [(ngModel)]="country">\n\n              <ion-option value="india">India</ion-option>\n\n              <ion-option value="china">Pakistan</ion-option>\n\n              <ion-option value="pakistan">China</ion-option>\n\n              <ion-option value="japan">Japan</ion-option>\n\n            </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n          <ion-label>Location</ion-label>\n\n          <ion-select [(ngModel)]="location">\n\n              <ion-option value="hyd">ITC- Hyderabad</ion-option>\n\n              <ion-option value="bang">Bangalore</ion-option>\n\n            </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n          <ion-label>Building</ion-label>\n\n          <ion-select [(ngModel)]="building">\n\n              <ion-option value="b1">Building 1</ion-option>\n\n              <ion-option value="b2">Building 2</ion-option>\n\n            </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n          <ion-label>Floor</ion-label>\n\n          <ion-select [(ngModel)]="floor">\n\n              <ion-option value="f1">Floor 1</ion-option>\n\n              <ion-option value="f2">Floor 2</ion-option>\n\n            </ion-select>\n\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n <button ion-button color="primary" myitem (click)=\'openFilters()\'>Submit</button>-->\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\DOLSU01\Desktop\MRM\MRM-Mobile\src\pages\registration\registration.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], RegistrationPage);
    return RegistrationPage;
}());

//# sourceMappingURL=registration.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewBookingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_layout__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the NewBookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewBookingPage = /** @class */ (function () {
    function NewBookingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.layoutPage = __WEBPACK_IMPORTED_MODULE_2__layout_layout__["a" /* LayoutPage */];
        this.minDate = new Date().toISOString();
        this.params = {
            title: 'Rajeev Deshpande meeting',
            date: new Date().toISOString(),
            time: this.calculateTime(),
            location: 'APJ-India',
            region: 'ITC Hyderabad',
            building: '2',
            floor: '1',
            room: 'Conference 4'
        };
        console.log(this.calculateTime());
    }
    NewBookingPage.prototype.ionViewDidLoad = function () {
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
                    temp = number + ":00";
                    // this.params.time.from = number+":00";
                }
                else {
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
    };
    NewBookingPage.prototype.navigate = function () {
        //this.activePage = page;
    };
    NewBookingPage.prototype.onChange = function (ev) {
        console.log('Changed', ev);
    };
    NewBookingPage.prototype.updateTime = function (obj) {
        console.log(obj);
        console.log(this.params);
    };
    NewBookingPage.prototype.calculateTime = function () {
        var d = new Date();
        if (d.getMinutes() > 0 && d.getMinutes() <= 30) {
            return { 'from': parseFloat(d.getHours() + '.5'), 'to': d.getHours() + 1 };
        }
        else if (d.getMinutes() > 30 && d.getMinutes() < 60) {
            return { 'from': d.getHours() + 1, 'to': parseFloat(d.getHours() + 1 + '.5') };
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], NewBookingPage.prototype, "nav", void 0);
    NewBookingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-booking',template:/*ion-inline-start:"C:\Users\DOLSU01\Desktop\MRM\MRM-Mobile\src\pages\new-booking\new-booking.html"*/'<!--\n\n  Generated template for the NewBookingPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar color="custom">\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>New Booking</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item>\n\n            <ion-textarea name="title" row="1" placeholder="{{params.title}}"></ion-textarea>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label>{{params.time.from}} - {{params.time.to}}</ion-label>\n\n            <ion-datetime dateFormat="DD/MM/YYYY" [(ngModel)]="params.date" [min]="minDate"></ion-datetime>\n\n        </ion-item>\n\n        <ion-item>\n\n            <input id="range" name="range" value="">\n\n        </ion-item>\n\n    </ion-list>\n\n    <ion-card item-content color="custom1" [navPush]="layoutPage">\n\n        <ion-card-header>\n\n            Room Selection\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            <ion-row>\n\n                <ion-col class="field">Location</ion-col>\n\n                <ion-col>{{params.location}}</ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col class="field">Region</ion-col>\n\n                <ion-col>{{params.region}}</ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col class="field">Building</ion-col>\n\n                <ion-col>{{params.building}}</ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col class="field">Floor</ion-col>\n\n                <ion-col>{{params.floor}}</ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col class="field">Room</ion-col>\n\n                <ion-col>{{params.room}}</ion-col>\n\n            </ion-row>\n\n        </ion-card-content>\n\n    </ion-card>\n\n    <ion-fab center bottom>\n\n        <button ion-fab color="secondary">BOOK</button>\n\n    </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\Users\DOLSU01\Desktop\MRM\MRM-Mobile\src\pages\new-booking\new-booking.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], NewBookingPage);
    return NewBookingPage;
}());

//# sourceMappingURL=new-booking.js.map

/***/ })

},[200]);
//# sourceMappingURL=main.js.map