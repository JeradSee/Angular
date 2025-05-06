import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';
import { provideInitialTheme } from '@skyux/theme';
import { AgGridDataComponent } from './list-modal/list.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ExampleHelpService } from './help.service';
import { SkyHelpService } from '@skyux/core';

function provideExampleHelpService(): EnvironmentProviders {
  return makeEnvironmentProviders([
    { provide: SkyHelpService, useClass: ExampleHelpService },
  ]);
}

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  bootstrapApplication(AgGridDataComponent, {
    providers: [
      provideAnimations(),
      provideInitialTheme('modern'),
      provideHttpClient(),
    ],
  }).catch((err) => console.error(err));