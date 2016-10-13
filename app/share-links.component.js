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
var PostShareLinksComponent = (function () {
    function PostShareLinksComponent() {
    }
    PostShareLinksComponent = __decorate([
        core_1.Component({
            selector: 'share-links',
            template: "\n        <i class=\"fa fa-link\"></i>\n        <i class=\"fa fa-facebook-square\"></i>\n        <i class=\"fa fa-twitter-square\"></i>\n    ",
            styles: ["\n    .fa{\n        cursor: pointer;\n        margin-right: 2rem;\n        font-size: 1.2em;\n        color: #3c3d3c;\n    }"
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PostShareLinksComponent);
    return PostShareLinksComponent;
}());
exports.PostShareLinksComponent = PostShareLinksComponent;
//# sourceMappingURL=share-links.component.js.map