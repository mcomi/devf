"use strict";
var router_1 = require('@angular/router');
var inicio_component_1 = require('../app/inicio/inicio.component');
var nosotros_component_1 = require('../app/nosotros/nosotros.component');
var appRoutes = [
    { path: "", component: inicio_component_1.InicioComponent },
    { path: "nosotros", component: nosotros_component_1.NosotrosComponent }
];
exports.appRoutingProvides = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map