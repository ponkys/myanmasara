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
var core_1 = require("@angular/core");
var router_1 = require('@angular/router');
var card_1 = require('@angular2-material/card');
var heart_component_1 = require('../heart.component');
var post_full_component_1 = require('./post-full.component');
var post_service_1 = require('./post.service');
var http_1 = require('@angular/http');
var PostBlockComponent = (function () {
    function PostBlockComponent(router, postService) {
        this.router = router;
        this.postService = postService;
        this.pageVisited = 'home';
        this.isLoading = true;
    }
    PostBlockComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.postService.getPosts()
            .subscribe(function (posts) {
            _this.isLoading = false;
            _this.posts = posts;
        });
    };
    PostBlockComponent.prototype.onSelect = function (post) {
        this.router.navigate(['/post', post._id]);
    };
    PostBlockComponent = __decorate([
        core_1.Component({
            selector: 'post-block',
            template: "\n        <section class=\"flex-center col-10 col-m-12 center\">\n            <div *ngIf= \"isLoading\"><i class=\"fa fa-spinner fa-spin fa-3x\"></i></div>\n            <md-card class= \"block\" *ngFor=\"let post of posts\"\n            (click)=\"onSelect(post)\">\n                <img [src] = \"post.postImageUrl\" class=\"post_image\">\n                <div class=\"info_container col-12\">\n                    <md-card-title class=\"white\">{{ post.title }}</md-card-title>\n                    <p class=\"date light-grey\">{{post.published | date}}\n                    </p>\n                    <p class=\"white\">by <span class=\"yellow\">{{post._author}}</span>\n                    </p>\n                    <heart class=\"heart-component\"></heart>\n                </div>\n            </md-card>\n        </section>\n        <post-full (click)=\"onSelect(post)\"></post-full>\n    ",
            styleUrls: ['app/posts/post-block.component.css'],
            directives: [heart_component_1.PostHeartComponent, post_full_component_1.PostFullComponent, card_1.MD_CARD_DIRECTIVES],
            providers: [post_service_1.PostService, http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [router_1.Router, post_service_1.PostService])
    ], PostBlockComponent);
    return PostBlockComponent;
}());
exports.PostBlockComponent = PostBlockComponent;
//# sourceMappingURL=post-block.component.js.map