import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { ImagesService } from './app/images.service';
  
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule),
    ImagesService,
    provideRouter([])  // เพิ่ม routing หากมี
  ]
}).catch(err => console.error(err));
  