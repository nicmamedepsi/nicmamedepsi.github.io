import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf';
import * as QRCode from 'qrcode';
import { CONTACT_INFO, COMPLETE_NAME, CRP_NUMBER } from '../constants';
import { Flower2, Phone, Mail, Instagram, icons, LucideIconData } from 'lucide-angular';
import 'svg2pdf.js';

@Injectable({
    providedIn: 'root'
})
export class PdfService {

    constructor() { }

    async generateBusinessCard() {
        // 90mm x 50mm landscape
        const doc = new jsPDF({
            orientation: 'landscape',
            unit: 'mm',
            format: [90, 50]
        });

        // --- FRONT SIDE ---
        await this.drawFrontSide(doc);

        // --- BACK SIDE ---
        doc.addPage();
        await this.drawBackSide(doc);

        doc.save('cartao-visitas-nicole-mamede.pdf');
    }

    private async drawFrontSide(doc: jsPDF) {
        // Background: bg-paper (#fefce8)
        doc.setFillColor('#fefce8');
        doc.rect(0, 0, 90, 50, 'F');

        // Decoration: Top Right Quarter Circle
        // bg-brand-200 (#a7f3d0)
        doc.setFillColor('#a7f3d0');
        // Quarter circle at top right
        doc.circle(94, -4, 25, 'F');

        // Decoration: Bottom Left
        // bg-spring-tulip/10 (#fce7f3)
        doc.setFillColor('#fce7f3');
        doc.circle(-4, 54, 20, 'F');

        // Content
        const centerX = 45;

        // ICON: Flower2 - Real SVG Rendering
        // Centered at 45, y=15. Size approx 8mm.
        // x = 45 - (8/2) = 41
        // y = 15 - (8/2) = 11
        await this.drawLucideIcon(doc, Flower2, 41, 11, 8, '#059669');

        // NAME
        doc.setFont("times", "bold");
        doc.setFontSize(18);
        doc.setTextColor('#064e3b'); // brand-900
        doc.text("Nicole Mamede", centerX, 25, { align: "center", baseline: "middle" });

        // SUBTITLE
        doc.setFont("helvetica", "bold");
        doc.setFontSize(8);
        doc.setTextColor('#047857'); // brand-700

        // Reduced tracking for better visual balance
        const title = "PSICÓLOGA CLÍNICA";
        const charSpace = 1.0;
        const textWidth = doc.getTextWidth(title);
        const totalWidth = textWidth + ((title.length - 1) * charSpace);
        const titleX = centerX - (totalWidth / 2);

        doc.text(title, titleX, 30, { align: "left", charSpace: charSpace, baseline: "middle" });

        // SEPARATOR
        doc.setDrawColor('#c4b5fd'); // violet-300
        doc.setLineWidth(0.5);
        doc.line(centerX - 4, 33, centerX + 4, 33);

        // CRP
        doc.setFont("courier", "normal");
        doc.setFontSize(7);
        doc.setTextColor('#78716c'); // stone-500
        doc.text(`CRP ${CRP_NUMBER}`, centerX, 37, { align: "center", baseline: "middle" });
    }

    private async drawBackSide(doc: jsPDF) {
        // Background: bg-brand-900 (#064e3b)
        doc.setFillColor('#064e3b');
        doc.rect(0, 0, 90, 50, 'F');

        // Text Color: White/Light
        doc.setTextColor('#ecfdf5'); // brand-50
        doc.setFont("helvetica", "normal");
        doc.setFontSize(8);

        const startX = 14;
        const textX = startX + 6;
        let y = 18;
        const iconSize = 3.5;
        const iconColor = '#6ee7b7'; // brand-300

        // Function wrapper for repeatable items
        const drawItem = async (icon: LucideIconData, text: string) => {
            // Center icon vertically relative to text baseline 'middle'
            await this.drawLucideIcon(doc, icon, startX, y - (iconSize / 2), iconSize, iconColor);
            doc.text(text, textX, y, { baseline: "middle" });
            y += 7;
        };

        // --- Items ---
        await drawItem(Phone, CONTACT_INFO.whatsapp);
        await drawItem(Instagram, "@nicmamede");
        await drawItem(Mail, CONTACT_INFO.email);

        y -= 2; // adjust spacing

        // Subtext
        doc.setTextColor('#a7f3d0'); // brand-200
        doc.setFontSize(6);
        doc.text("Atendimento Online", textX, y + 2);
        doc.text("Análise do Comportamento e DBT", textX, y + 5);

        // QR Code (Right side)
        const qrSize = 16;
        const qrX = 66;
        const qrY = 17;

        // White background for QR
        doc.setFillColor('#ffffff');
        doc.roundedRect(qrX - 1, qrY - 1, qrSize + 2, qrSize + 5, 1, 1, 'F');

        try {
            const qrDataUrl = await QRCode.toDataURL(CONTACT_INFO.whatsappLink, {
                errorCorrectionLevel: 'M',
                margin: 0,
                width: 150,
                color: {
                    dark: '#064e3b', // Brand-900
                    light: '#ffffff'
                }
            });

            doc.addImage(qrDataUrl, 'PNG', qrX, qrY, qrSize, qrSize);

            // Label "Agendar"
            doc.setTextColor('#064e3b'); // Brand-900
            doc.setFont("helvetica", "bold");
            doc.setFontSize(5);
            doc.text("AGENDAR", qrX + (qrSize / 2), qrY + qrSize + 2.5, { align: 'center' });

        } catch (err) {
            console.error('QR Error', err);
        }
    }

    /**
     * Helper to draw Lucide Icons using svg2pdf
     * Transforms Lucide data structure into SVG DOM and renders it
     */
    private async drawLucideIcon(doc: jsPDF, iconData: LucideIconData, x: number, y: number, size: number, color: string) {
        if (!iconData) return;

        // 1. Create a dummy SVG element in memory
        const svgInfo = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgInfo.setAttribute('width', '24');
        svgInfo.setAttribute('height', '24');
        svgInfo.setAttribute('viewBox', '0 0 24 24');

        // Apply Lucide defaults
        svgInfo.setAttribute('fill', 'none');
        svgInfo.setAttribute('stroke', color);
        svgInfo.setAttribute('stroke-width', '2');
        svgInfo.setAttribute('stroke-linecap', 'round');
        svgInfo.setAttribute('stroke-linejoin', 'round');

        // 2. Append children from iconData
        // iconData is [ ['tag', {attrs}], ... ]
        iconData.forEach(([tag, attrs]) => {
            const child = document.createElementNS('http://www.w3.org/2000/svg', tag);
            Object.entries(attrs).forEach(([k, v]) => {
                child.setAttribute(k, String(v));
            });
            svgInfo.appendChild(child);
        });

        // 3. Render to PDF using svg2pdf
        // doc.svg() is provided by svg2pdf.js
        await doc.svg(svgInfo, {
            x,
            y,
            width: size,
            height: size
        });
    }
}
