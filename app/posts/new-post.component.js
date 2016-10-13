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
var input_1 = require('@angular2-material/input');
var NewPostComponent = (function () {
    function NewPostComponent() {
    }
    NewPostComponent.prototype.ngOnInit = function () {
        this.post = {
            _author: '',
            title: '',
            burmeseTitle: '',
            postImageUrl: '',
            engContent: '',
            burmeseContent: ''
        };
    };
    NewPostComponent.prototype.save = function (isValid, f) {
        console.log(f);
    };
    NewPostComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'new-post',
            template: "\n        <div class=\"center col-7 col-m-11\">\n            <h1 class=\"title\">New Post<h1>\n            <pre>{{f | json }}</pre>\n            <form #f=\"ngForm\" novalidate>\n                <div>\n                    <label>Title</label>\n                    <md-input type=\"text\" name=\"title\"[(ngModel)]=\"post.title\"></md-input>\n                </div>\n                <div>\n                    <label>Author</label>\n                    <md-input type=\"_author\" name=\"_author\"[(ngModel)]=\"post._author\"></md-input>\n                </div>\n                <div>\n                    <label>Burmese Title</label>\n                    <md-input type=\"burmeseTitle\" name=\"burmeseTitle\"[(ngModel)]=\"post.burmeseTitle\"></md-input>\n                </div>\n                <div>\n                    <label>Post Image Url</label>\n                    <md-input type=\"postImageUrl\" name=\"postImageUrl\"[(ngModel)]=\"post.postImageUrl\"></md-input>\n                </div>\n                <div>\n                    <label>English Content</label>\n                    <md-input type=\"engContent\" name=\"engContent\"[(ngModel)]=\"post.engContent\"></md-input>\n                </div>\n                <div>\n                    <label>Burmese Content</label>\n                    <md-input type=\"burmeseContent\" name=\"burmeseContent\"[(ngModel)]=\"post.burmeseContent\"></md-input>\n                </div>\n                <button type=\"submit\" (click)=\"save(f.value, f.valid)\">Submit</button>\n            </form>\n        <div>\n    ",
            styles: ["\n        .center {\n            clear: both;\n            float: none;\n            margin: 0 auto;\n        }\n        .title{\n            text-align: center;\n        }      \n    "],
            directives: [input_1.MD_INPUT_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], NewPostComponent);
    return NewPostComponent;
}());
exports.NewPostComponent = NewPostComponent;
//# sourceMappingURL=new-post.component.js.map