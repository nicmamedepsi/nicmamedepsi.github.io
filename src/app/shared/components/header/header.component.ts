import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LucideAngularModule, Menu, X, Flower2, MessageCircle } from 'lucide-angular';
import { NavItem, Page } from '../../../models/types'; // Adjust path
import { PROFESSIONAL_NAME } from '../../../core/constants';

@Component({
    selector: 'app-header',
    imports: [CommonModule, RouterLink, RouterLinkActive, LucideAngularModule],
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

    // Using Lucide Icons - make them available to template
    readonly icons = { Menu, X, Flower2, MessageCircle };

    navItems: (NavItem & { path: string })[] = [
        { id: Page.HOME, label: 'Início', path: '/' },
        { id: Page.ABOUT, label: 'Sobre Mim', path: '/sobre' },
        { id: Page.SERVICES, label: 'Atuação', path: '/atuacao' },
        { id: Page.DBT, label: 'O que é DBT?', path: '/dbt' },
        { id: Page.ACT, label: 'O que é ACT?', path: '/act' },
        { id: Page.CONTACT, label: 'Contato', path: '/contato' },
    ];

    onWindowScroll() {
        this.scrolled.set(window.scrollY > 20);
    }

    toggleMenu() {
        this.isMenuOpen.update(v => !v);
    }

    closeMenu() {
        this.isMenuOpen.set(false);
    }
}
