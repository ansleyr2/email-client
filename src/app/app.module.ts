import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { InboxViewComponent } from  './inbox-view/inbox-view.component';
import { ViewEmailComponent } from './email-view/email-view.component';

const appRoutes: Routes = [
  { path: '', component: InboxViewComponent },
  { path: 'view-email', component: ViewEmailComponent},
  { path: 'create', component: ViewEmailComponent }
];

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  declarations: [ AppComponent, InboxViewComponent, ViewEmailComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
