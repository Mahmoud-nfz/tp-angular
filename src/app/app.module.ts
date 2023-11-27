import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CvListComponent } from './cv-list/cv-list.component';
import { CvCardComponent } from './cv-card/cv-card.component';
import { CvDetailComponent } from './cv-detail/cv-detail.component';
import { TabsComponent } from './tabs/tabs.component';
import { CvSearchComponent } from './cv-search/cv-search.component';
import { StreamsComponent } from './streams/streams.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CvListComponent,
    CvCardComponent,
    CvDetailComponent,
    TabsComponent,
    CvSearchComponent,
    StreamsComponent,
    ProductListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
