import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import bootstrap from "bootstrap";

import { AppComponent } from "./app.component";
import { BasicDirective } from "./Directives/app.basic.directive";

@NgModule({
  declarations: [AppComponent, BasicDirective],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
