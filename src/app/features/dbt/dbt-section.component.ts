import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, CheckCircle2, Scale, Heart, ArrowRightLeft } from 'lucide-angular';
import { BlobComponent } from '../../shared/components/blob/blob.component';

@Component({
    selector: 'app-dbt-section',
    standalone: true,
    imports: [CommonModule, LucideAngularModule, BlobComponent],
    templateUrl: './dbt-section.component.html'
})
export class DbtSectionComponent {
    readonly icons = { CheckCircle2, Scale, Heart, ArrowRightLeft };

    skills = [
        { title: "Mindfulness", desc: "Estar presente no momento.", color: "bg-spring-leaf" },
        { title: "Regulação Emocional", desc: "Entender e mudar emoções.", color: "bg-spring-iris" },
        { title: "Tolerância ao Mal-estar", desc: "Sobreviver a crises sem piorar.", color: "bg-spring-tulip" },
        { title: "Efetividade Interpessoal", desc: "Pedir o que quer e dizer não.", color: "bg-spring-poppy" }
    ];

    indications = [
        "Pessoas com emoções intensas e desreguladas",
        "Dificuldade em manter relacionamentos",
        "Impulsividade e comportamentos de risco",
        "Transtorno de Personalidade Borderline",
        "Depressão ou Ansiedade resistentes",
        "Quem busca autoconhecimento profundo"
    ];
}
