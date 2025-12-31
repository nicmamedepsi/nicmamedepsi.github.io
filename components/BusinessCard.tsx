import React from 'react';
import { COMPLETE_NAME, CRP_NUMBER, CONTACT_INFO, SOCIAL_LINKS } from '../constants';
import { Phone, Mail, Instagram, ArrowLeft, Printer, Flower2 } from 'lucide-react';
import { Button } from './Button';

interface BusinessCardProps {
  onBack: () => void;
}

export const BusinessCard: React.FC<BusinessCardProps> = ({ onBack }) => {
  
  // URL for the QR Code (pointing to WhatsApp as it converts better)
  const qrData = CONTACT_INFO.whatsappLink; 
  // Google Chart API for QR code (no dependency needed)
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrData)}&color=064e3b&bgcolor=ffffff`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-stone-100 flex flex-col items-center justify-center p-8 print:p-0 print:bg-white print:h-auto">
      
      {/* Controls - Hidden when printing */}
      <div className="mb-8 flex gap-4 print:hidden">
        <Button onClick={onBack} variant="outline" size="sm">
          <ArrowLeft className="mr-2 w-4 h-4" /> Voltar
        </Button>
        <Button onClick={handlePrint} variant="primary" size="sm">
          <Printer className="mr-2 w-4 h-4" /> Imprimir Cartão
        </Button>
      </div>

      <div className="print:hidden mb-4 text-stone-500 text-sm">
        <p>Visualização: 90mm x 50mm (Padrão BR)</p>
      </div>

      {/* Print Container - A4 Sheet simulation if needed, or just centered content */}
      <div className="flex flex-col gap-8 print:gap-4 print:flex-row print:flex-wrap print:justify-center">
        
        {/* FRONT SIDE */}
        <div className="w-[90mm] h-[50mm] bg-paper relative overflow-hidden shadow-xl print:shadow-none border border-stone-200 print:border-none flex flex-col justify-center items-center text-center p-6 print-exact">
            
            {/* Background Decorations (Static CSS shapes for print safety) */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-brand-200/40 rounded-bl-full -mr-4 -mt-4 print-color-adjust" />
            <div className="absolute bottom-0 left-0 w-20 h-20 bg-spring-tulip/10 rounded-tr-full -ml-4 -mb-4 print-color-adjust" />
            
            <div className="relative z-10">
                <div className="flex justify-center mb-2">
                    <Flower2 className="text-brand-600 w-6 h-6" />
                </div>
                <h1 className="font-serif text-brand-900 text-lg font-bold leading-tight tracking-wide">
                    Nicole Mamede
                </h1>
                <p className="text-brand-700 text-xs font-medium uppercase tracking-widest mt-1 mb-2">
                    Psicóloga Clínica
                </p>
                <div className="w-8 h-0.5 bg-spring-iris/50 mx-auto mb-2" />
                <p className="text-stone-500 text-[10px] font-mono">
                    CRP {CRP_NUMBER}
                </p>
            </div>
        </div>

        {/* BACK SIDE */}
        <div className="w-[90mm] h-[50mm] bg-brand-900 relative overflow-hidden shadow-xl print:shadow-none border border-stone-800 print:border-none flex items-center p-6 print-exact">
            
            {/* Background Texture */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] print:hidden" />
            
            <div className="relative z-10 w-full flex justify-between items-center gap-4">
                {/* Contact Info */}
                <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2 text-brand-50">
                        <Phone size={10} className="text-brand-300" />
                        <span className="text-[9px] font-medium tracking-wide">{CONTACT_INFO.whatsapp}</span>
                    </div>
                    <div className="flex items-center gap-2 text-brand-50">
                        <Instagram size={10} className="text-brand-300" />
                        <span className="text-[9px] font-medium tracking-wide">@nicmamede</span>
                    </div>
                    <div className="flex items-center gap-2 text-brand-50">
                        <Mail size={10} className="text-brand-300" />
                        <span className="text-[9px] font-medium tracking-wide break-all">nicmamede.psi@gmail.com</span>
                    </div>
                    <div className="pt-1">
                        <p className="text-[8px] text-brand-200/60 leading-tight">
                            Atendimento Online<br/>
                            Análise do Comportamento e DBT
                        </p>
                    </div>
                </div>

                {/* QR Code Area */}
                <div className="bg-white p-1 rounded-lg shadow-sm flex-shrink-0">
                    <img 
                        src={qrUrl} 
                        alt="QR Code WhatsApp" 
                        className="w-16 h-16 object-contain"
                    />
                    <p className="text-[6px] text-center text-brand-900 font-bold mt-0.5 uppercase">Agendar</p>
                </div>
            </div>
        </div>

      </div>

      <style>{`
        @media print {
            @page {
                margin: 0;
                size: auto;
            }
            body {
                background-color: white;
            }
            /* Force background colors */
            .print-exact {
                -webkit-print-color-adjust: exact !important;
                print-color-adjust: exact !important;
            }
            /* Reset absolute positions that might break flow in print */
            .min-h-screen {
                min-height: auto;
                display: block;
            }
        }
      `}</style>
    </div>
  );
};
