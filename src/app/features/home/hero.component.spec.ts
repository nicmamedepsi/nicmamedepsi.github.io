import { describe, it, expect, beforeEach } from 'vitest';
import { HeroComponent } from './hero.component';
import { HERO_TEXT } from '../../core/constants';

describe('HeroComponent', () => {
    let component: HeroComponent;

    beforeEach(() => {
        component = new HeroComponent();
    });

    it('should have HERO_TEXT defined', () => {
        expect(component.HERO_TEXT).toBeDefined();
        expect(component.HERO_TEXT).toBe(HERO_TEXT);
    });

    it('should have correct title text', () => {
        expect(component.HERO_TEXT.title).toBe('Cuidar da mente é cultivar a vida');
    });

    it('should have approaches array with 3 items', () => {
        expect(component.approaches).toHaveLength(3);
    });

    it('should have DBT as first approach', () => {
        expect(component.approaches[0].acro).toBe('DBT');
        expect(component.approaches[0].title).toBe('Terapia Comportamental Dialética');
    });

    it('should have AC as second approach', () => {
        expect(component.approaches[1].acro).toBe('AC');
        expect(component.approaches[1].title).toBe('Análise do Comportamento');
    });

    it('should have FAP as third approach', () => {
        expect(component.approaches[2].acro).toBe('FAP');
        expect(component.approaches[2].title).toBe('Psicoterapia Analítica Funcional');
    });

    it('should have icons defined', () => {
        expect(component.icons.ArrowRight).toBeDefined();
        expect(component.icons.Sparkles).toBeDefined();
    });
});
