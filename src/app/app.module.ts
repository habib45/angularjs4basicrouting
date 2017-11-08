import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NewModuleComponent } from './new-module/new-module.component';
import { UserComponent } from './user/user.component';
import { FoodComponent } from './food/food.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NewModuleComponent,
    UserComponent,
    FoodComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
     
  { 
  path: 'user',
 component: UserComponent
  },
   { 
  path: 'food',
 component: FoodComponent
  },{
     path: 'contact',
 component: ContactComponent
    
  }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
