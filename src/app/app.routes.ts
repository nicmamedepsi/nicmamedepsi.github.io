import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/home/hero.component').then(m => m.HeroComponent),
        title: 'Início - Psicóloga Nicole Mamede'
    },
    {
        path: 'sobre',
        loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent),
        title: 'Sobre Mim'
    },
    {
        path: 'atuacao',
        loadComponent: () => import('./features/services/services.component').then(m => m.ServicesComponent),
        title: 'Atuação'
    },
    {
        path: 'dbt',
        loadComponent: () => import('./features/dbt/dbt-section.component').then(m => m.DbtSectionComponent),
        title: 'O que é DBT?'
    },
    {
        path: 'act',
        loadComponent: () => import('./features/act/act-section.component').then(m => m.ActSectionComponent),
        title: 'O que é ACT?'
    },
    {
        path: 'contato',
        loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent),
        title: 'Contato'
    },
    {
        path: 'cartao-visita',
        loadComponent: () => import('./features/business-card/business-card.component').then(m => m.BusinessCardComponent),
        title: 'Cartão de Visita'
    },
    { path: '**', redirectTo: '' }
];
