import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ImagesService } from './images.service';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule ,HttpClientModule,  FormsModule),
    ImagesService,
    provideRouter([])  // เพิ่ม routing หากมี
  ]
}).catch(err => console.error(err));
