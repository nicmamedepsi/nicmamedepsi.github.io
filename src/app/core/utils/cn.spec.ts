import { describe, it, expect } from 'vitest';
import { cn } from './cn';

describe('cn utility function', () => {
    it('should concatenate valid class names', () => {
        expect(cn('foo', 'bar')).toBe('foo bar');
    });

    it('should filter out undefined values', () => {
        expect(cn('foo', undefined, 'bar')).toBe('foo bar');
    });

    it('should filter out null values', () => {
        expect(cn('foo', null, 'bar')).toBe('foo bar');
    });

    it('should filter out false values', () => {
        expect(cn('foo', false, 'bar')).toBe('foo bar');
    });

    it('should filter out empty strings', () => {
        expect(cn('foo', '', 'bar')).toBe('foo bar');
    });

    it('should return empty string when no valid classes', () => {
        expect(cn(undefined, null, false, '')).toBe('');
    });

    it('should handle single class', () => {
        expect(cn('single')).toBe('single');
    });

    it('should handle conditional classes', () => {
        const isActive = true;
        const isDisabled = false;
        expect(cn('base', isActive && 'active', isDisabled && 'disabled')).toBe('base active');
    });
});
