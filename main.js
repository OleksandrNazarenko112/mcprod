(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["appModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tile_content_view_tile_content_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tile-content-view/tile-content-view.component */ "./src/app/tile-content-view/tile-content-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var appRoutes = [
    { path: 'songs-tile/:playList', component: _tile_content_view_tile_content_view_component__WEBPACK_IMPORTED_MODULE_2__["TileContentViewComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container-fluid\">\n  <div class=\"row\">\n  <div class=\"col-lg-2  navigation-container\">\n    <app-navigation></app-navigation>\n  </div>\n  <div class=\"col-lg-10\">\n  <router-outlet></router-outlet>\n</div>\n</div>\n</div>\n<app-audio-player></app-audio-player>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation-container {\n  box-shadow: 2px 2px 9px 0px #b5b5b5; }\n"

/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: HttpLoaderFactory, appModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appModule", function() { return appModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main.component */ "./src/app/main.component.ts");
/* harmony import */ var _audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./audio-player/audio-player.component */ "./src/app/audio-player/audio-player.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _tile_content_view_tile_content_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tile-content-view/tile-content-view.component */ "./src/app/tile-content-view/tile-content-view.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](http);
}
var appModule = /** @class */ (function () {
    function appModule() {
    }
    appModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"],
                _audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_7__["AudioPlayerComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_8__["NavigationComponent"],
                _tile_content_view_tile_content_view_component__WEBPACK_IMPORTED_MODULE_10__["TileContentViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]]
                    }
                }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_main_component__WEBPACK_IMPORTED_MODULE_6__["MainComponent"]]
        })
    ], appModule);
    return appModule;
}());



/***/ }),

/***/ "./src/app/audio-player/audio-player.component.html":
/*!**********************************************************!*\
  !*** ./src/app/audio-player/audio-player.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"audo-player\" [class.show]=\"playList\">\n  <div class=\"container-fluid\">\n    <div class=\"row \">\n      <div class=\"col-lg-2 col-xs-12 controls align-self-center\">\n        <ul>\n          <li class=\"backward\" (click)=\"prevSong()\"><span [class.isDisabled]=\"index==0\"><i class=\"fa fa-backward\"></i></span></li>\n          <li class=\"play-pause\"><span (click)=\"togglePlay()\"><i [className]=\"audio.paused ? 'fa fa-play' : 'fa fa-pause'\"></i></span></li>\n          <li class=\"forward\" (click)=\"skipSong()\" ><span [class.isDisabled]=\"index+1 >= playList.length\"><i class=\"fa fa fa-forward\"></i></span></li>\n        </ul>\n      </div>\n      <div class=\"col-lg-1 col-xs-12  album-cover-container align-self-center\">\n        <img [src]=playList[index]?.albumCover [ngStyle]=\"{'opacity':loading ? '0.5' : '1' }\">\n        <span *ngIf=\"loading\" class=\"loader\"></span>\n      </div>\n      <div class=\"col-lg-6 col-xs-12  track-progress-container align-self-center\">\n        <audio #audioPlayer [src]=playList[index]?.url></audio>\n        <div class=\"audio-controls-group\">\n          <div class=\"col-lg-11\">\n            <h6 *ngIf=\"playList\">{{playList[index]?.singer}} - <span>{{playList[index]?.title}}</span></h6>\n            <div class=\"progress-container\" >\n              <div class=\"progress\" [style.width.%]=\"audio.currentTime / audio.duration * 100\"></div>\n              <input type=\"range\" min=\"0\" [value]=\"audio.currentTime\" [max]=\"audio.duration\" step=\"1\" #time (input)=\"skipTime(time.value)\">\n            </div>\n            <span class=\"track-timer\" [hidden]=\"audio.duration\">0:00 / 0:00</span>\n            <span class=\"track-timer\" [hidden]=\"!audio.duration\">{{elapsed}} / {{duration}}</span>\n          </div>\n          <div class=\"controls align-self-center\">\n            <ul>\n              <li><a [href]=playList[index]?.url download><i class=\"fa fa-cloud-download\"></i></a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-3 col-xs-12  volume-container align-self-center\">\n        <div class=\"audio-controls-group volume-group\">\n          <div class=\"controls col-lg-1 align-self-center\">\n            <ul>\n              <li><span (click)=\"mute()\"><i class=\"fa fa-volume-up\"  [className]=\"audio.volume > 0 ? 'fa fa-volume-up' : 'fa fa-volume-off'\"></i></span></li>\n            </ul>\n          </div>\n          <div class=\"col-lg-7 col-xs-12 volume align-self-center\">\n            <div class=\"progress-container\" >\n              <div class=\"progress\"[style.width.%]=\"audio.volume * 100\"></div>\n              <input id=\"volume\" type=\"range\" min=\"0\" [value]=\"audio.volume\" max=\"1\" step=\"0.01\" #volume (input)=\"setVolume(volume.value)\" >\n          </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/audio-player/audio-player.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/audio-player/audio-player.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".isDisabled {\n  color: #dcd9d9 !important;\n  cursor: not-allowed;\n  pointer-events: none; }\n\n.loader {\n  display: inline-block;\n  border: 3px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 3px solid #76abbd;\n  width: 60px;\n  height: 60px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  -webkit-animation: spin 2s linear infinite;\n  animation: spin 2s linear infinite; }\n\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg); } }\n\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n.audo-player {\n  display: none;\n  position: fixed;\n  background-color: #fff;\n  width: 100%;\n  bottom: 0;\n  padding: 10px;\n  box-shadow: 0px -5px 14px -3px #bdbdbd; }\n\n.audo-player.show {\n    display: block; }\n\n.audo-player .controls ul {\n    display: flex;\n    padding: 0;\n    margin: 0;\n    justify-content: space-around; }\n\n.audo-player .controls ul li {\n      list-style-type: none;\n      width: 50px; }\n\n.audo-player .controls ul li span, .audo-player .controls ul li a {\n        cursor: pointer;\n        color: #76abbd;\n        font-size: 25px;\n        display: flex;\n        width: 50px;\n        height: 50px;\n        justify-content: center;\n        text-decoration: none;\n        border: 1px solid transparent;\n        padding: 13px 0px;\n        border-radius: 50px;\n        transition: all .2s; }\n\n.audo-player .controls ul li span:hover, .audo-player .controls ul li a:hover {\n          border: 1px solid #76abbd;\n          background-color: #eee; }\n\n.audo-player .album-cover-container {\n    position: relative; }\n\n.audo-player .album-cover-container img {\n      height: 60px;\n      width: 60px;\n      display: block;\n      max-width: 100%;\n      margin: 0 auto; }\n\n.audo-player .track-progress-container h6 {\n    margin: 0 0 10px 20px; }\n\n.audo-player .track-progress-container h6 span {\n      color: #999; }\n\n.audo-player .track-progress-container .track-timer {\n    margin: 10px 0 0 20px;\n    margin-left: 20px;\n    color: #999;\n    font-size: 12px;\n    display: inline-block; }\n\n.audo-player .volume-container .volume-group {\n    justify-content: flex-end; }\n\n.audo-player .volume-container .volume-group input[type=range]::-webkit-slider-thumb {\n      margin-left: -1px; }\n\n.audo-player .volume-container .volume-group input[type=range]::-moz-range-thumb {\n      transform: translate(-2px, 0); }\n\n.audio-controls-group {\n  display: flex; }\n\n.fa-volume-off {\n  color: #dcd9d9; }\n\n.progress-container {\n  width: 100%;\n  border: 1px solid #dcd9d9;\n  background: #dcd9d9;\n  position: relative;\n  height: 5px;\n  z-index: 1;\n  top: -1px;\n  left: -1px;\n  border-radius: 4px; }\n\n.progress-container .progress {\n    background-color: #76abbd;\n    height: 5px;\n    border-radius: 4px;\n    position: absolute;\n    top: -1px;\n    left: -1px; }\n\ninput[type=range] {\n  -webkit-appearance: none;\n  width: 102%;\n  background: transparent;\n  position: absolute;\n  height: 4px; }\n\ninput[type=range]:focus {\n  outline: none; }\n\ninput[type=range]::-webkit-slider-runnable-track {\n  width: 102%;\n  height: 5px;\n  cursor: pointer;\n  animate: 0.2s;\n  background: transparent;\n  border-radius: 4px; }\n\ninput[type=range]::-webkit-slider-thumb {\n  border: 2px solid #76abbd;\n  height: 20px;\n  width: 20px;\n  border-radius: 50px;\n  background: #ffffff;\n  cursor: pointer;\n  -webkit-appearance: none;\n  margin: -7px 0 0 -4px; }\n\ninput[type=range]::-moz-range-track {\n  width: 100%;\n  height: 5px;\n  cursor: pointer;\n  animate: 0.2s;\n  background: transparent;\n  border-radius: 4px; }\n\ninput[type=range]::-moz-range-thumb {\n  border: 2px solid #76abbd;\n  height: 15px;\n  width: 15px;\n  border-radius: 50px;\n  background: #ffffff;\n  cursor: pointer;\n  -webkit-appearance: none;\n  transform: translate(-4px, 0); }\n\ninput[type=range]::-moz-focus-outer {\n  border: 0; }\n\ninput[type=range]::-ms-track {\n  width: 100%;\n  height: 8.4px;\n  cursor: pointer;\n  animate: 0.2s;\n  background: transparent;\n  border-color: transparent;\n  border-width: 16px 0;\n  color: transparent; }\n\ninput[type=range]::-ms-fill-lower {\n  background: #2a6495;\n  border-radius: 2.6px;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; }\n\ninput[type=range]::-ms-fill-upper {\n  background: #3071a9;\n  border-radius: 2.6px;\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; }\n\ninput[type=range]::-ms-thumb {\n  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  border: 1px solid #000000;\n  height: 36px;\n  width: 16px;\n  border-radius: 3px;\n  background: #ffffff;\n  cursor: pointer; }\n\ninput[type=range]:focus::-ms-fill-lower {\n  background: #3071a9; }\n\ninput[type=range]:focus::-ms-fill-upper {\n  background: #367ebd; }\n"

/***/ }),

/***/ "./src/app/audio-player/audio-player.component.ts":
/*!********************************************************!*\
  !*** ./src/app/audio-player/audio-player.component.ts ***!
  \********************************************************/
/*! exports provided: AudioPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioPlayerComponent", function() { return AudioPlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data-service.service */ "./src/app/services/data-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AudioPlayerComponent = /** @class */ (function () {
    function AudioPlayerComponent(data) {
        this.data = data;
        this.loading = true;
    }
    AudioPlayerComponent.prototype.ngOnInit = function () {
        this.audio = this.audioPlayerRef.nativeElement;
        this.audio.volume = 0.7;
        this.playlistData();
        this.nextSong();
        this.loadingAudio();
    };
    AudioPlayerComponent.prototype.playlistData = function () {
        var _this = this;
        this.data.songIndex.subscribe(function (index) {
            _this.index = index;
        });
        this.data.playlist.subscribe(function (songs) {
            _this.playList = songs;
            if (songs) {
                setTimeout(function () { _this.togglePlay(); }, 100);
            }
        });
    };
    AudioPlayerComponent.prototype.togglePlay = function () {
        if (this.audio.paused) {
            this.audio.play();
            this.isPlaying = true;
            this.currentTimeUpdate();
            this.formatTime();
        }
        else {
            this.audio.pause();
            this.isPlaying = false;
        }
        this.currentSongUrl();
    };
    AudioPlayerComponent.prototype.culcSongDuration = function () {
        var minutes, seconds;
        minutes = Math.floor(this.audio.duration / 60);
        seconds = Math.round(this.audio.duration % 60);
        if (isNaN(this.audio.duration)) {
            this.duration = '0:00';
        }
        else {
            seconds = (seconds >= 10) ? seconds : '0' + seconds;
            this.duration = minutes + ':' + seconds;
        }
    };
    AudioPlayerComponent.prototype.skipTime = function (time) {
        this.audio.currentTime = time;
    };
    AudioPlayerComponent.prototype.setVolume = function (volume) {
        this.audio.volume = volume;
        if ((this.audio.muted && this.audio.volume > 0) || this.audio.volume == 0) {
            this.audio.muted = !this.audio.muted;
        }
    };
    AudioPlayerComponent.prototype.formatTime = function () {
        this.loading = false;
        var minutes, seconds;
        seconds = Math.round(this.audio.currentTime);
        minutes = Math.floor(seconds / 60);
        seconds = Math.floor(seconds % 60);
        seconds = (seconds >= 10) ? seconds : '0' + seconds;
        this.elapsed = minutes + ':' + seconds;
        this.culcSongDuration();
    };
    AudioPlayerComponent.prototype.currentTimeUpdate = function () {
        var _this = this;
        this.audio.addEventListener('timeupdate', function (event) {
            _this.formatTime();
        }, false);
    };
    AudioPlayerComponent.prototype.nextSong = function () {
        var _this = this;
        this.audio.addEventListener('ended', function (event) {
            _this.index++;
            _this.audio.pause();
            if (_this.index >= _this.playList.length) {
                _this.index = _this.index - 1;
            }
            else {
                setTimeout(function () { _this.audio.play(); }, 500);
            }
            _this.currentSongUrl();
        });
    };
    AudioPlayerComponent.prototype.mute = function () {
        this.audio.muted = !this.audio.muted;
        if (this.audio.muted) {
            this.audio.volume = 0;
        }
        if (!this.audio.muted) {
            this.audio.volume = 0.7;
        }
    };
    AudioPlayerComponent.prototype.loadingAudio = function () {
        var _this = this;
        this.audio.addEventListener('waiting', function (event) {
            _this.loading = true;
        });
    };
    AudioPlayerComponent.prototype.skipSong = function () {
        var _this = this;
        if (this.index + 1 >= this.playList.length) {
            return false;
        }
        else {
            this.index++;
            this.currentSongUrl();
            setTimeout(function () { _this.audio.play(); }, 500);
        }
    };
    AudioPlayerComponent.prototype.prevSong = function () {
        var _this = this;
        if (this.index == 0) {
            return false;
        }
        else {
            this.index--;
            this.currentSongUrl();
            setTimeout(function () { _this.audio.play(); }, 500);
        }
    };
    AudioPlayerComponent.prototype.currentSongUrl = function () {
        this.data.currentSong(this.playList[this.index].url, this.isPlaying);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('audioPlayer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AudioPlayerComponent.prototype, "audioPlayerRef", void 0);
    AudioPlayerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-audio-player',
            template: __webpack_require__(/*! ./audio-player.component.html */ "./src/app/audio-player/audio-player.component.html"),
            styles: [__webpack_require__(/*! ./audio-player.component.scss */ "./src/app/audio-player/audio-player.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], AudioPlayerComponent);
    return AudioPlayerComponent;
}());



/***/ }),

/***/ "./src/app/main.component.ts":
/*!***********************************!*\
  !*** ./src/app/main.component.ts ***!
  \***********************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/esm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = /** @class */ (function () {
    function MainComponent(translate) {
        this.translate = translate;
        this.title = 'app';
        translate.setDefaultLang('en');
    }
    MainComponent.prototype.switchLanguage = function (language) {
        this.translate.use(language);
    };
    MainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__["TranslateService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/navigation/navigation.component.html":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navigation-container\">\n  <h5>Плейлисты</h5>\n  <ul class=\"playlists-container\">\n    <li *ngFor=\"let playList of navigationInfo?.settings?.playlist\"><a [routerLink]=\"['songs-tile', playList.route]\" routerLinkActive=\"active-playlist\">{{playList.name}}</a></li>\n  </ul>\n  <h5>Фильтры</h5>\n  <div class=\"filters-options-container\" *ngFor=\"let item of navigationInfo?.settings?.filters; let i = index\">\n    <p class=\"title\">\n      <a \n      data-toggle=\"collapse\" \n      href=\"#{{item.filterName}}\" \n      aria-expanded=\"false\" \n      [class.collapsed]=\"!defaultAciveFiltersList.includes(item.filterName)\">\n      {{item.filterName}}\n      </a>\n    </p>\n    <ul class=\"collapse\" id=\"{{item.filterName}}\" [class.show]=\"defaultAciveFiltersList.includes(item.filterName)\">\n      <li *ngFor=\"let filter of navigationInfo?.settings?.filters[i].filtersType\">\n        <a (click)=\"getFilters(item.filterName,filter)\" class=\"custom-control custom-radio\">\n          <input type=\"radio\" name=\"{{item.filterName}}\" class=\"custom-control-input\" id=\"{{filter}}\" [checked]=\"defaultFilters.includes(filter)\">\n          <label class=\"custom-control-label\" for=\"{{filter}}\">{{filter}}</label>\n        </a>\n      </li>\n    </ul>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.scss":
/*!******************************************************!*\
  !*** ./src/app/navigation/navigation.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navigation-container {\n  height: 100vh;\n  overflow-y: auto; }\n  .navigation-container ul.playlists-container {\n    list-style-type: none;\n    padding: 0; }\n  .navigation-container ul.playlists-container li {\n      margin-bottom: 5px; }\n  .navigation-container ul.playlists-container li a {\n        color: #000;\n        padding: 5px;\n        display: block; }\n  .navigation-container ul.playlists-container li a.active-playlist {\n          background-color: #76abbd;\n          border-radius: 4px;\n          color: #fff;\n          text-decoration: none; }\n  .navigation-container ul.playlists-container li a:hover {\n          background-color: #76abbd;\n          border-radius: 4px;\n          color: #fff;\n          text-decoration: none; }\n  .navigation-container h5 {\n    font-size: 16px;\n    font-weight: 400;\n    padding: 30px 0 20px 0;\n    margin: 0;\n    text-transform: uppercase; }\n  .navigation-container .filters-options-container .title a {\n    color: #000;\n    display: block;\n    padding: 5px; }\n  .navigation-container .filters-options-container .title a:after {\n      content: '\\f077';\n      font-family: FontAwesome;\n      font-size: 10px;\n      margin-left: 5px; }\n  .navigation-container .filters-options-container .title a.collapsed:after {\n      content: '\\f078';\n      font-family: FontAwesome;\n      font-size: 10px;\n      margin-left: 5px; }\n  .navigation-container .filters-options-container .title a:hover {\n      text-decoration: none; }\n  .navigation-container .filters-options-container .title:hover {\n    background-color: #eee;\n    text-decoration: none; }\n  .navigation-container .filters-options-container ul {\n    padding: 0;\n    margin: 0; }\n  .navigation-container .filters-options-container ul li {\n      list-style-type: none;\n      padding: 5px 10px;\n      margin: 15px 0; }\n  .navigation-container .filters-options-container ul li:first-child {\n        margin-top: 0; }\n  .navigation-container .filters-options-container ul li:hover {\n        background-color: #eee; }\n  .navigation-container .filters-options-container ul li .custom-control .custom-control-input:checked + label {\n        color: #76abbd; }\n  .navigation-container .filters-options-container ul li .custom-control .custom-control-input:focus {\n        outline: none !important;\n        box-shadow: none !important; }\n  .navigation-container .filters-options-container ul li .custom-control label {\n        font-size: 16px;\n        width: 100%;\n        color: #666666;\n        text-decoration: none;\n        cursor: pointer; }\n  .custom-radio .custom-control-input:checked ~ .custom-control-label::after {\n  background: #76abbd;\n  border-radius: 50px; }\n"

/***/ }),

/***/ "./src/app/navigation/navigation.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navigation/navigation.component.ts ***!
  \****************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_navigation_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/navigation-info.service */ "./src/app/services/navigation-info.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data-service.service */ "./src/app/services/data-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(_getNav, router, data, route) {
        this._getNav = _getNav;
        this.router = router;
        this.data = data;
        this.route = route;
        this.defaultFilters = [];
        this.defaultAciveFiltersList = [];
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getJson();
        this.route.queryParams.subscribe(function (params) {
            _this.defaultFilters = Object.keys(params).map(function (val) { return params[val]; });
            _this.defaultAciveFiltersList = Object.keys(params);
        });
        this.data.getCurrentNestedRoute().subscribe(function (params) {
            _this.id = params.playList;
        });
    };
    NavigationComponent.prototype.getJson = function () {
        var _this = this;
        this._getNav.getJSON().subscribe(function (response) {
            _this.navigationInfo = response;
        });
    };
    // resetQueryParams(playlist){
    //   this.id = playlist;
    //   this.router.navigate([], {preserveQueryParams: false});
    // }
    NavigationComponent.prototype.getFilters = function (filter, param) {
        this.router.navigate(['songs-tile/' + this.id], { queryParams: (_a = {}, _a[filter] = param, _a), queryParamsHandling: 'merge' });
        var _a;
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_navigation_info_service__WEBPACK_IMPORTED_MODULE_1__["NavigationInfoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_data_service_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/services/data-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/data-service.service.ts ***!
  \**************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService() {
        this.currentSongsArray = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.currentSongIndex = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.currentSongUrl = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.isSongPlaying = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.playlist = this.currentSongsArray.asObservable();
        this.songIndex = this.currentSongIndex.asObservable();
        this.nowPlaying = this.currentSongUrl.asObservable();
        this.isPlaying = this.isSongPlaying.asObservable();
        // private currentSongsArray = new Subject<any>();
        this.currentNestedRoute = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    DataService.prototype.currPlayList = function (songs, index) {
        this.currentSongsArray.next(songs);
        this.currentSongIndex.next(index);
    };
    DataService.prototype.currentSong = function (url, play) {
        this.currentSongUrl.next(url);
        this.isSongPlaying.next(play);
        console.log('url', play);
    };
    // getCurrPlayList(songs: any, index:any) {
    //   return this.currentSongsArray.asObservable();
    // }
    DataService.prototype.passCurrentNestedRoute = function (route) {
        this.currentNestedRoute.next(route);
    };
    DataService.prototype.getCurrentNestedRoute = function () {
        return this.currentNestedRoute.asObservable();
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/navigation-info.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/navigation-info.service.ts ***!
  \*****************************************************/
/*! exports provided: NavigationInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationInfoService", function() { return NavigationInfoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavigationInfoService = /** @class */ (function () {
    function NavigationInfoService(http) {
        this.http = http;
    }
    NavigationInfoService.prototype.getJSON = function () {
        return this.http.get('./assets/navigation-info.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }));
    };
    NavigationInfoService.prototype.getMusic = function () {
        return this.http.get('./assets/random-play-list.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json();
        }));
    };
    NavigationInfoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], NavigationInfoService);
    return NavigationInfoService;
}());



/***/ }),

/***/ "./src/app/tile-content-view/tile-content-view.component.html":
/*!********************************************************************!*\
  !*** ./src/app/tile-content-view/tile-content-view.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid tile-content-container\">\n  <div class=\"col-lg-12\">\n    <div class=\"row\">\n      <div class=\"col-lg-2\" *ngFor=\" let song of sortResult; let i = index;\">\n        <div class=\"album-cover-container\" [class.active-song]=\"currentPlayingSong(i)\">\n          <span ><img [src]=song.albumCover alt=\"\"></span>\n          <div class=\"overlay\">\n            <span (click)=playerStart(i)><i [className]=\"currentPlayingSong(i) ? 'fa fa-pause' : 'fa fa-play'\"></i></span>\n          </div>\n        </div>\n        <div class=\"song-title\">\n          <h5>{{song.title}}</h5>\n          <p>{{song.singer}}</p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <h1 *ngIf=\"sortResult.length<1\">Ничего нет</h1>\n</div>\n"

/***/ }),

/***/ "./src/app/tile-content-view/tile-content-view.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/tile-content-view/tile-content-view.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tile-content-container {\n  padding: 20px 0; }\n  .tile-content-container .album-cover-container {\n    position: relative;\n    margin: .5%; }\n  .tile-content-container .album-cover-container span img {\n      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);\n      transition: .3s all;\n      width: 100%; }\n  .tile-content-container .album-cover-container .overlay {\n      text-align: center;\n      transition: .3s all;\n      border-radius: 4px;\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      width: 100%;\n      background: rgba(173, 205, 215, 0.3);\n      color: #fff;\n      opacity: 0; }\n  .tile-content-container .album-cover-container .overlay span {\n        cursor: pointer;\n        display: inline-block;\n        margin-top: 25%;\n        margin-bottom: 10px;\n        color: #fff;\n        font-size: 35px;\n        border: 1px solid #fff;\n        padding: 8px 21px;\n        border-radius: 50px; }\n  .tile-content-container .album-cover-container:hover .overlay {\n      opacity: 1; }\n  .tile-content-container .album-cover-container:hover img {\n      -webkit-filter: blur(2px);\n      filter: blur(2px); }\n  .tile-content-container .album-cover-container.active-song .overlay {\n      opacity: 1; }\n  .tile-content-container .album-cover-container.active-song img {\n      -webkit-filter: blur(2px);\n      filter: blur(2px); }\n  .tile-content-container .song-title {\n    margin: 10px 0; }\n  .tile-content-container .song-title h5 {\n      text-transform: uppercase;\n      font-size: 14px;\n      margin-left: 15px; }\n  .tile-content-container .song-title p {\n      font-size: 14px;\n      color: #999;\n      margin-bottom: 0;\n      line-height: 10px;\n      margin-left: 15px; }\n"

/***/ }),

/***/ "./src/app/tile-content-view/tile-content-view.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/tile-content-view/tile-content-view.component.ts ***!
  \******************************************************************/
/*! exports provided: TileContentViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileContentViewComponent", function() { return TileContentViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_navigation_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/navigation-info.service */ "./src/app/services/navigation-info.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data-service.service */ "./src/app/services/data-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TileContentViewComponent = /** @class */ (function () {
    function TileContentViewComponent(getMusic, route, router, data) {
        this.getMusic = getMusic;
        this.route = route;
        this.router = router;
        this.data = data;
        this.songsList = [];
    }
    TileContentViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadMusic();
        this.route.queryParams.subscribe(function (params) {
            _this.queryParams = Object.keys(params).map(function (val) { return params[val]; });
            _this.songSorting();
        });
        this.route.params.subscribe(function (params) {
            _this.data.passCurrentNestedRoute(params);
        });
    };
    TileContentViewComponent.prototype.loadMusic = function () {
        var _this = this;
        this.getMusic.getMusic().subscribe(function (response) {
            _this.songsList = response.randomPlaylist.songs;
            _this.songSorting();
        });
    };
    ;
    TileContentViewComponent.prototype.songSorting = function () {
        var _this = this;
        this.sortResult = [];
        this.songsList.forEach(function (song) {
            var success = _this.queryParams.every(function (val) {
                return song.filters.indexOf(val) != -1;
            });
            if (success) {
                _this.sortResult.push(song);
            }
        });
    };
    TileContentViewComponent.prototype.playerStart = function (index) {
        this.data.currPlayList(this.sortResult, index);
        this.currentPlayingSong(index);
    };
    TileContentViewComponent.prototype.currentPlayingSong = function (index) {
        var _this = this;
        this.data.nowPlaying.subscribe(function (url) {
            _this.currentSong = _this.sortResult[index].url === url;
        });
        this.data.isPlaying.subscribe(function (play) {
            _this.isPlaying = play;
        });
        if (this.currentSong && this.isPlaying) {
            return this.currentSong;
        }
        else {
            return false;
        }
    };
    TileContentViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tile-content-view',
            template: __webpack_require__(/*! ./tile-content-view.component.html */ "./src/app/tile-content-view/tile-content-view.component.html"),
            styles: [__webpack_require__(/*! ./tile-content-view.component.scss */ "./src/app/tile-content-view/tile-content-view.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_navigation_info_service__WEBPACK_IMPORTED_MODULE_1__["NavigationInfoService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_data_service_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], TileContentViewComponent);
    return TileContentViewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 0:
/*!**************************!*\
  !*** multi ./src/app.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/user/Documents/music-collection/src/app.ts */"./src/app.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map