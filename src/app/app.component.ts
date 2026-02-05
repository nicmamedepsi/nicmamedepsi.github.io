import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, FooterComponent, CommonModule],
    template: `
    @if (!isBusinessCardRoute()) {
        <app-header></app-header>
    }
    
    <main id="main-content">
        <router-outlet></router-outlet>
    </main>

    @if (!isBusinessCardRoute()) {
        <app-footer></app-footer>
    }
  `
})
export class AppComponent {
    title = 'site-psicologa-nicole';

    constructor(private router: Router) { }

    // Helper to hide header/footer on business card page logic if we want specific layout. 
    // Alternately we can use a separate layout component, but this is simple for small apps.
    isBusinessCardRoute(): boolean {
        // Simple check, or could be better managed via route data.
        return this.router.url.includes('cartao-visita');
    }
}
