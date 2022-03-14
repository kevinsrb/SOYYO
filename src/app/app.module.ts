import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { BusinnessInfoComponent } from './components/business_info/business_info.component';
import { BusinessComponent } from './components/business/business.component';

@NgModule({
  declarations: [
    AppComponent,
    BusinnessInfoComponent,
    BusinessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
