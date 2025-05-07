import { provideHttpClient } from '@angular/common/http';
import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';
import { ExampleHelpService } from './help.service';
import { SkyHelpService } from '@skyux/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

function provideExampleHelpService(): EnvironmentProviders {
  return makeEnvironmentProviders([
    { provide: SkyHelpService, useClass: ExampleHelpService },
  ]);
}

platformBrowserDynamic()
.bootstrapModule(AppModule)
.catch(err => console.error(err));