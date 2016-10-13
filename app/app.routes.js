"use strict";
var router_1 = require('@angular/router');
var posts_routes_1 = require('./posts/posts.routes');
var team_component_1 = require('./team/team.component');
exports.routes = posts_routes_1.PostsRoutes.concat([
    { path: 'team', component: team_component_1.TeamComponent }
]);
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map