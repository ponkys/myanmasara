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
var button_1 = require('@angular2-material/button');
var NewPostButtonComponent = (function () {
    function NewPostButtonComponent() {
    }
    NewPostButtonComponent = __decorate([
        core_1.Component({
            selector: 'new-post-button',
            template: "\n        <button md-mini-fab>\n            <md-icon class=\"md-24\">add</md-icon>\n        </button>\n    ",
            styles: ["\n        [md-mini-fab] {\n            background-color: #ff1d14;\n            box-sizing: content-box;\n        }\n        [md-mini-fab].md-button-focus{\n            background-color: #3c3d3c;\n        }\n        [md-mini-fab] i, [md-mini-fab] md-icon {\n                padding:0;\n        }"
            ],
            directives: [icon_1.MdIcon, button_1.MD_BUTTON_DIRECTIVES],
            providers: [icon_1.MdIconRegistry]
        }), 
        __metadata('design:paramtypes', [])
    ], NewPostButtonComponent);
    return NewPostButtonComponent;
}());
exports.NewPostButtonComponent = NewPostButtonComponent;
//# sourceMappingURL=new-post-button.component.js.map