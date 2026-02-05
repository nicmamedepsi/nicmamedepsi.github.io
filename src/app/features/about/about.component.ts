import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Quote, GraduationCap, BookOpen, Heart, Award } from 'lucide-angular';
import { BlobComponent } from '../../shared/components/blob/blob.component';
import { HighlightComponent } from '../../shared/components/highlight/highlight.component';
import { PROFESSIONAL_NAME, CRP_NUMBER, QUOTE_TEXT } from '../../core/constants';

@Component({
    selector: 'app-about',
    imports: [CommonModule, LucideAngularModule, BlobComponent, HighlightComponent],
    templateUrl: './about.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
    PROFESSIONAL_NAME = PROFESSIONAL_NAME;
    CRP_NUMBER = CRP_NUMBER;
    QUOTE_TEXT = QUOTE_TEXT;

    readonly icons = { Quote, GraduationCap, BookOpen, Heart, Award };
}
