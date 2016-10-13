"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_routes_1 = require('./app.routes');
var app_component_1 = require('./app.component');
//Cors with backend
var http_2 = require('@angular/http');
var cust_ext_browser_xhr_1 = require('./cust-ext-browser-xhr');
var core_1 = require('@angular/core');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    http_1.HTTP_PROVIDERS,
    app_routes_1.APP_ROUTER_PROVIDERS,
    core_1.provide(http_2.BrowserXhr, { useClass: cust_ext_browser_xhr_1.CustExtBrowserXhr })
])
    .catch(function (err) { return console.error(err); });
;
//# sourceMappingURL=main.js.map