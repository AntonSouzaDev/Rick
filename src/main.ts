import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Importe o HttpClientModule

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule) // Adicione o HttpClientModule aqui
  ]
}).catch(err => console.error(err));
