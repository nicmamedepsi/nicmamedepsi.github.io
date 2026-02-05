import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Wifi, ArrowRight } from 'lucide-angular';
import { BlobComponent } from '../../shared/components/blob/blob.component';
import { SERVICES, ONLINE_THERAPY_TEXT } from '../../core/constants';

@Component({
    selector: 'app-services',
    standalone: true,
    imports: [CommonModule, RouterLink, LucideAngularModule, BlobComponent],
    templateUrl: './services.component.html'
})
export class ServicesComponent {
    SERVICES = SERVICES;
    ONLINE_THERAPY_TEXT = ONLINE_THERAPY_TEXT;

    readonly icons = { Wifi, ArrowRight };

    // Theme map for services loop
    themeClasses = [
        { bg: 'bg-spring-leaf/10', text: 'text-spring-leaf', border: 'border-spring-leaf/20 hover:border-spring-leaf', arrowText: 'text-spring-leaf' },
        { bg: 'bg-spring-tulip/10', text: 'text-spring-tulip', border: 'border-spring-tulip/20 hover:border-spring-tulip', arrowText: 'text-spring-tulip' },
        { bg: 'bg-spring-iris/10', text: 'text-spring-iris', border: 'border-spring-iris/20 hover:border-spring-iris', arrowText: 'text-spring-iris' },
        { bg: 'bg-spring-sun/10', text: 'text-yellow-700', border: 'border-spring-sun/20 hover:border-spring-sun', arrowText: 'text-yellow-700' }
    ];

    getTheme(index: number) {
        return this.themeClasses[index % this.themeClasses.length];
    }
}
