"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var items_component_1 = require("./item/items.component");
var item_detail_component_1 = require("./item/item-detail.component");
var create_portfolio_item_component_1 = require("./item/create-portfolio-item/create-portfolio-item.component");
var create_currency_price_component_1 = require("./item/create-currency-price/create-currency-price.component");
var create_calculation_component_1 = require("./item/create-calculation/create-calculation.component");
var routes = [
    { path: "", redirectTo: "/items", pathMatch: "full" },
    { path: "items", component: items_component_1.ItemsComponent },
    { path: "item/:id", component: item_detail_component_1.ItemDetailComponent },
    { path: "createPortfolioItem", component: create_portfolio_item_component_1.CreatePortfolioItemComponent },
    { path: "createCurrencyPrice", component: create_currency_price_component_1.CreateCurrencyPriceComponent },
    { path: "createCalculationResult", component: create_calculation_component_1.CreateCalculationComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxzREFBdUU7QUFHdkUsMERBQXdEO0FBQ3hELHNFQUFtRTtBQUNuRSxnSEFBNEc7QUFDNUcsZ0hBQTRHO0FBQzVHLHVHQUFvRztBQUVwRyxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3JELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRTtJQUM1QyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLDJDQUFtQixFQUFFO0lBQ3BELEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFLFNBQVMsRUFBRSw4REFBNEIsRUFBQztJQUN2RSxFQUFFLElBQUksRUFBRSxxQkFBcUIsRUFBRSxTQUFTLEVBQUUsOERBQTRCLEVBQUM7SUFDdkUsRUFBRSxJQUFJLEVBQUUseUJBQXlCLEVBQUUsU0FBUyxFQUFFLHlEQUEwQixFQUFDO0NBQzVFLENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgSXRlbXNDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW1zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSXRlbURldGFpbENvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbS1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDcmVhdGVQb3J0Zm9saW9JdGVtQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9jcmVhdGUtcG9ydGZvbGlvLWl0ZW0vY3JlYXRlLXBvcnRmb2xpby1pdGVtLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ3JlYXRlQ3VycmVuY3lQcmljZUNvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vY3JlYXRlLWN1cnJlbmN5LXByaWNlL2NyZWF0ZS1jdXJyZW5jeS1wcmljZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IENyZWF0ZUNhbGN1bGF0aW9uQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9jcmVhdGUtY2FsY3VsYXRpb24vY3JlYXRlLWNhbGN1bGF0aW9uLmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2l0ZW1zXCIsIHBhdGhNYXRjaDogXCJmdWxsXCIgfSxcbiAgICB7IHBhdGg6IFwiaXRlbXNcIiwgY29tcG9uZW50OiBJdGVtc0NvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJpdGVtLzppZFwiLCBjb21wb25lbnQ6IEl0ZW1EZXRhaWxDb21wb25lbnQgfSxcbiAgICB7IHBhdGg6IFwiY3JlYXRlUG9ydGZvbGlvSXRlbVwiLCBjb21wb25lbnQ6IENyZWF0ZVBvcnRmb2xpb0l0ZW1Db21wb25lbnR9LFxuICAgIHsgcGF0aDogXCJjcmVhdGVDdXJyZW5jeVByaWNlXCIsIGNvbXBvbmVudDogQ3JlYXRlQ3VycmVuY3lQcmljZUNvbXBvbmVudH0sXG4gICAgeyBwYXRoOiBcImNyZWF0ZUNhbGN1bGF0aW9uUmVzdWx0XCIsIGNvbXBvbmVudDogQ3JlYXRlQ2FsY3VsYXRpb25Db21wb25lbnR9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfSJdfQ==