import { describe, it, expect, beforeEach, vi } from 'vitest';
import { HeroComponent } from './hero.component';
import { HERO_TEXT } from '../../core/constants';

describe('HeroComponent', () => {
    let component: HeroComponent;
    let mockRouter: any;

    beforeEach(() => {
        mockRouter = {
            url: '/',
            navigate: vi.fn()
        };
        component = new HeroComponent(mockRouter as any);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have HERO_TEXT defined', () => {
        expect(component.HERO_TEXT).toBeDefined();
        expect(component.HERO_TEXT).toEqual(HERO_TEXT);
    });

    it('should have approaches defined', () => {
        expect(component.approaches).toBeDefined();
        expect(component.approaches.length).toBeGreaterThan(0);
    });

    it('scrollToSection should navigate if not on home page', () => {
        mockRouter.url = '/cartao-visita';
        component.scrollToSection('sobre');
        expect(mockRouter.navigate).toHaveBeenCalledWith(['/'], { fragment: 'sobre' });
    });

    it('should have icons defined', () => {
        expect(component.icons).toBeDefined();
        expect(component.icons.ArrowRight).toBeDefined();
        expect(component.icons.Sparkles).toBeDefined();
    });
});
