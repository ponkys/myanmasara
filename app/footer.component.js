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
var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent = __decorate([
        core_1.Component({
            selector: 'footer',
            template: "\n    <section grad>\n        <div class=\"content\">\n            <div class=\"links\">\n                <ul>\n                    <a href=\"#\"><li>About</li></a>\n                    <a href=\"#\"><li>Team</li></a>\n                </ul>\n            </div>\n            <form class=\"newsletter\">\n                <input type=\"text\" id=\"email\" name=\"email\">\n            </form>\n        </div>\n    </section>\n    ",
            styles: ["\n        ul {\n            display: flex;\n            flex-wrap: wrap;  \n        }\n        li {\n            list-style-type: none;\n            padding-right: 3em;\n        }\n        a {\n           color: #EDEFF5;\n           text-decoration: none;\n           font-size: 0.8rem;\n        }\n        a:hover {\n            color: #3c3d3c;\n        }\n        section {\n            width: 100%;\n            color: \n        }\n        \n        .grad {\n            background: rgba(226,226,226,0.3);\n            background: -moz-linear-gradient(left, rgba(226,226,226,1) 0%, rgba(219,219,219,1) 21%, rgba(209,209,209,1) 56%, rgba(254,254,254,1) 100%);\n            background: -webkit-gradient(left top, right top, color-stop(0%, rgba(226,226,226,1)), color-stop(21%, rgba(219,219,219,1)), color-stop(56%, rgba(209,209,209,1)), color-stop(100%, rgba(254,254,254,1)));\n            background: -webkit-linear-gradient(left, rgba(226,226,226,1) 0%, rgba(219,219,219,1) 21%, rgba(209,209,209,1) 56%, rgba(254,254,254,1) 100%);\n            background: -o-linear-gradient(left, rgba(226,226,226,1) 0%, rgba(219,219,219,1) 21%, rgba(209,209,209,1) 56%, rgba(254,254,254,1) 100%);\n            background: -ms-linear-gradient(left, rgba(226,226,226,1) 0%, rgba(219,219,219,1) 21%, rgba(209,209,209,1) 56%, rgba(254,254,254,1) 100%);\n            background: linear-gradient(to right, rgba(226,226,226,1) 0%, rgba(219,219,219,1) 21%, rgba(209,209,209,1) 56%, rgba(254,254,254,1) 100%);\n            filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e2e2e2', endColorstr='#fefefe', GradientType=1 );\n        }\n        .newsletter{\n            padding-right: 3em;\n        }\n        .content{\n            width: 50%;\n            margin: 0 auto;\n            display: flex;\n            flex-direction: row;\n            justify-content: space-between;\n            flex-wrap: wrap;\n            align-items: flex-end;\n        }\n        .links {\n            color: #EDEFF5;\n        }\n    "]
        }), 
        __metadata('design:paramtypes', [])
    ], FooterComponent);
    return FooterComponent;
}());
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map