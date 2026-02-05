import { Routes } from '@angular/router';
import { HeroComponent } from './features/home/hero.component';
import { AboutComponent } from './features/about/about.component';
import { ServicesComponent } from './features/services/services.component';
import { DbtSectionComponent } from './features/dbt/dbt-section.component';
import { ContactComponent } from './features/contact/contact.component';
import { BusinessCardComponent } from './features/business-card/business-card.component';

export const routes: Routes = [
    { path: '', component: HeroComponent, title: 'Início - Psicóloga Nicole Mamede' },
    { path: 'sobre', component: AboutComponent, title: 'Sobre Mim' },
    { path: 'atuacao', component: ServicesComponent, title: 'Atuação' },
    { path: 'dbt', component: DbtSectionComponent, title: 'O que é DBT?' },
    { path: 'contato', component: ContactComponent, title: 'Contato' },
    { path: 'cartao-visita', component: BusinessCardComponent, title: 'Cartão de Visita' },
    { path: '**', redirectTo: '' }
];
