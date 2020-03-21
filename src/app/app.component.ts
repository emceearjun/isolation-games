import { Component, OnInit } from "@angular/core";
import { appRoutes } from './app-routing.module';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  
  routes: any[];

  ngOnInit() {
    this.routes = appRoutes;
  }
  
}
