import { Injectable } from '@angular/core';
import { CONTACT_INFO, COMPLETE_NAME, CRP_NUMBER } from '../constants';
import { Flower2, Phone, Mail, Instagram, LucideIconData } from 'lucide-angular';


@Injectable({
    providedIn: 'root'
})
export class PdfService {

    constructor() { }

    async generateBusinessCard() {
        try {
            console.log('Carregando bibliotecas de PDF sob demanda...');

            // Lazy load heavy dependencies
            const [
                { jsPDF },
                QRCode,
                // svg2pdf.js auto-registers itself to jsPDF when imported, so we just need to import the side-effect
                _svg2pdf
            ] = await Promise.all([
                import('jspdf'),
                import('qrcode'),
                import('svg2pdf.js')
            ]);

            console.log('Bibliotecas carregadas.');

            // 90mm x 50mm landscape
            const doc = new jsPDF({
                orientation: 'landscape',
                unit: 'mm',
                format: [90, 50]
            });

            // Load fonts
            console.log('Carregando fontes...');
            await this.loadFonts(doc);
            console.log('Fontes carregadas.');

            // --- FRONT SIDE ---
            await this.drawFrontSide(doc, QRCode);

            // --- BACK SIDE ---
            doc.addPage();
            await this.drawBackSide(doc, QRCode);

            doc.save('cartao-visitas-nicole-mamede.pdf');
        } catch (error) {
            console.error('Erro ao gerar PDF:', error);
            alert('Erro ao gerar PDF. Verifique o console para mais detalhes.');
        }
    }

    private async loadFonts(doc: any) {
        // Playfair Display matches "font-serif" in tailwind.config
        const playfair = await this.fetchFont('/assets/fonts/PlayfairDisplay-Bold.ttf');
        doc.addFileToVFS('PlayfairDisplay-Bold.ttf', playfair);
        doc.addFont('PlayfairDisplay-Bold.ttf', 'PlayfairDisplay', 'bold');

        // Inter matches "font-sans" in tailwind.config
        // Using Variable font file, registering as normal/bold by reusing same file (simplified approach for variable fonts in jsPDF)
        // Or better, simple loading.
        const inter = await this.fetchFont('/assets/fonts/Inter-Variable.ttf');
        doc.addFileToVFS('Inter-Bold.ttf', inter);
        doc.addFont('Inter-Bold.ttf', 'Inter', 'bold');

        doc.addFileToVFS('Inter-Regular.ttf', inter);
        doc.addFont('Inter-Regular.ttf', 'Inter', 'normal');
    }

    private async fetchFont(url: string): Promise<string> {
        const response = await fetch(url);
        const buffer = await response.arrayBuffer();
        return this.arrayBufferToBase64(buffer);
    }

    private arrayBufferToBase64(buffer: ArrayBuffer): string {
        let binary = '';
        const bytes = new Uint8Array(buffer);
        const len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return window.btoa(binary);
    }

    private async drawFrontSide(doc: any, QRCode: any) {
        doc.setFillColor('#fefce8');
        doc.rect(0, 0, 90, 50, 'F');

        doc.setFillColor('#a7f3d0');
        doc.circle(94, -4, 25, 'F');

        doc.setFillColor('#fce7f3');
        doc.circle(-4, 54, 20, 'F');

        const centerX = 45;

        // --- FLOWER ICON ---
        const flowerSize = 6;
        const flowerX = centerX - (flowerSize / 2);
        const flowerY = 11;
        await this.drawLucideIcon(doc, Flower2, flowerX, flowerY, flowerSize, '#059669');

        // --- NAME ---
        // Replacing "times" with "PlayfairDisplay" (serif)
        doc.setFont("PlayfairDisplay", "bold");
        doc.setFontSize(13.5);
        doc.setTextColor('#064e3b'); // brand-900
        doc.text("Nicole Mamede", centerX, 23.5, { align: "center", baseline: "alphabetic" });

        // --- SUBTITLE ---
        // Replacing "helvetica" with "Inter" (sans)
        doc.setFont("Inter", "bold");
        doc.setFontSize(8);
        doc.setTextColor('#047857'); // brand-700

        // Manual centering with tracking
        const title = "PSICÓLOGA CLÍNICA";
        const charSpace = 1.0;
        const textWidth = doc.getTextWidth(title);
        const totalWidth = textWidth + ((title.length - 1) * charSpace);
        const titleX = centerX - (totalWidth / 2);

        doc.text(title, titleX, 29, { align: "left", charSpace: charSpace, baseline: "alphabetic" });

        // --- SEPARATOR ---
        const sepY = 32;
        doc.setDrawColor('#c4b5fd');
        doc.setLineWidth(0.5);
        doc.line(centerX - 4.2, sepY, centerX + 4.2, sepY);

        // --- CRP ---
        // Courier is fine for mono, or use Inter if preferred for readability (HTML uses font-mono).
        // Let's stick to Courier as it is standard mono, or use a specific Mono font if user insists on 100% exact.
        // Tailwind default mono is usually similar to Courier/Consolas.
        doc.setFont("courier", "normal");
        doc.setFontSize(7.5);
        doc.setTextColor('#78716c'); // stone-500
        doc.text(`CRP ${CRP_NUMBER}`, centerX, 36, { align: "center", baseline: "alphabetic" });
    }

    private async drawBackSide(doc: any, QRCode: any) {
        doc.setFillColor('#064e3b'); // brand-900
        doc.rect(0, 0, 90, 50, 'F');

        doc.setTextColor('#ecfdf5'); // brand-50
        // Custom Font: Inter
        doc.setFont("Inter", "normal");
        doc.setFontSize(7);

        const startX = 14;
        const textX = startX + 6;
        let y = 18;
        const iconSize = 2.8;
        const iconColor = '#6ee7b7'; // brand-300
        const contentLeftX = 15;

        const drawItem = async (icon: LucideIconData, text: string) => {
            await this.drawLucideIcon(doc, icon, contentLeftX, y - 2.2, iconSize, iconColor);
            doc.text(text, textX, y, { baseline: "alphabetic" });
            y += 5.5;
        };

        // --- Items ---
        await drawItem(Phone, CONTACT_INFO.whatsapp);
        await drawItem(Instagram, "@nicmamede");
        await drawItem(Mail, CONTACT_INFO.email);

        y += 1;

        // --- Subtext ---
        doc.setTextColor('#a7f3d0'); // brand-200
        doc.setFontSize(6);
        doc.text("Atendimento Online", contentLeftX, y + 3);
        doc.text("Análise do Comportamento e DBT", contentLeftX, y + 6);

        // --- QR Code ---
        const qrBoxSize = 19;
        const qrBoxX = 64.5;
        const qrBoxY = 15.5;

        // White box
        doc.setFillColor('#ffffff');
        doc.roundedRect(qrBoxX, qrBoxY, qrBoxSize, qrBoxSize + 4, 1, 1, 'F');

        // QR Image
        const qrImgSize = 17;
        const qrImgX = qrBoxX + 1;
        const qrImgY = qrBoxY + 1;

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
            doc.addImage(qrDataUrl, 'PNG', qrImgX, qrImgY, qrImgSize, qrImgSize);

            // Label
            doc.setTextColor('#064e3b');
            // Inter Bold for label
            doc.setFont("Inter", "bold");
            doc.setFontSize(5);
            doc.text("AGENDAR", qrBoxX + (qrBoxSize / 2), qrBoxY + qrBoxSize + 2.5, { align: 'center', baseline: 'alphabetic' });

        } catch (err) {
            console.error('QR Error', err);
        }
    }

    /**
     * Helper to draw Lucide Icons using svg2pdf
     */
    private async drawLucideIcon(doc: any, iconData: LucideIconData, x: number, y: number, size: number, color: string) {
        if (!iconData) return;

        const svgInfo = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svgInfo.setAttribute('width', '24');
        svgInfo.setAttribute('height', '24');
        svgInfo.setAttribute('viewBox', '0 0 24 24');

        svgInfo.setAttribute('fill', 'none');
        svgInfo.setAttribute('stroke', color);
        svgInfo.setAttribute('stroke-width', '2');
        svgInfo.setAttribute('stroke-linecap', 'round');
        svgInfo.setAttribute('stroke-linejoin', 'round');

        iconData.forEach(([tag, attrs]) => {
            const child = document.createElementNS('http://www.w3.org/2000/svg', tag);
            Object.entries(attrs).forEach(([k, v]) => {
                child.setAttribute(k, String(v));
            });
            svgInfo.appendChild(child);
        });

        await doc.svg(svgInfo, {
            x,
            y,
            width: size,
            height: size
        });
    }
}
