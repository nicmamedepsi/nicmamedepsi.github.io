import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ChevronDown, ChevronUp } from 'lucide-angular';
import { FAQS } from '../../core/constants';

@Component({
    selector: 'app-faq',
    imports: [CommonModule, LucideAngularModule],
    templateUrl: './faq.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FaqComponent {
    FAQS = FAQS;
    openIndex = signal<number | null>(0);

    readonly icons = { ChevronDown, ChevronUp };

    toggleFAQ(index: number) {
        this.openIndex.update(current => current === index ? null : index);
    }
}
