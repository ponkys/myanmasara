import { Component, Input, OnInit } from '@angular/core';

import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

import { UserService } from './user.service';
import { User } from './user.model';

@Component({
    selector: 'team-detail',
    template:`
        <div *ngIf="user">
            <div class="banner-info col-10 center">
                <div class="lang">
                    <md-card (click)="viewMode = 'english'">
                        <a [class.disable]="viewMode == 'english'" >English</a>
                    </md-card>
                    <md-card [class.disable]="viewMode == 'burmese'" (click)="viewMode = 'burmese'">
                        <a [class.disable]="viewMode == 'burmese'">Burmese</a>
                    </md-card>
                </div>
                <md-card [ngSwitch]="viewMode">
                    <template [ngSwitchCase]="'english'" class="eng-content">
                        <md-card-header>
                            <img md-card-avatar [src] = "user.adminImageUrl" [alt] = "user.name">
                            <md-card-title>{{ user.name }}</md-card-title>
                            <md-card-subtitle>{{user.title}}</md-card-subtitle>
                        </md-card-header>
                        <md-card-content>
                            <p>{{user.bio}}</p>
                        </md-card-content>
                    </template>
                    <template [ngSwitchCase]="'burmese'" class="burmese-content">    
                        <md-card-header>
                            <img md-card-avatar [src] = "user.adminImageUrl">
                            <md-card-title>THIS SHOULD BE IN BURMESE!</md-card-title>
                            <md-card-subtitle>{{user.title}}</md-card-subtitle>
                        </md-card-header>
                        <md-card-content>
                            <p>{{user.bio}}</p>
                        </md-card-content>
                    </template>
                </md-card>
            </div>
		</div>`,
        styles: [`
            .lang{
                display: flex;
            }
            .banner-info{       
                max-width: 740px;
            }
            md-card{
                padding: 15px 24px;
                cursor: pointer;
            }
            .languages{
                position:absolute;
            }
            .pink{
                color: #ed145b;
            }
            .disable{
                color: #3c3d3c;
            }
            .center{
                clear: both;
                float: none;
                margin: 0 auto;
            }
        `],
        directives: [MdIcon, MD_CARD_DIRECTIVES],
        providers: [ MdIconRegistry]
})

export class TeamDetailComponent{
    private sub: any;

    viewMode = 'english';

     @Input() user: User;

}