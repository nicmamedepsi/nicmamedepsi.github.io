import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, CheckCircle2, Scale, Heart, ArrowRightLeft, Compass, Anchor } from 'lucide-angular';
import { BlobComponent } from '../../shared/components/blob/blob.component';

@Component({
    selector: 'app-act-section',
    imports: [CommonModule, LucideAngularModule, BlobComponent],
    templateUrl: './act-section.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActSectionComponent {
    readonly icons = { CheckCircle2, Scale, Heart, ArrowRightLeft, Compass, Anchor };

    skills = [
        { title: "Aceitação", desc: "Abraçar pensamentos e sentimentos sem lutar contra eles.", color: "bg-spring-sky" },
        { title: "Desfusão Cognitiva", desc: "Observar pensamentos sem ficar preso a eles.", color: "bg-spring-iris" },
        { title: "Contato com o Presente", desc: "Estar aqui e agora, com atenção plena.", color: "bg-spring-tulip" },
        { title: "Valores", desc: "Descobrir o que é realmente importante para você.", color: "bg-spring-poppy" },
        { title: "Ação Compromissada", desc: "Agir em direção aos seus valores.", color: "bg-spring-sun" },
        { title: "Eu enquanto contexto", desc: "A parte de você que observa a experiência.", color: "bg-spring-iris" }
    ];

    indications = [
        "Ansiedade e Preocupação Excessiva",
        "Depressão e Falta de Sentido",
        "Dores Crônicas",
        "Estresse e Burnout",
        "Dificuldade em Tomar Decisões",
        "Rigidez Psicológica"
    ];
}
