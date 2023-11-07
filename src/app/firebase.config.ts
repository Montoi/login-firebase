import { EnvironmentProviders, importProvidersFrom } from "@angular/core";
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { enviroment } from 'src/enviroments/enviroment';
const firebaseProviders: EnvironmentProviders = importProvidersFrom([
    provideFirebaseApp(() => initializeApp(enviroment.firebase)),
    provideAuth(() => getAuth()),
    
])

export {firebaseProviders}