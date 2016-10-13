import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

import { Post } from './post';
import {PostService} from './post.service';
import 'rxjs/add/operator/map';

import { PostHeartComponent } from '../heart.component';
import { PostShareLinksComponent } from '../share-links.component';

@Component({
    selector: 'post-full',
    template:`
        <div *ngIf="post">
            <div class="breadcrumbs">
                <md-icon  (click)="gotoPosts()" svgSrc="app/assets/images/English-no-slogan.svg" alt="" class="breadcrumbs-logo"></md-icon>
                <div class="breadcrumbs-info">
                    <p>/ Posts / {{post.title}} / Posted: {{post.published | date}}</p>
                </div>
            </div>
            <div class="banner col-12">
                <div [ngSwitch]="viewMode" class="banner-info col-6 col-m-8 title-mobile-fix">
                    <template [ngSwitchCase]="'english'">
                        <h1>{{post.title}}</h1>
                        <p>by <span>{{post._author}}</span></p>
                    </template>
                    <template [ngSwitchCase]="'burmese'">
                        <h1>{{post.burmeseTitle}}</h1>
                        <p>by <span>{{post._author}}</span></p>
                    </template>
                </div>
                <div class="image-wrapper">
                    <img [src] = "post.postImageUrl" class="full-image">
                </div>	
            </div>
            <div class="center col-7 col-m-11">
                <div class="lang col-7">
                    <md-card (click)="viewMode = 'english'">
                        <a [class.disable]="viewMode == 'english'" >English</a>
                    </md-card>
                    <md-card [class.disable]="viewMode == 'burmese'" (click)="viewMode = 'burmese'">
                        <a [class.disable]="viewMode == 'burmese'">Burmese</a>
                    </md-card>
                </div>
            <share-links></share-links>
            <heart></heart>
            <div [ngSwitch]="viewMode" class="post-content">
                <template [ngSwitchCase]="'english'" class="eng-content">
                    <p>{{post.engContent}}</p>
                </template>
                <template [ngSwitchCase]="'burmese'" class="burmese-content">
                    <p>{{post.burmeseContent}}</p>
                </template>
            </div>
		</div>`,
        styles: [`
            .breadcrumbs{
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                flex-wrap: wrap;
                align-items: center;
                margin-top: 2em;
            }
            .breadcrumbs-logo{
                width: 10em;
                height: 1em;
                padding-left: 4em;
                -webkit-filter: saturate(10%);
                filter: saturate(10%) drop-shadow();
                cursor: pointer;
            }
            .breadcrumbs-info{
                font-size: 0.8rem;
            }
            .full-image{
                width: 100%;
                position: absolute; 
                max-width: 800px;
                margin: 0 auto;
                height: 20rem;
                max-height: 320px;
                top: 0%;
                left: 0;
                right: 0;
                -webkit-filter: brightness(50%);
                filter: brightness(50%) drop-shadow();
            }
            .banner{
                position: relative;
                height: 20rem;
                max-height: 320px;
                background-color: #3c3d3c;
            }
            .banner-info{
                display: block;
                margin: 50 auto;
                max-width: 800px;
                text-align: center;
                z-index: 10;
                position: absolute;           
                left: 0;
                right: 0;
            }
            .banner-info h1 {
                font-size: 2.0rem;
                font-weight: 400;
                color: #fff;
                margin: 0 0 0.5rem 0;
            }

            .banner-info span {
                color: #f6ff04;
            }
            .banner-info p {
                color: #fff;
            }
            .lang{
                display: flex;
                margin-top: -40;
            }
            md-card{
                padding: 15px 24px;
                cursor: pointer;
            }
            a{
                color: ed145b;
            }
            .disable{
                color: #3c3d3c;
            }
            md-card:nth-child(2){
                    margin-left: 1em;
            }

            heart {
                flex-direction: row;
                display: flex;
                justify-content: center;
            }
            share-links{
                flex-direction: row;
                display: flex;
                justify-content: center;
                margin-bottom: 1.5rem;
                margin-top: 1rem;
                clear: both;
            }
            .center {
                clear: both;
                float: none;
                margin: 0 auto;
            }
            body{
                font-family: 'Noto Sans', sans-serif;
            }
        `],
        directives: [MdIcon, MD_CARD_DIRECTIVES, PostHeartComponent, PostShareLinksComponent],
        providers: [ MdIconRegistry, PostService]
})

export class PostFullComponent implements OnInit, OnDestroy {
    viewMode = 'english';
    post: Post;

    private sub: any;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private postService: PostService) {}

    ngOnInit() {
         this.sub = this.route
            .params.subscribe(params => {
                let _id = params['_id'];
                this.postService.getPost(_id)
                .subscribe(post => this.post = post);
            });
    };

    ngOnDestroy() {
        this.sub.unsubscribe();
    };

    gotoPosts() {
        let postId = this.post ? this.post._id : null;
        // Pass along the post id if available
        // so that the PostBlock component can select that hero.
        this.router.navigate([''], { queryParams: { _id: postId, foo: 'foo' } });
    }
}

