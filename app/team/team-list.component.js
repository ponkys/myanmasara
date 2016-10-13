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
var card_1 = require('@angular2-material/card');
var user_service_1 = require('./user.service');
var team_detail_component_1 = require('./team-detail.component');
var TeamListComponent = (function () {
    function TeamListComponent(userService) {
        this.userService = userService;
        this.isLoading = true;
    }
    TeamListComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers()
            .subscribe(function (users) {
            _this.isLoading = false;
            _this.users = users;
        });
    };
    TeamListComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    TeamListComponent.prototype.onSelect = function (admin) {
        this.selectedUser = admin;
        console.log(admin);
    };
    TeamListComponent = __decorate([
        core_1.Component({
            selector: 'team-list',
            template: "\n\t\t<team-detail [user]=\"selectedUser\"></team-detail>\n\t\t<div class=\"content col-10 center\">\n            <div *ngIf= \"isLoading\"><i class=\"fa fa-spinner fa-spin fa-3x\"></i></div>\n            <div *ngFor=\"let user of users\"\n            (click)=\"onSelect(user)\" class=\"circle-wrapper\">\n                <img [src] = \"user.adminImageUrl\" [alt] = \"user.name\" class=\"circle-image\">\n                <p class=\"title\">{{ user.name}}</p>\n                <p>{{ user.title }} </p>\n            </div>\n\t\t</div>",
            styles: ["\n            .content{\n                margin-top: 2em;\n                display: flex;\n                flex-direction: row;\n                justify-content: space-around;\n                flex-wrap: wrap;\n            }\n            .circle-wrapper{\n                width: 250px;\n                margin-top: 3rem;\n                text-align: center;\n                position: relative;\n                cursor: pointer;                \n            }\n            .circle-image {\n                height: 180px;\n                -webkit-filter: saturate(10%);\n                filter: saturate(10%) drop-shadow();\n                border-radius: 50%;\n            }\n            .circle-image:hover{\n                -webkit-filter: saturate(100%);\n                filter: saturate(100%) drop-shadow();\n            }\n            .title{\n                font-weight: 700; \n            }\n            .center{\n                clear: both;\n                float: none;\n                margin: 0 auto;\n            }\n        "],
            directives: [icon_1.MdIcon, card_1.MD_CARD_DIRECTIVES, team_detail_component_1.TeamDetailComponent],
            providers: [user_service_1.UserService, icon_1.MdIconRegistry]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], TeamListComponent);
    return TeamListComponent;
}());
exports.TeamListComponent = TeamListComponent;
//# sourceMappingURL=team-list.component.js.map