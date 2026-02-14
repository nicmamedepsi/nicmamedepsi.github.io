import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Menu, X, Flower2, MessageCircle } from 'lucide-angular';
import { NavItem, Page } from '../../../models/types'; // Adjust path
import { PROFESSIONAL_NAME } from '../../../core/constants';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    imports: [CommonModule, RouterLink, LucideAngularModule],
    templateUrl: './header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '(window:scroll)': 'onWindowScroll()'
    }
})
export class HeaderComponent {
    professionalName = PROFESSIONAL_NAME;
    isMenuOpen = signal(false);
    scrolled = signal(false);
    activeSection = signal<string>('inicio');

    // Using Lucide Icons - make them available to template
    readonly icons = { Menu, X, Flower2, MessageCircle };

    navItems: (NavItem & { fragment: string })[] = [
        { id: Page.HOME, label: 'Início', fragment: 'inicio' },
        { id: Page.ABOUT, label: 'Sobre Mim', fragment: 'sobre' },
        { id: Page.SERVICES, label: 'Atuação', fragment: 'atuacao' },
        { id: Page.DBT, label: 'O que é DBT?', fragment: 'dbt' },
        { id: Page.ACT, label: 'O que é ACT?', fragment: 'act' },
        { id: Page.CONTACT, label: 'Contato', fragment: 'contato' },
    ];

    private observer?: IntersectionObserver;

    constructor(private router: Router) {
        // Set up IntersectionObserver after component initialization
        if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
            setTimeout(() => this.setupSectionObserver(), 100);
        }
    }

    private setupSectionObserver() {
        if (!window.IntersectionObserver) return;

        const options = {
            root: null,
            rootMargin: '-100px 0px -66%',
            threshold: 0
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.activeSection.set(entry.target.id);
                }
            });
        }, options);

        // Observe all sections
        this.navItems.forEach(item => {
            const section = document.getElementById(item.fragment);
            if (section) {
                this.observer?.observe(section);
            }
        });
    }

    onWindowScroll() {
        this.scrolled.set(window.scrollY > 20);
    }

    toggleMenu() {
        this.isMenuOpen.update(v => !v);
    }

    closeMenu() {
        this.isMenuOpen.set(false);
    }

    scrollToSection(fragment: string) {
        this.closeMenu();

        if (this.router.url !== '/' && !this.router.url.startsWith('/#')) {
            this.router.navigate(['/'], { fragment });
            return;
        }

        const element = document.getElementById(fragment);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    ngOnDestroy() {
        this.observer?.disconnect();
    }
}
