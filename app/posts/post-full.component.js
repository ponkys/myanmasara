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
var icon_1 = require('@angular2-material/icon');
var card_1 = require('@angular2-material/card');
var post_service_1 = require('./post.service');
require('rxjs/add/operator/map');
var heart_component_1 = require('../heart.component');
var share_links_component_1 = require('../share-links.component');
var PostFullComponent = (function () {
    function PostFullComponent(route, router, postService) {
        this.route = route;
        this.router = router;
        this.postService = postService;
        this.viewMode = 'english';
    }
    PostFullComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route
            .params.subscribe(function (params) {
            var _id = params['_id'];
            _this.postService.getPost(_id)
                .subscribe(function (post) { return _this.post = post; });
        });
    };
    ;
    PostFullComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    ;
    PostFullComponent.prototype.gotoPosts = function () {
        var postId = this.post ? this.post._id : null;
        // Pass along the post id if available
        // so that the PostBlock component can select that hero.
        this.router.navigate([''], { queryParams: { _id: postId, foo: 'foo' } });
    };
    PostFullComponent = __decorate([
        core_1.Component({
            selector: 'post-full',
            template: "\n        <div *ngIf=\"post\">\n            <div class=\"breadcrumbs\">\n                <md-icon  (click)=\"gotoPosts()\" svgSrc=\"app/assets/images/English-no-slogan.svg\" alt=\"\" class=\"breadcrumbs-logo\"></md-icon>\n                <div class=\"breadcrumbs-info\">\n                    <p>/ Posts / {{post.title}} / Posted: {{post.published | date}}</p>\n                </div>\n            </div>\n            <div class=\"banner col-12\">\n                <div [ngSwitch]=\"viewMode\" class=\"banner-info col-6 col-m-8 title-mobile-fix\">\n                    <template [ngSwitchCase]=\"'english'\">\n                        <h1>{{post.title}}</h1>\n                        <p>by <span>{{post._author}}</span></p>\n                    </template>\n                    <template [ngSwitchCase]=\"'burmese'\">\n                        <h1>{{post.burmeseTitle}}</h1>\n                        <p>by <span>{{post._author}}</span></p>\n                    </template>\n                </div>\n                <div class=\"image-wrapper\">\n                    <img [src] = \"post.postImageUrl\" class=\"full-image\">\n                </div>\t\n            </div>\n            <div class=\"center col-7 col-m-11\">\n                <div class=\"lang col-7\">\n                    <md-card (click)=\"viewMode = 'english'\">\n                        <a [class.disable]=\"viewMode == 'english'\" >English</a>\n                    </md-card>\n                    <md-card [class.disable]=\"viewMode == 'burmese'\" (click)=\"viewMode = 'burmese'\">\n                        <a [class.disable]=\"viewMode == 'burmese'\">Burmese</a>\n                    </md-card>\n                </div>\n            <share-links></share-links>\n            <heart></heart>\n            <div [ngSwitch]=\"viewMode\" class=\"post-content\">\n                <template [ngSwitchCase]=\"'english'\" class=\"eng-content\">\n                    <p>{{post.engContent}}</p>\n                </template>\n                <template [ngSwitchCase]=\"'burmese'\" class=\"burmese-content\">\n                    <p>{{post.burmeseContent}}</p>\n                </template>\n            </div>\n\t\t</div>",
            styles: ["\n            .breadcrumbs{\n                display: flex;\n                flex-direction: row;\n                justify-content: flex-start;\n                flex-wrap: wrap;\n                align-items: center;\n                margin-top: 2em;\n            }\n            .breadcrumbs-logo{\n                width: 10em;\n                height: 1em;\n                padding-left: 4em;\n                -webkit-filter: saturate(10%);\n                filter: saturate(10%) drop-shadow();\n                cursor: pointer;\n            }\n            .breadcrumbs-info{\n                font-size: 0.8rem;\n            }\n            .full-image{\n                width: 100%;\n                position: absolute; \n                max-width: 800px;\n                margin: 0 auto;\n                height: 20rem;\n                max-height: 320px;\n                top: 0%;\n                left: 0;\n                right: 0;\n                -webkit-filter: brightness(50%);\n                filter: brightness(50%) drop-shadow();\n            }\n            .banner{\n                position: relative;\n                height: 20rem;\n                max-height: 320px;\n                background-color: #3c3d3c;\n            }\n            .banner-info{\n                display: block;\n                margin: 50 auto;\n                max-width: 800px;\n                text-align: center;\n                z-index: 10;\n                position: absolute;           \n                left: 0;\n                right: 0;\n            }\n            .banner-info h1 {\n                font-size: 2.0rem;\n                font-weight: 400;\n                color: #fff;\n                margin: 0 0 0.5rem 0;\n            }\n\n            .banner-info span {\n                color: #f6ff04;\n            }\n            .banner-info p {\n                color: #fff;\n            }\n            .lang{\n                display: flex;\n                margin-top: -40;\n            }\n            md-card{\n                padding: 15px 24px;\n                cursor: pointer;\n            }\n            a{\n                color: ed145b;\n            }\n            .disable{\n                color: #3c3d3c;\n            }\n            md-card:nth-child(2){\n                    margin-left: 1em;\n            }\n\n            heart {\n                flex-direction: row;\n                display: flex;\n                justify-content: center;\n            }\n            share-links{\n                flex-direction: row;\n                display: flex;\n                justify-content: center;\n                margin-bottom: 1.5rem;\n                margin-top: 1rem;\n                clear: both;\n            }\n            .center {\n                clear: both;\n                float: none;\n                margin: 0 auto;\n            }\n            body{\n                font-family: 'Noto Sans', sans-serif;\n            }\n        "],
            directives: [icon_1.MdIcon, card_1.MD_CARD_DIRECTIVES, heart_component_1.PostHeartComponent, share_links_component_1.PostShareLinksComponent],
            providers: [icon_1.MdIconRegistry, post_service_1.PostService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, post_service_1.PostService])
    ], PostFullComponent);
    return PostFullComponent;
}());
exports.PostFullComponent = PostFullComponent;
//# sourceMappingURL=post-full.component.js.map