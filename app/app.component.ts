import { Component } from "@angular/core";


import { registerElement } from "nativescript-angular/element-registry";
registerElement("PullToRefresh", () => require("nativescript-pulltorefresh").PullToRefresh);

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent { }