import { ApplicationConfig, provideZoneChangeDetection,isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideStore(),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
    })
  ]
};


// Since you don't have an app.module.ts, you are using a Fully Standalone architecture. In this setup, the "wiring" happens in the app.config.ts file (or directly inside the bootstrapApplication function in main.ts).

// Since the video producer is using standalone but you were looking for the module way, here is exactly how to bridge that gap for a 100% standalone app.

// 1. The Global Setup (app.config.ts)
// Instead of StoreModule.forRoot, we use provideStore. Open your app.config.ts and set it up like this:


// import { ApplicationConfig, isDevMode } from '@angular/core';
// import { provideStore } from '@ngrx/store';
// import { provideStoreDevtools } from '@ngrx/store-devtools';

// // Import your root reducer map from your app.state.ts
// import { reducer } from './app.state'; 

// export const appConfig: ApplicationConfig = {
//   providers: [
//     // This replaces StoreModule.forRoot(reducer)
//     provideStore(reducer), 

//     // This replaces StoreDevtoolsModule.instrument(...)
//     provideStoreDevtools({
//       maxAge: 25,
//       logOnly: !isDevMode(),
//     })
//   ]
// };