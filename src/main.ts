import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    ...appConfig.providers,
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'simulacro-parcial-f51f6',
        appId: '1:703212164910:web:2eb5fa66e65400d6feccbf',
        storageBucket: 'simulacro-parcial-f51f6.appspot.com',
        apiKey: 'AIzaSyBzIAXshxvMRnjDTLTMgdi0d5j0kUnSdms',
        authDomain: 'simulacro-parcial-f51f6.firebaseapp.com',
        messagingSenderId: '703212164910',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()), // Mantiene otros proveedores de appConfig si los tienes
  ],
}).catch((err) => console.error(err));
