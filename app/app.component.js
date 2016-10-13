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
var router_1 = require('@angular/router');
var main_header_component_1 = require('./main-header.component');
var footer_component_1 = require('./footer.component');
var post_block_component_1 = require('./posts/post-block.component');
var post_full_component_1 = require('./posts/post-full.component');
var team_component_1 = require('./team/team.component');
var new_post_button_component_1 = require('./posts/new-post-button.component');
var new_post_component_1 = require('./posts/new-post.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n      <main-header></main-header>\n      <router-outlet></router-outlet>\n    ",
            directives: [router_1.ROUTER_DIRECTIVES, main_header_component_1.MainHeaderComponent, footer_component_1.FooterComponent, new_post_button_component_1.NewPostButtonComponent],
            precompile: [team_component_1.TeamComponent, post_full_component_1.PostFullComponent, post_block_component_1.PostBlockComponent, new_post_component_1.NewPostComponent],
            styleUrls: [''],
            styles: ["\n    new-post-button{\n      position: absolute;\n      right: 3rem;\n      top: 9.5em;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map