import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ChevronDown, ChevronUp } from 'lucide-angular';
import { FAQS } from '../../core/constants';

@Component({
    selector: 'app-faq',
    standalone: true,
    imports: [CommonModule, LucideAngularModule],
    templateUrl: './faq.component.html'
})
export class FaqComponent {
    FAQS = FAQS;
    openIndex = signal<number | null>(0);

    readonly icons = { ChevronDown, ChevronUp };

    toggleFAQ(index: number) {
        this.openIndex.update(current => current === index ? null : index);
    }
}
