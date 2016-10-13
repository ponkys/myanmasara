import { RouterConfig }          from '@angular/router';
import { PostBlockComponent }     from './post-block.component';
import { PostFullComponent }   from './post-full.component';
import { NewPostComponent } from './new-post.component';

export const PostsRoutes: RouterConfig = [
  { path: '',  component: PostBlockComponent },
  { path: 'post/new', component: NewPostComponent },
  { path: 'post/:_id', component: PostFullComponent }
];