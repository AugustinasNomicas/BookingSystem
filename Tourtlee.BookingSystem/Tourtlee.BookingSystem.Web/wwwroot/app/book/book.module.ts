/// <reference path="../../../typings/tsd.d.ts" />
"use strict";

import {AngularModuleFactory} from "../shared/services/angularModuleFactory";
import {FormGroupValidationDirective} from "../shared/directives/formGroupValidation/formGroupValidation.directive";
import {BookController} from "./book.controller";
import {BookResource} from "./book.resource";
import {TourSelectorDirective} from "../shared/directives/tourSelector/TourSelector.directive";
import {ToursResource} from "../manage/tours/tours.resource";

export module Book {
    "use strict";   
    var moduleName = "book";
    var translationsPart = "admin";

    var app = AngularModuleFactory.factory(moduleName, translationsPart);

    app.directive("formGroupValidation", FormGroupValidationDirective.factory());
    app.directive("tourSelectorDirective", TourSelectorDirective.factory());
    app.controller("BookController", BookController);
    app.service("BookResource", BookResource);
    app.service("ToursResource", ToursResource);

    angular.bootstrap(document, [moduleName], {
        strictDi: true
    });
}