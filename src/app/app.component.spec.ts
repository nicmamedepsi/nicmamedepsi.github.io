import { describe, it, expect, vi } from 'vitest';
import { AppComponent } from './app.component';
import { Router } from '@angular/router';

describe('AppComponent', () => {
    it('should have the correct title', () => {
        const mockRouter = { url: '/' } as Router;
        const component = new AppComponent(mockRouter);
        expect(component.title).toBe('site-psicologa-nicole');
    });

    it('isBusinessCardRoute should return false for home route', () => {
        const mockRouter = { url: '/' } as Router;
        const component = new AppComponent(mockRouter);
        expect(component.isBusinessCardRoute()).toBe(false);
    });

    it('isBusinessCardRoute should return true for cartao-visita route', () => {
        const mockRouter = { url: '/cartao-visita' } as Router;
        const component = new AppComponent(mockRouter);
        expect(component.isBusinessCardRoute()).toBe(true);
    });

    it('isBusinessCardRoute should return false for other routes', () => {
        const mockRouter = { url: '/sobre' } as Router;
        const component = new AppComponent(mockRouter);
        expect(component.isBusinessCardRoute()).toBe(false);
    });
});
