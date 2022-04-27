import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DialogNodeComponent} from './features/nodes/dialog-node/dialog-node.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {DialogActionsComponent} from "./features/nodes/dialog-node/dialog-actions/dialog-actions.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ResponseNodeComponent} from './features/nodes/response-node/response-node.component';
import {SharedModule} from "./shared/shared.module";


@NgModule({
            declarations: [
              AppComponent,
              DialogNodeComponent,
              DialogActionsComponent,
              ResponseNodeComponent
            ],
            imports: [
              BrowserModule,
              AppRoutingModule,
              BrowserAnimationsModule,
              MatCardModule,
              MatButtonModule,
              MatIconModule,
              MatTooltipModule,
              MatFormFieldModule,
              MatInputModule,
              SharedModule
            ],
            providers: [],
            bootstrap: [AppComponent]
          })
export class AppModule
{
}
