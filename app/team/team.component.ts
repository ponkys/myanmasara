import { Component } from '@angular/core';

import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

import { ROUTER_DIRECTIVES }  from '@angular/router';

import {MainHeaderComponent} from '../main-header.component';
import { TeamListComponent } from './team-list.component';

@Component({
    selector: 'team',
    template:`
        <div class="breadcrumbs cf">
			<md-icon svgSrc="app/assets/images/English-no-slogan.svg" alt="" class="breadcrumbs-logo" [routerLink]="['/']"></md-icon>
            <div class="breadcrumbs-info">
                <p>/ Team</p>
            </div>
		</div>
        <team-list></team-list>`,
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
        `],
        directives: [ROUTER_DIRECTIVES, MdIcon, MainHeaderComponent, TeamListComponent],
        providers: [MdIconRegistry]
})

export class TeamComponent{
    pageVisited = 'team';
}