import { Component } from '@angular/core';

import { NewPostButtonComponent } from './posts/new-post-button.component';

import { ROUTER_DIRECTIVES }  from '@angular/router';

import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

@Component({
    selector: 'main-header',
    template:`
        <section class="group">
            <header class="group">
                <md-icon svgSrc="app/assets/images/English-Full.svg" class="full-image col-6" [routerLink]="['/']"></md-icon>
            </header>
            <div class="header-links">
                <ul class="col-6">
                    <li><a [routerLink]="['']" [class.disable]="pageVisited == 'home'">Home</a></li>
                    <li><a href="#" [class.disable]="pageVisited == 'brief'">Brief</a></li>
                    <li><a [routerLink]="['/team']" [class.disable]="pageVisited == 'team'">Team</a></li>
                    <li><a href="#">Sign Out</a></li>
                    <li class="add-container" [routerLink]="['/post/new']"><new-post-button></new-post-button></li>
                </ul>
            </div>
        </section>
    `,
    styles: [`
        .full-image{
            max-width: 500px;
            height: 100px;
            cursor: pointer;
            margin: 0 auto;
            clear: both;
            float: none;
            display: flex;
        }
        .header-links ul{
            list-style-type: none;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            flex-wrap: wrap;
            margin: 0 auto;
            clear: both;
            float: none;           
        }

        a{
            color: #3c3d3c;
            text-decoration: none;
        }
        a:hover{
            color: #EDEFF5;
        }
        .disable{
            color: #ff1d14;
        }
        .add-container{
            position: relative;
        }
        new-post-button{
            position: absolute;
            top: -0.5rem;
            right: -1rem;
    }
    `],
    directives: [ROUTER_DIRECTIVES, MdIcon, NewPostButtonComponent],
    providers: [MdIconRegistry]
})
export class MainHeaderComponent {

}