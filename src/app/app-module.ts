import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './component/header/header';
import { PageTableMultComponent } from './page-table-mult/page-table-mult';
import { Footer } from './component/footer/footer';
import { TableMultiplication } from './component/table-multiplication/table-multiplication';


@NgModule({
  declarations: [
    App,
    Header,
    PageTableMultComponent,
    Footer,
    TableMultiplication
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
