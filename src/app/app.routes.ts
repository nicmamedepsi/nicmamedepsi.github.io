import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/home/home-page.component').then(m => m.HomePageComponent),
        title: 'Início - Psicóloga Nicole Mamede'
    },
    {
        path: 'sobre',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: 'atuacao',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: 'dbt',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: 'act',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: 'contato',
        redirectTo: '/',
        pathMatch: 'full'
    },
    {
        path: 'cartao-visita',
        loadComponent: () => import('./features/business-card/business-card.component').then(m => m.BusinessCardComponent),
        title: 'Cartão de Visita'
    },
    { path: '**', redirectTo: '' }
];
