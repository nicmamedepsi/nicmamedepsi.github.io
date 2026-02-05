import { describe, it, expect, beforeEach } from 'vitest';
import { BlobComponent } from './blob.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('BlobComponent', () => {
    let component: BlobComponent;
    let fixture: ComponentFixture<BlobComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BlobComponent]
        }).compileComponents();

        fixture = TestBed.createComponent(BlobComponent);
        component = fixture.componentInstance;
    });

    it('should have brand as default color', () => {
        expect(component.color()).toBe('brand');
    });

    it('should have default as default variant', () => {
        expect(component.variant()).toBe('default');
    });

    it('should have 0s as default delay', () => {
        expect(component.delay()).toBe('0s');
    });

    it('should apply brand color and default animation classes by default', () => {
        fixture.detectChanges();
        expect(fixture.nativeElement.className).toContain('bg-brand-300/30');
        expect(fixture.nativeElement.className).toContain('animate-morph');
    });

    it('should have static class absolute', () => {
        fixture.detectChanges();
        expect(fixture.nativeElement.className).toContain('absolute');
    });

    it('should have static class rounded-full', () => {
        fixture.detectChanges();
        expect(fixture.nativeElement.className).toContain('rounded-full');
    });

    it('should have static class mix-blend-multiply', () => {
        fixture.detectChanges();
        expect(fixture.nativeElement.className).toContain('mix-blend-multiply');
    });

    it('should have static class blur-[80px]', () => {
        fixture.detectChanges();
        expect(fixture.nativeElement.className).toContain('blur-[80px]');
    });

    it('should have static class opacity-70', () => {
        fixture.detectChanges();
        expect(fixture.nativeElement.className).toContain('opacity-70');
    });
});
