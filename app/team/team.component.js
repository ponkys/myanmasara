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
var icon_1 = require('@angular2-material/icon');
var router_1 = require('@angular/router');
var main_header_component_1 = require('../main-header.component');
var team_list_component_1 = require('./team-list.component');
var TeamComponent = (function () {
    function TeamComponent() {
        this.pageVisited = 'team';
    }
    TeamComponent = __decorate([
        core_1.Component({
            selector: 'team',
            template: "\n        <div class=\"breadcrumbs cf\">\n\t\t\t<md-icon svgSrc=\"app/assets/images/English-no-slogan.svg\" alt=\"\" class=\"breadcrumbs-logo\" [routerLink]=\"['/']\"></md-icon>\n            <div class=\"breadcrumbs-info\">\n                <p>/ Team</p>\n            </div>\n\t\t</div>\n        <team-list></team-list>",
            styles: ["\n            .breadcrumbs{\n                display: flex;\n                flex-direction: row;\n                justify-content: flex-start;\n                flex-wrap: wrap;\n                align-items: center;\n                margin-top: 2em;\n            }\n            .breadcrumbs-logo{\n                width: 10em;\n                height: 1em;\n                padding-left: 4em;\n                -webkit-filter: saturate(10%);\n                filter: saturate(10%) drop-shadow();\n                cursor: pointer;\n            }\n            .breadcrumbs-info{\n                font-size: 0.8rem;\n            }\n        "],
            directives: [router_1.ROUTER_DIRECTIVES, icon_1.MdIcon, main_header_component_1.MainHeaderComponent, team_list_component_1.TeamListComponent],
            providers: [icon_1.MdIconRegistry]
        }), 
        __metadata('design:paramtypes', [])
    ], TeamComponent);
    return TeamComponent;
}());
exports.TeamComponent = TeamComponent;
//# sourceMappingURL=team.component.js.map