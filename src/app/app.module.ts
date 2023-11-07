import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './pages/auth/auth.component';
import { ButtonProvidersComponent } from './pages/components/button-providers/button-providers.component';

@NgModule({
  declarations: [
    
  ],
  imports: [BrowserModule, BrowserAnimationsModule, AppComponent],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
