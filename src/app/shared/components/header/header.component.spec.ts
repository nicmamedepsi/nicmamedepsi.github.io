import { describe, it, expect, vi, beforeEach } from 'vitest';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
    let component: HeaderComponent;

    beforeEach(() => {
        component = new HeaderComponent();
    });

    it('should have professionalName defined', () => {
        expect(component.professionalName).toBeDefined();
        expect(typeof component.professionalName).toBe('string');
    });

    it('should initialize isMenuOpen as false', () => {
        expect(component.isMenuOpen()).toBe(false);
    });

    it('should initialize scrolled as false', () => {
        expect(component.scrolled()).toBe(false);
    });

    it('toggleMenu should toggle isMenuOpen state', () => {
        expect(component.isMenuOpen()).toBe(false);
        component.toggleMenu();
        expect(component.isMenuOpen()).toBe(true);
        component.toggleMenu();
        expect(component.isMenuOpen()).toBe(false);
    });

    it('closeMenu should set isMenuOpen to false', () => {
        component.toggleMenu(); // Open menu
        expect(component.isMenuOpen()).toBe(true);
        component.closeMenu();
        expect(component.isMenuOpen()).toBe(false);
    });

    it('closeMenu should keep isMenuOpen false if already closed', () => {
        expect(component.isMenuOpen()).toBe(false);
        component.closeMenu();
        expect(component.isMenuOpen()).toBe(false);
    });

    it('should have navItems with correct structure', () => {
        expect(component.navItems).toBeDefined();
        expect(Array.isArray(component.navItems)).toBe(true);
        expect(component.navItems.length).toBeGreaterThan(0);

        component.navItems.forEach(item => {
            expect(item).toHaveProperty('id');
            expect(item).toHaveProperty('label');
            expect(item).toHaveProperty('path');
        });
    });

    it('should have icons defined', () => {
        expect(component.icons).toBeDefined();
        expect(component.icons.Menu).toBeDefined();
        expect(component.icons.X).toBeDefined();
        expect(component.icons.Flower2).toBeDefined();
        expect(component.icons.MessageCircle).toBeDefined();
    });

    it('onWindowScroll should set scrolled to true when scrollY > 20', () => {
        Object.defineProperty(window, 'scrollY', { value: 50, writable: true });
        component.onWindowScroll();
        expect(component.scrolled()).toBe(true);
    });

    it('onWindowScroll should set scrolled to false when scrollY <= 20', () => {
        Object.defineProperty(window, 'scrollY', { value: 10, writable: true });
        component.onWindowScroll();
        expect(component.scrolled()).toBe(false);
    });
});
