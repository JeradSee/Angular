import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrapApplication } from '@angular/platform-browser';
//import { AppModule } from './app/app.module';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideAnimations } from '@angular/platform-browser/animations';

console.log ('bootstrapping app module');

/*
bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
*/

bootstrapApplication(AppComponent, {
  providers: [provideAnimations()]
}).catch(err => console.error(err));
