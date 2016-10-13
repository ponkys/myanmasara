import { Component } from '@angular/core';

import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

import { User } from './user.model';
import {UserService} from './user.service';

import { TeamDetailComponent } from './team-detail.component';

@Component({
    selector: 'team-list',
    template:`
		<team-detail [user]="selectedUser"></team-detail>
		<div class="content col-10 center">
            <div *ngIf= "isLoading"><i class="fa fa-spinner fa-spin fa-3x"></i></div>
            <div *ngFor="let user of users"
            (click)="onSelect(user)" class="circle-wrapper">
                <img [src] = "user.adminImageUrl" [alt] = "user.name" class="circle-image">
                <p class="title">{{ user.name}}</p>
                <p>{{ user.title }} </p>
            </div>
		</div>`,
        styles: [`
            .content{
                margin-top: 2em;
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                flex-wrap: wrap;
            }
            .circle-wrapper{
                width: 250px;
                margin-top: 3rem;
                text-align: center;
                position: relative;
                cursor: pointer;                
            }
            .circle-image {
                height: 180px;
                -webkit-filter: saturate(10%);
                filter: saturate(10%) drop-shadow();
                border-radius: 50%;
            }
            .circle-image:hover{
                -webkit-filter: saturate(100%);
                filter: saturate(100%) drop-shadow();
            }
            .title{
                font-weight: 700; 
            }
            .center{
                clear: both;
                float: none;
                margin: 0 auto;
            }
        `],
        directives: [MdIcon, MD_CARD_DIRECTIVES, TeamDetailComponent],
        providers: [UserService, MdIconRegistry]
})

export class TeamListComponent {
    users: User[];
    selectedUser: User;
    isLoading = true;

   constructor(private userService: UserService) { }

   getUsers() {
    this.userService.getUsers()
        .subscribe(users => {
            this.isLoading = false;
            this.users = users
        });
    }

    ngOnInit() {
        this.getUsers();
    }

    onSelect(admin: User) { 
        this.selectedUser = admin;
        console.log(admin) 
    }
}