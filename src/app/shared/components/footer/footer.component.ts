import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Flower2, CreditCard } from 'lucide-angular';
import { APP_NAME, COMPLETE_NAME, CONTACT_INFO, CRP_NUMBER } from '../../../core/constants';
import { Page } from '../../../models/types';
import { PdfService } from '../../../core/services/pdf.service';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterLink, LucideAngularModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="bg-brand-900 text-brand-50 py-12">
      <div class="container mx-auto px-4 md:px-6">
        <div class="grid md:grid-cols-3 gap-8 mb-8">
          
          <!-- Brand -->
          <div>
            <div class="flex items-center gap-2 mb-4 text-white">
              <lucide-icon [img]="icons.Flower2" class="w-5 h-5 text-brand-300" aria-hidden="true"></lucide-icon>
              <span class="font-serif text-lg font-semibold tracking-wide">{{ APP_NAME }}</span>
            </div>
            <p class="text-sm mb-4 text-brand-100/80">
              Psicologia clínica baseada em evidências, com ética e acolhimento humano.
            </p>
          </div>

          <!-- Links -->
          <nav aria-label="Navegação do site">
            <h4 class="text-white font-semibold mb-4 font-serif">Navegação</h4>
            <ul class="space-y-2 text-sm text-brand-100/80">
              <li><a (click)="scrollToSection('inicio')" class="hover:text-white transition-colors cursor-pointer">Início</a></li>
              <li><a (click)="scrollToSection('sobre')" class="hover:text-white transition-colors cursor-pointer">Sobre Mim</a></li>
              <li><a (click)="scrollToSection('atuacao')" class="hover:text-white transition-colors cursor-pointer">Serviços</a></li>
              <li><a (click)="scrollToSection('contato')" class="hover:text-white transition-colors cursor-pointer">Contato</a></li>
            </ul>
          </nav>

          <!-- Professional Info -->
          <div>
            <h4 class="text-white font-semibold mb-4 font-serif">Credenciais</h4>
            <ul class="space-y-2 text-sm text-brand-100/80">
              <li>{{ COMPLETE_NAME }}</li>
              <li>Psicóloga Clínica</li>
              <li>CRP: {{ CRP_NUMBER }}</li>
              <li class="pt-2 text-brand-200">{{ CONTACT_INFO.email }}</li>
            </ul>
          </div>
        </div>

        <div class="border-t border-brand-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-200/60">
          <p>&copy; {{ currentYear }} {{ COMPLETE_NAME }}. Todos os direitos reservados.</p>
          <div class="flex gap-4 mt-2 md:mt-0 items-center">
            <button 
                *ngIf="showBusinessCardDownload"
                (click)="downloadPdf()" 
                class="flex items-center gap-1 hover:text-white transition-colors opacity-70 hover:opacity-100 cursor-pointer bg-transparent border-none p-0 text-inherit"
                title="Gerar Cartão de Visita"
            >
                <lucide-icon [img]="icons.CreditCard" size="12" aria-hidden="true"></lucide-icon>
                <span>Cartão de Visita</span>
            </button>
            <p class="opacity-70">Desenvolvido com carinho.</p>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  APP_NAME = APP_NAME;
  COMPLETE_NAME = COMPLETE_NAME;
  CRP_NUMBER = CRP_NUMBER;
  CONTACT_INFO = CONTACT_INFO;
  currentYear = new Date().getFullYear();
  showBusinessCardDownload = environment.features.showBusinessCardDownload;

  readonly icons = { Flower2, CreditCard };

  constructor(private pdfService: PdfService) { }

  scrollToSection(fragment: string) {
    const element = document.getElementById(fragment);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  async downloadPdf() {
    await this.pdfService.generateBusinessCard();
  }
}
