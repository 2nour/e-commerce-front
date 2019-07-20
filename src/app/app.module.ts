import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/landingpage/nav-bar/nav-bar.component';
import { FooterComponent } from './components/landingpage/footer/footer.component';
import { HomeComponent } from './components/landingpage/home/home.component';
import { AddItemsComponent } from './components/admin/add-items/add-items.component';
import { RemoveUserComponent } from './components/admin/remove-user/remove-user.component';
import { ItemListComponent } from './components/user/item-list/item-list.component';
import { AddItemComponent } from './components/user/add-item/add-item.component';
import { CheckShoppingCartComponent } from './components/user/check-shopping-cart/check-shopping-cart.component';
import { ConnectionComponent } from './components/landingpage/connection/connection.component';
import { InscriptionComponent } from './components/landingpage/inscription/inscription.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    AddItemsComponent,
    RemoveUserComponent,
    ItemListComponent,
    AddItemComponent,
    CheckShoppingCartComponent,
    ConnectionComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
