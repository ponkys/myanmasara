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
var TeamDetailComponent = (function () {
    function TeamDetailComponent() {
        this.viewMode = 'english';
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TeamDetailComponent.prototype, "user", void 0);
    TeamDetailComponent = __decorate([
        core_1.Component({
            selector: 'team-detail',
            template: "\n        <div *ngIf=\"user\">\n            <div class=\"banner-info col-10 center\">\n                <div class=\"lang\">\n                    <md-card (click)=\"viewMode = 'english'\">\n                        <a [class.disable]=\"viewMode == 'english'\" >English</a>\n                    </md-card>\n                    <md-card [class.disable]=\"viewMode == 'burmese'\" (click)=\"viewMode = 'burmese'\">\n                        <a [class.disable]=\"viewMode == 'burmese'\">Burmese</a>\n                    </md-card>\n                </div>\n                <md-card [ngSwitch]=\"viewMode\">\n                    <template [ngSwitchCase]=\"'english'\" class=\"eng-content\">\n                        <md-card-header>\n                            <img md-card-avatar [src] = \"user.adminImageUrl\" [alt] = \"user.name\">\n                            <md-card-title>{{ user.name }}</md-card-title>\n                            <md-card-subtitle>{{user.title}}</md-card-subtitle>\n                        </md-card-header>\n                        <md-card-content>\n                            <p>{{user.bio}}</p>\n                        </md-card-content>\n                    </template>\n                    <template [ngSwitchCase]=\"'burmese'\" class=\"burmese-content\">    \n                        <md-card-header>\n                            <img md-card-avatar [src] = \"user.adminImageUrl\">\n                            <md-card-title>THIS SHOULD BE IN BURMESE!</md-card-title>\n                            <md-card-subtitle>{{user.title}}</md-card-subtitle>\n                        </md-card-header>\n                        <md-card-content>\n                            <p>{{user.bio}}</p>\n                        </md-card-content>\n                    </template>\n                </md-card>\n            </div>\n\t\t</div>",
            styles: ["\n            .lang{\n                display: flex;\n            }\n            .banner-info{       \n                max-width: 740px;\n            }\n            md-card{\n                padding: 15px 24px;\n                cursor: pointer;\n            }\n            .languages{\n                position:absolute;\n            }\n            .pink{\n                color: #ed145b;\n            }\n            .disable{\n                color: #3c3d3c;\n            }\n            .center{\n                clear: both;\n                float: none;\n                margin: 0 auto;\n            }\n        "],
            directives: [icon_1.MdIcon, card_1.MD_CARD_DIRECTIVES],
            providers: [icon_1.MdIconRegistry]
        }), 
        __metadata('design:paramtypes', [])
    ], TeamDetailComponent);
    return TeamDetailComponent;
}());
exports.TeamDetailComponent = TeamDetailComponent;
//# sourceMappingURL=team-detail.component.js.map