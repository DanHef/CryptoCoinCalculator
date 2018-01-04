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
        this.currencyPriceService.saveCurrencyPrices();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWN1cnJlbmN5LXByaWNlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNyZWF0ZS1jdXJyZW5jeS1wcmljZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBOEY7QUFHOUYsNkVBQTBFO0FBRzFFLDBDQUF5QztBQUN6QyxzREFBK0Q7QUFPL0Q7SUFNSSxzQ0FBNkIsb0JBQTBDLEVBQzFDLE1BQWMsRUFDZCxlQUFpQztRQUZqQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxvQkFBZSxHQUFmLGVBQWUsQ0FBa0I7SUFBSSxDQUFDO0lBRW5FLDBEQUFtQixHQUFuQjtRQUNJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFM0csSUFBSSxDQUFDLG9CQUFvQixDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFmUSw0QkFBNEI7UUFMeEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3Q0FBd0M7U0FDeEQsQ0FBQzt5Q0FPcUQsNkNBQW9CO1lBQ2xDLGVBQU07WUFDRyx5QkFBZ0I7T0FSckQsNEJBQTRCLENBZ0J4QztJQUFELG1DQUFDO0NBQUEsQUFoQkQsSUFnQkM7QUFoQlksb0VBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb2luUG9ydGZvbGlvSXRlbSB9IGZyb20gXCIuLi9Db2luUG9ydGZvbGlvSXRlbVwiO1xuXG5pbXBvcnQgeyBDdXJyZW5jeVByaWNlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9jdXJyZW5jeS1wcmljZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDdXJyZW5jeVByaWNlIH0gZnJvbSBcIi4uL0N1cnJlbmN5UHJpY2VcIjtcblxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiY3JlYXRlLWN1cnJlbmN5LXByaWNlXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2NyZWF0ZS1jdXJyZW5jeS1wcmljZS5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBDcmVhdGVDdXJyZW5jeVByaWNlQ29tcG9uZW50ICB7XG4gICAgcGxhdGZvcm06IHN0cmluZztcbiAgICBjb2RlRnJvbTogc3RyaW5nO1xuICAgIGNvZGVUbzogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGN1cnJlbmN5UHJpY2VTZXJ2aWNlOiBDdXJyZW5jeVByaWNlU2VydmljZSxcbiAgICAgICAgICAgICAgICBwcml2YXRlIHJlYWRvbmx5IHJvdXRlcjogUm91dGVyLFxuICAgICAgICAgICAgICAgIHByaXZhdGUgcmVhZG9ubHkgcm91dGVyRXh0ZW5zaW9uOiBSb3V0ZXJFeHRlbnNpb25zKSB7IH1cblxuICAgIGNyZWF0ZUN1cnJlbmN5UHJpY2UoKSB7XG4gICAgICAgIHRoaXMuY3VycmVuY3lQcmljZVNlcnZpY2UuY3JlYXRlQ3VycmVuY3lQcmljZSh0aGlzLmNvZGVGcm9tLCB0aGlzLmNvZGVUbywgdGhpcy5kZXNjcmlwdGlvbiwgdGhpcy5wbGF0Zm9ybSk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW5jeVByaWNlU2VydmljZS5zYXZlQ3VycmVuY3lQcmljZXMoKTtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb24ubmF2aWdhdGUoW1wiL2l0ZW1zXCJdLCB7IGNsZWFySGlzdG9yeTogdHJ1ZSB9KTtcbiAgICB9XG59Il19