import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Flower2, CreditCard } from 'lucide-angular';
import { APP_NAME, COMPLETE_NAME, CONTACT_INFO, CRP_NUMBER } from '../../../core/constants';
import { Page } from '../../../models/types';

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule, RouterLink, LucideAngularModule],
    template: `
    <footer class="bg-brand-900 text-brand-50 py-12">
      <div class="container mx-auto px-4 md:px-6">
        <div class="grid md:grid-cols-3 gap-8 mb-8">
          
          <!-- Brand -->
          <div>
            <div class="flex items-center gap-2 mb-4 text-white">
              <lucide-icon [img]="icons.Flower2" class="w-5 h-5 text-brand-300"></lucide-icon>
              <span class="font-serif text-lg font-semibold tracking-wide">{{ APP_NAME }}</span>
            </div>
            <p class="text-sm mb-4 text-brand-100/80">
              Psicologia clínica baseada em evidências, com ética e acolhimento humano.
            </p>
          </div>

          <!-- Links -->
          <div>
            <h4 class="text-white font-semibold mb-4 font-serif">Navegação</h4>
            <ul class="space-y-2 text-sm text-brand-100/80">
              <li><a routerLink="/" class="hover:text-white transition-colors cursor-pointer">Início</a></li>
              <li><a routerLink="/sobre" class="hover:text-white transition-colors cursor-pointer">Sobre Mim</a></li>
              <li><a routerLink="/atuacao" class="hover:text-white transition-colors cursor-pointer">Serviços</a></li>
              <li><a routerLink="/contato" class="hover:text-white transition-colors cursor-pointer">Contato</a></li>
            </ul>
          </div>

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
            <a 
                routerLink="/cartao-visita" 
                class="flex items-center gap-1 hover:text-white transition-colors opacity-70 hover:opacity-100 cursor-pointer"
                title="Gerar Cartão de Visita"
            >
                <lucide-icon [img]="icons.CreditCard" size="12"></lucide-icon>
                <span>Cartão de Visita</span>
            </a>
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

    readonly icons = { Flower2, CreditCard };
}
