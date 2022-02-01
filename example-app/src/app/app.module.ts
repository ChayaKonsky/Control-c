import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PasswordModule } from './components/password/password.module';
import { CopyModule } from './components/copy/copy.module';
import { PasteModule } from './components/paste/paste.module';
import { AppRoutingModule } from './app-routing.module';
@NgModule({                                                                   
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    PasswordModule,
    CopyModule,
    PasteModule,
    AppRoutingModule
  ],
  providers: [], 
  bootstrap: [AppComponent]
})
export class AppModule {

}