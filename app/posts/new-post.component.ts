import { Component, OnInit } from '@angular/core';
import { Post } from './post';

import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';

@Component({
    moduleId: module.id,
    selector: 'new-post',
    template: `
        <div class="center col-7 col-m-11">
            <h1 class="title">New Post<h1>
            <pre>{{f | json }}</pre>
            <form #f="ngForm" novalidate>
                <div>
                    <label>Title</label>
                    <md-input type="text" name="title"[(ngModel)]="post.title"></md-input>
                </div>
                <div>
                    <label>Author</label>
                    <md-input type="_author" name="_author"[(ngModel)]="post._author"></md-input>
                </div>
                <div>
                    <label>Burmese Title</label>
                    <md-input type="burmeseTitle" name="burmeseTitle"[(ngModel)]="post.burmeseTitle"></md-input>
                </div>
                <div>
                    <label>Post Image Url</label>
                    <md-input type="postImageUrl" name="postImageUrl"[(ngModel)]="post.postImageUrl"></md-input>
                </div>
                <div>
                    <label>English Content</label>
                    <md-input type="engContent" name="engContent"[(ngModel)]="post.engContent"></md-input>
                </div>
                <div>
                    <label>Burmese Content</label>
                    <md-input type="burmeseContent" name="burmeseContent"[(ngModel)]="post.burmeseContent"></md-input>
                </div>
                <button type="submit" (click)="save(f.value, f.valid)">Submit</button>
            </form>
        <div>
    `,
    styles: [`
        .center {
            clear: both;
            float: none;
            margin: 0 auto;
        }
        .title{
            text-align: center;
        }      
    `],
    directives: [MD_INPUT_DIRECTIVES]
})
export class NewPostComponent implements OnInit {

    public post: Post;

    constructor() { }

    ngOnInit() { 
        this.post = {
        _author: '',
        title: '',
        burmeseTitle: '',
        postImageUrl: '',
        engContent: '',
        burmeseContent: ''
    }

    }

    public save(isValid: boolean, f: Post) {
        console.log(f);
    }

}