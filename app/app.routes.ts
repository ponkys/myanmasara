import { provideRouter, RouterConfig } from '@angular/router';

import { PostsRoutes }        from './posts/posts.routes';
import { TeamComponent } from './team/team.component';

export const routes: RouterConfig = [
  ...PostsRoutes,
  { path: 'team', component: TeamComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];