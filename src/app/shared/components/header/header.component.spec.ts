import { describe, it, expect, vi, beforeEach } from 'vitest';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let mockRouter: any;

    beforeEach(() => {
        mockRouter = {
            url: '/',
            navigate: vi.fn()
        };

        // Mock IntersectionObserver
        const mockIntersectionObserver = vi.fn();
        mockIntersectionObserver.prototype.observe = vi.fn();
        mockIntersectionObserver.prototype.disconnect = vi.fn();
        mockIntersectionObserver.prototype.unobserve = vi.fn();
        vi.stubGlobal('IntersectionObserver', mockIntersectionObserver);

        component = new HeaderComponent(mockRouter);
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

    it('should have navItems with correct structure', () => {
        expect(component.navItems).toBeDefined();
        expect(Array.isArray(component.navItems)).toBe(true);
        expect(component.navItems.length).toBeGreaterThan(0);

        component.navItems.forEach(item => {
            expect(item).toHaveProperty('id');
            expect(item).toHaveProperty('label');
            expect(item).toHaveProperty('fragment');
        });
    });

    it('onWindowScroll should set scrolled to true when scrollY > 20', () => {
        Object.defineProperty(window, 'scrollY', { value: 50, writable: true });
        component.onWindowScroll();
        expect(component.scrolled()).toBe(true);
    });

    it('scrollToSection should navigate if not on home page', () => {
        mockRouter.url = '/cartao-visita';
        component.scrollToSection('sobre');
        expect(mockRouter.navigate).toHaveBeenCalledWith(['/'], { fragment: 'sobre' });
    });
});
