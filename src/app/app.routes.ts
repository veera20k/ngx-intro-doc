import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'introduction',
        pathMatch: 'full'
    },
    {
        path: 'introduction',
        loadComponent: () => import('./pages/introduction/introduction.component')
    },
    {
        path: 'installation',
        loadComponent: () => import('./pages/installation/installation.component')
    },
    {
        path: 'configuration',
        loadComponent: () => import('./pages/configuration/configuration.component')
    },
    {
        path: 'demo',
        loadComponent: () => import('./pages/demo/demo.component')
    },
];
