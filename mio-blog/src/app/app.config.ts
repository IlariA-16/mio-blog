import { ApplicationConfig, provideBrowserGlobalErrorListeners, importProvidersFrom } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router'; // Aggiunto conHashLocation
import { routes } from './app.routes';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader, TRANSLATE_HTTP_LOADER_CONFIG } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
  return new (TranslateHttpLoader as any)(http);
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withHashLocation()), // Abilitato l'Hash Location Strategy per far funzionare le rotte online
    provideHttpClient(withFetch()), 
    
    {
      provide: TRANSLATE_HTTP_LOADER_CONFIG,
      useValue: {
        prefix: './i18n/', // Modificato in './i18n/' con il punto per caricare le traduzioni su GitHub Pages
        suffix: '.json'
      }
    },

    importProvidersFrom(
      TranslateModule.forRoot({
        fallbackLang: 'it', 
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
      })
    )
  ]
};
