import { Component } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';

import { MainHeaderComponent } from './main-header.component';
import { FooterComponent } from './footer.component';
import { PostBlockComponent } from './posts/post-block.component';
import { PostFullComponent } from './posts/post-full.component';
import { TeamComponent } from './team/team.component';
import { NewPostButtonComponent } from './posts/new-post-button.component';
import { NewPostComponent } from './posts/new-post.component';

@Component({
  selector: 'my-app',
  template: `
      <main-header></main-header>
      <router-outlet></router-outlet>
    `,
  directives: [ROUTER_DIRECTIVES, MainHeaderComponent, FooterComponent, NewPostButtonComponent],
  precompile: [TeamComponent, PostFullComponent, PostBlockComponent, NewPostComponent],
  styleUrls: [''],
  styles: [`
    new-post-button{
      position: absolute;
      right: 3rem;
      top: 9.5em;
    }
  `]
})
export class AppComponent{ 
}