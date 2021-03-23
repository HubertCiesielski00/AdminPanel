import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LinkBoxComponent } from './link-box/link-box.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ManagmentComponent } from './managment/managment.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkBoxComponent,
    HeaderComponent,
    FooterComponent,
    ManagmentComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
