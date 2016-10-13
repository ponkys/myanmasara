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
var PostHeartComponent = (function () {
    function PostHeartComponent() {
        this.iLike = 'false';
        this.change = new core_1.EventEmitter();
    }
    PostHeartComponent.prototype.onClick = function () {
    };
    __decorate([
        core_1.Input(),
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PostHeartComponent.prototype, "change", void 0);
    PostHeartComponent = __decorate([
        core_1.Component({
            selector: 'heart',
            template: "\n\t<div class=\"container\">\n\t\t<i class=\"fa fa-heart\"\n\t\t\t[class.highlighted]=\"iLike == true\"\n\t\t\t(click)=\"onClick(post)\">\n\t\t</i>\n\t\t<span class=\"total-likes\">0</span>\n\t</div>",
            styles: ["\n\t\t.fa-heart {\n\t\t\tcolor: #ccc;\n\t\t\tcursor: pointer;\n\t\t}\n\t\t.total-likes{\n\t\t\tcolor: white;\n\t\t}\n\n\t"],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], PostHeartComponent);
    return PostHeartComponent;
}());
exports.PostHeartComponent = PostHeartComponent;
//# sourceMappingURL=heart.component.js.map