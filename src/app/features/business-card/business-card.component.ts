import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { LucideAngularModule, Phone, Mail, Instagram, ArrowLeft, Printer, Flower2 } from 'lucide-angular';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { COMPLETE_NAME, CRP_NUMBER, CONTACT_INFO } from '../../core/constants';

@Component({
    selector: 'app-business-card',
    standalone: true,
    imports: [CommonModule, LucideAngularModule, ButtonComponent],
    templateUrl: './business-card.component.html',
    styles: [`
    @media print {
        @page {
            margin: 0;
            size: auto;
        }
        :host {
             display: block;
        }
        .print-exact {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
        }
        .min-h-screen {
            min-height: auto;
            display: block;
        }
    }
  `]
})
export class BusinessCardComponent {
    COMPLETE_NAME = COMPLETE_NAME;
    CRP_NUMBER = CRP_NUMBER;
    CONTACT_INFO = CONTACT_INFO;

    readonly icons = { Phone, Mail, Instagram, ArrowLeft, Printer, Flower2 };

    qrData = CONTACT_INFO.whatsappLink;
    qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(this.qrData)}&color=064e3b&bgcolor=ffffff`;

    constructor(private location: Location) { }

    goBack() {
        this.location.back();
    }

    handlePrint() {
        window.print();
    }
}
