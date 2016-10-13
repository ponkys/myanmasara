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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
//import { POSTS } from './mock-posts';
var PostService = (function () {
    function PostService(_http) {
        this._http = _http;
        this.postsUrl = 'http://localhost:4000/api/posts'; // URL to web api
    }
    PostService.prototype.getPosts = function () {
        return this._http.get(this.postsUrl)
            .map(function (res) { return res.json(); });
    };
    ;
    PostService.prototype.getPost = function (_id) {
        return this.getPosts()
            .map(function (posts) { return posts.find(function (post) { return post._id === _id; }); });
    };
    ;
    PostService.prototype.createPost = function (post) {
        return this._http.post(this.postsUrl, JSON.stringify(post))
            .map(function (res) { return res.json(); });
    };
    PostService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PostService);
    return PostService;
}());
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map