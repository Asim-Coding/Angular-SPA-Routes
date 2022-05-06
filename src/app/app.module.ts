import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CrisesListComponent } from './crises-list/crises-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot([ 
    {path: 'crises-list', component: CrisesListComponent},
    {path: 'hero-list', component: HeroListComponent},
    {path:'',redirectTo:'/hero-list',pathMatch:'full'},
    {path:' ** ', component:PagenotfoundComponent}
  ]), ],
  declarations: [ AppComponent, HelloComponent,CrisesListComponent,HeroListComponent,PagenotfoundComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
