import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/observable';

import { Post } from './post';

//import { POSTS } from './mock-posts';

@Injectable()

export class PostService {

    private postsUrl = 'http://localhost:4000/api/posts';  // URL to web api

    constructor(private _http: Http) { }

    getPosts() : Observable<Post[]> {
        return this._http.get(this.postsUrl)
            .map(res => res.json());
    };

    getPost(_id: string | number) {
        return this.getPosts()
        .map(posts => posts.find(post => post._id === _id));
    }; 

    createPost(post: Post){
        return this._http.post(this.postsUrl, JSON.stringify(post))
            .map(res => res.json());
    }

    // getPost(){
    //     return this._http.get("this.postsUrl")
    //     .map(res => res.json())
    // };

    // CORS that needs to be implemented in production

    // var headers = new Headers ({
    //     "access-control-request-method": "POST"
    // });

    // var options = new RequestOptions({
    //     headers: headers
    // });

    // this.http.get(this.postUrl, options);


}

