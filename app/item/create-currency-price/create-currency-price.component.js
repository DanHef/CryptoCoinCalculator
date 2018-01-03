"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var currency_price_service_1 = require("../services/currency-price.service");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var CreateCurrencyPriceComponent = (function () {
    function CreateCurrencyPriceComponent(currencyPriceService, router, routerExtension) {
        this.currencyPriceService = currencyPriceService;
        this.router = router;
        this.routerExtension = routerExtension;
    }
    CreateCurrencyPriceComponent.prototype.createCurrencyPrice = function () {
        this.currencyPriceService.createCurrencyPrice(this.codeFrom, this.codeTo, this.description, this.platform);
        this.routerExtension.navigate(["/items"], { clearHistory: true });
    };
    CreateCurrencyPriceComponent = __decorate([
        core_1.Component({
            selector: "create-currency-price",
            moduleId: module.id,
            templateUrl: "./create-currency-price.component.html",
        }),
        __metadata("design:paramtypes", [currency_price_service_1.CurrencyPriceService,
            router_1.Router,
            router_2.RouterExtensions])
    ], CreateCurrencyPriceComponent);
    return CreateCurrencyPriceComponent;
}());
exports.CreateCurrencyPriceComponent = CreateCurrencyPriceComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWN1cnJlbmN5LXByaWNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZS1jdXJyZW5jeS1wcmljZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBOEY7QUFHOUYsNkVBQTBFO0FBRzFFLDBDQUF5QztBQUN6QyxzREFBK0Q7QUFPL0Q7SUFNSSxzQ0FBNkIsb0JBQTBDLEVBQzFDLE1BQWMsRUFDZCxlQUFpQztRQUZqQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7SUFBSSxDQUFDO0lBRW5FLDBEQUFtQixHQUFuQjtRQUNJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFM0csSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFkUSw0QkFBNEI7UUFMeEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3Q0FBd0M7U0FDeEQsQ0FBQzt5Q0FPcUQsNkNBQW9CO1lBQ2xDLGVBQU07WUFDRyx5QkFBZ0I7T0FSckQsNEJBQTRCLENBZXhDO0lBQUQsbUNBQUM7Q0FBQSxBQWZELElBZUM7QUFmWSxvRUFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvaW5Qb3J0Zm9saW9JdGVtIH0gZnJvbSBcIi4uL0NvaW5Qb3J0Zm9saW9JdGVtXCI7XG5cbmltcG9ydCB7IEN1cnJlbmN5UHJpY2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2N1cnJlbmN5LXByaWNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IEN1cnJlbmN5UHJpY2UgfSBmcm9tIFwiLi4vQ3VycmVuY3lQcmljZVwiO1xuXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJjcmVhdGUtY3VycmVuY3ktcHJpY2VcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY3JlYXRlLWN1cnJlbmN5LXByaWNlLmNvbXBvbmVudC5odG1sXCIsXG59KVxuZXhwb3J0IGNsYXNzIENyZWF0ZUN1cnJlbmN5UHJpY2VDb21wb25lbnQgIHtcbiAgICBwbGF0Zm9ybTogc3RyaW5nO1xuICAgIGNvZGVGcm9tOiBzdHJpbmc7XG4gICAgY29kZVRvOiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY3VycmVuY3lQcmljZVNlcnZpY2U6IEN1cnJlbmN5UHJpY2VTZXJ2aWNlLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSByZWFkb25seSByb3V0ZXJFeHRlbnNpb246IFJvdXRlckV4dGVuc2lvbnMpIHsgfVxuXG4gICAgY3JlYXRlQ3VycmVuY3lQcmljZSgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW5jeVByaWNlU2VydmljZS5jcmVhdGVDdXJyZW5jeVByaWNlKHRoaXMuY29kZUZyb20sIHRoaXMuY29kZVRvLCB0aGlzLmRlc2NyaXB0aW9uLCB0aGlzLnBsYXRmb3JtKTtcblxuICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbi5uYXZpZ2F0ZShbXCIvaXRlbXNcIl0sIHsgY2xlYXJIaXN0b3J5OiB0cnVlIH0pO1xuICAgIH1cbn0iXX0=