import { Component, ChangeDetectionStrategy } from '@angular/core';
import { HeroComponent } from '../home/hero.component';
import { AboutComponent } from '../about/about.component';
import { ServicesComponent } from '../services/services.component';
import { DbtSectionComponent } from '../dbt/dbt-section.component';
import { ActSectionComponent } from '../act/act-section.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
    selector: 'app-home-page',
    standalone: true,
    imports: [
        HeroComponent,
        AboutComponent,
        ServicesComponent,
        DbtSectionComponent,
        ActSectionComponent,
        ContactComponent
    ],
    template: `
        <section id="inicio">
            <app-hero />
        </section>

        <section id="sobre">
            <app-about />
        </section>

        <section id="atuacao">
            <app-services />
        </section>

        <section id="dbt">
            <app-dbt-section />
        </section>

        <section id="act">
            <app-act-section />
        </section>

        <section id="contato">
            <app-contact />
        </section>
    `,
    styles: [`
        section[id] {
            scroll-margin-top: 80px;
        }
    `],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent { }
