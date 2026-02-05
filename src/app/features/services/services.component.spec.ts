import { describe, it, expect, beforeEach } from 'vitest';
import { ServicesComponent } from './services.component';
import { SERVICES, ONLINE_THERAPY_TEXT } from '../../core/constants';

describe('ServicesComponent', () => {
    let component: ServicesComponent;

    beforeEach(() => {
        component = new ServicesComponent();
    });

    it('should have SERVICES defined', () => {
        expect(component.SERVICES).toBeDefined();
        expect(component.SERVICES).toBe(SERVICES);
    });

    it('should have ONLINE_THERAPY_TEXT defined', () => {
        expect(component.ONLINE_THERAPY_TEXT).toBeDefined();
        expect(component.ONLINE_THERAPY_TEXT).toBe(ONLINE_THERAPY_TEXT);
    });

    it('should have 4 theme classes', () => {
        expect(component.themeClasses).toHaveLength(4);
    });

    it('getTheme should return correct theme for index 0', () => {
        const theme = component.getTheme(0);
        expect(theme.bg).toBe('bg-spring-leaf/10');
        expect(theme.text).toBe('text-spring-leaf');
    });

    it('getTheme should return correct theme for index 1', () => {
        const theme = component.getTheme(1);
        expect(theme.bg).toBe('bg-spring-tulip/10');
        expect(theme.text).toBe('text-spring-tulip');
    });

    it('getTheme should cycle back to first theme for index 4', () => {
        const theme = component.getTheme(4);
        expect(theme).toEqual(component.getTheme(0));
    });

    it('getTheme should handle large indices correctly', () => {
        const theme = component.getTheme(100);
        expect(theme).toEqual(component.getTheme(0));
    });

    it('should have icons defined', () => {
        expect(component.icons.Wifi).toBeDefined();
        expect(component.icons.ArrowRight).toBeDefined();
    });

    it('each theme should have all required properties', () => {
        component.themeClasses.forEach(theme => {
            expect(theme).toHaveProperty('bg');
            expect(theme).toHaveProperty('text');
            expect(theme).toHaveProperty('border');
            expect(theme).toHaveProperty('arrowText');
        });
    });
});
