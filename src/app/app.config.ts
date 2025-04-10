import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAnalytics, provideAnalytics, ScreenTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"ring-of-fire-57bb1","appId":"1:1012343130028:web:ecbb0cd30aa71b87ba1c09","storageBucket":"ring-of-fire-57bb1.firebasestorage.app","apiKey":"AIzaSyD48W93ZXXGOF5XmEhpQoThnML-i7CjURY","authDomain":"ring-of-fire-57bb1.firebaseapp.com","messagingSenderId":"1012343130028","measurementId":"G-D7HYGHQ1VL"})), provideAnalytics(() => getAnalytics()), ScreenTrackingService, provideFirestore(() => getFirestore())]
};
