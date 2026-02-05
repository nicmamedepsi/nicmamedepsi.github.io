import { describe, it, expect, beforeEach, vi } from 'vitest';
import { FooterComponent } from './footer.component';
import { PdfService } from '../../../core/services/pdf.service';

describe('FooterComponent', () => {
    let component: FooterComponent;
    let mockPdfService: { generateBusinessCard: ReturnType<typeof vi.fn> };

    beforeEach(() => {
        mockPdfService = {
            generateBusinessCard: vi.fn().mockResolvedValue(undefined)
        };
        component = new FooterComponent(mockPdfService as unknown as PdfService);
    });

    it('should have APP_NAME defined', () => {
        expect(component.APP_NAME).toBeDefined();
        expect(typeof component.APP_NAME).toBe('string');
    });

    it('should have COMPLETE_NAME defined', () => {
        expect(component.COMPLETE_NAME).toBeDefined();
        expect(typeof component.COMPLETE_NAME).toBe('string');
    });

    it('should have CRP_NUMBER defined', () => {
        expect(component.CRP_NUMBER).toBeDefined();
        expect(typeof component.CRP_NUMBER).toBe('string');
    });

    it('should have CONTACT_INFO defined with email', () => {
        expect(component.CONTACT_INFO).toBeDefined();
        expect(component.CONTACT_INFO.email).toBeDefined();
    });

    it('should have currentYear as the current year', () => {
        const expectedYear = new Date().getFullYear();
        expect(component.currentYear).toBe(expectedYear);
    });

    it('should have icons defined', () => {
        expect(component.icons).toBeDefined();
        expect(component.icons.Flower2).toBeDefined();
        expect(component.icons.CreditCard).toBeDefined();
    });

    it('should call pdfService.generateBusinessCard when downloadPdf is called', async () => {
        await component.downloadPdf();
        expect(mockPdfService.generateBusinessCard).toHaveBeenCalledTimes(1);
    });
});
