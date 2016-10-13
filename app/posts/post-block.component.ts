import { Component, OnInit} from "@angular/core";

import { Router } from '@angular/router';

import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

import { PostHeartComponent } from '../heart.component';
import { PostFullComponent } from './post-full.component';

import { Post } from './post';
import {PostService} from './post.service';
import { HTTP_PROVIDERS } from '@angular/http';


@Component({
    selector: 'post-block',
    template: `
        <section class="flex-center col-10 col-m-12 center">
            <div *ngIf= "isLoading"><i class="fa fa-spinner fa-spin fa-3x"></i></div>
            <md-card class= "block" *ngFor="let post of posts"
            (click)="onSelect(post)">
                <img [src] = "post.postImageUrl" class="post_image">
                <div class="info_container col-12">
                    <md-card-title class="white">{{ post.title }}</md-card-title>
                    <p class="date light-grey">{{post.published | date}}
                    </p>
                    <p class="white">by <span class="yellow">{{post._author}}</span>
                    </p>
                    <heart class="heart-component"></heart>
                </div>
            </md-card>
        </section>
        <post-full (click)="onSelect(post)"></post-full>
    `,
    styleUrls: ['app/posts/post-block.component.css'],
    directives: [PostHeartComponent, PostFullComponent, MD_CARD_DIRECTIVES],
    providers: [PostService, HTTP_PROVIDERS]
}) 


export class PostBlockComponent  implements OnInit {
    posts: Post[];
    
    selectedPost: Post;
    pageVisited = 'home';
    error: any;
    isLoading = true;

   constructor(
       private router: Router,
       private postService: PostService) {}

    ngOnInit() {
         this.postService.getPosts()
            .subscribe(posts => {
                this.isLoading = false;
                this.posts = posts
            });
    }

     onSelect(post: Post) {
    this.router.navigate(['/post', post._id]);
  }

}