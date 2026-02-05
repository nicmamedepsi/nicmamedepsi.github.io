import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, ArrowRight, Sparkles } from 'lucide-angular';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { BlobComponent } from '../../shared/components/blob/blob.component';
import { HERO_TEXT } from '../../core/constants';
import { Page } from '../../models/types';

@Component({
    selector: 'app-hero',
    imports: [CommonModule, NgOptimizedImage, RouterLink, LucideAngularModule, ButtonComponent, BlobComponent],
    templateUrl: './hero.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroComponent {
    HERO_TEXT = HERO_TEXT;
    Page = Page;

    readonly icons = { ArrowRight, Sparkles };

    approaches = [
        {
            acro: "DBT",
            title: "Terapia Comportamental Dialética",
            desc: "Foco em regulação emocional, mindfulness e viver uma vida que valha a pena."
        },
        {
            acro: "AC",
            title: "Análise do Comportamento",
            desc: "Compreensão profunda de como o ambiente influencia nossas ações e sentimentos."
        },
        {
            acro: "FAP",
            title: "Psicoterapia Analítica Funcional",
            desc: "Uso da relação terapêutica intensa para moldar novos comportamentos."
        }
    ];
}
