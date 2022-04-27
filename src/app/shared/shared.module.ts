import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NodeActionButtonComponent} from "./components/node-action-button/node-action-button.component";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatIconModule} from "@angular/material/icon";
import {AppComponent} from "../app.component";


@NgModule({
            declarations: [NodeActionButtonComponent],
            exports: [NodeActionButtonComponent],
            imports: [
              CommonModule,
              MatButtonModule,
              MatTooltipModule,
              MatIconModule
            ],
            providers: [],
            bootstrap: []
          })
export class SharedModule
{
}
