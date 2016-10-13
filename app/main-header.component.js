"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var new_post_button_component_1 = require('./posts/new-post-button.component');
var router_1 = require('@angular/router');
var icon_1 = require('@angular2-material/icon');
var MainHeaderComponent = (function () {
    function MainHeaderComponent() {
    }
    MainHeaderComponent = __decorate([
        core_1.Component({
            selector: 'main-header',
            template: "\n        <section class=\"group\">\n            <header class=\"group\">\n                <md-icon svgSrc=\"app/assets/images/English-Full.svg\" class=\"full-image col-6\" [routerLink]=\"['/']\"></md-icon>\n            </header>\n            <div class=\"header-links\">\n                <ul class=\"col-6\">\n                    <li><a [routerLink]=\"['']\" [class.disable]=\"pageVisited == 'home'\">Home</a></li>\n                    <li><a href=\"#\" [class.disable]=\"pageVisited == 'brief'\">Brief</a></li>\n                    <li><a [routerLink]=\"['/team']\" [class.disable]=\"pageVisited == 'team'\">Team</a></li>\n                    <li><a href=\"#\">Sign Out</a></li>\n                    <li class=\"add-container\" [routerLink]=\"['/post/new']\"><new-post-button></new-post-button></li>\n                </ul>\n            </div>\n        </section>\n    ",
            styles: ["\n        .full-image{\n            max-width: 500px;\n            height: 100px;\n            cursor: pointer;\n            margin: 0 auto;\n            clear: both;\n            float: none;\n            display: flex;\n        }\n        .header-links ul{\n            list-style-type: none;\n            display: flex;\n            flex-direction: row;\n            justify-content: space-around;\n            flex-wrap: wrap;\n            margin: 0 auto;\n            clear: both;\n            float: none;           \n        }\n\n        a{\n            color: #3c3d3c;\n            text-decoration: none;\n        }\n        a:hover{\n            color: #EDEFF5;\n        }\n        .disable{\n            color: #ff1d14;\n        }\n        .add-container{\n            position: relative;\n        }\n        new-post-button{\n            position: absolute;\n            top: -0.5rem;\n            right: -1rem;\n    }\n    "],
            directives: [router_1.ROUTER_DIRECTIVES, icon_1.MdIcon, new_post_button_component_1.NewPostButtonComponent],
            providers: [icon_1.MdIconRegistry]
        }), 
        __metadata('design:paramtypes', [])
    ], MainHeaderComponent);
    return MainHeaderComponent;
}());
exports.MainHeaderComponent = MainHeaderComponent;
//# sourceMappingURL=main-header.component.js.map