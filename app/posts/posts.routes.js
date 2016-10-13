"use strict";
var post_block_component_1 = require('./post-block.component');
var post_full_component_1 = require('./post-full.component');
var new_post_component_1 = require('./new-post.component');
exports.PostsRoutes = [
    { path: '', component: post_block_component_1.PostBlockComponent },
    { path: 'post/new', component: new_post_component_1.NewPostComponent },
    { path: 'post/:_id', component: post_full_component_1.PostFullComponent }
];
//# sourceMappingURL=posts.routes.js.map