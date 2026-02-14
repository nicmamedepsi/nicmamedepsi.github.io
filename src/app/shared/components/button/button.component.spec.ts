import { describe, it, expect, beforeEach } from 'vitest';
import { ButtonComponent } from './button.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ButtonComponent', () => {
    let component: ButtonComponent;
    let fixture: ComponentFixture<ButtonComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ButtonComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(ButtonComponent);
        component = fixture.componentInstance;
    });

    it('should have primary as default variant', () => {
        expect(component.variant()).toBe('primary');
    });

    it('should have md as default size', () => {
        expect(component.size()).toBe('md');
    });

    it('should have false as default fullWidth', () => {
        expect(component.fullWidth()).toBe(false);
    });

    it('should apply primary variant classes by default', () => {
        fixture.detectChanges();
        const classes = fixture.nativeElement.className;
        expect(classes).toContain('bg-spring-iris');
        expect(classes).toContain('text-white');
    });

    it('should apply md size classes by default', () => {
        fixture.detectChanges();
        const classes = fixture.nativeElement.className;
        expect(classes).toContain('min-h-[2.75rem]');
        expect(classes).toContain('py-2');
        expect(classes).toContain('px-6');
        expect(classes).toContain('text-base');
    });

    it('should not include w-full by default', () => {
        fixture.detectChanges();
        expect(fixture.nativeElement.className).not.toContain('w-full');
    });

    it('should have static class inline-flex', () => {
        fixture.detectChanges();
        expect(fixture.nativeElement.className).toContain('inline-flex');
    });

    it('should have static class items-center', () => {
        fixture.detectChanges();
        expect(fixture.nativeElement.className).toContain('items-center');
    });

    it('should have static class justify-center', () => {
        fixture.detectChanges();
        expect(fixture.nativeElement.className).toContain('justify-center');
    });

    it('should have static class rounded-full', () => {
        fixture.detectChanges();
        expect(fixture.nativeElement.className).toContain('rounded-full');
    });

    it('should have static class font-medium', () => {
        fixture.detectChanges();
        expect(fixture.nativeElement.className).toContain('font-medium');
    });

    it('should have static class cursor-pointer', () => {
        fixture.detectChanges();
        expect(fixture.nativeElement.className).toContain('cursor-pointer');
    });
});
