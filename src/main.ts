import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import player from 'lottie-web';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
//import{ LottieModule} from 'ngx-lottie';
export function playerFactory() {
  return import('lottie-web').then((mod) => mod.default || mod);
}


bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
   // LottieModule.forRoot({ player: playerFactory }),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
