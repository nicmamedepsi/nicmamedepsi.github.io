import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, MessageCircle, Mail, MapPin, Instagram } from 'lucide-angular';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { FaqComponent } from '../faq/faq.component';
import { CONTACT_INFO, CONTACT_TEXT, SOCIAL_LINKS } from '../../core/constants';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, LucideAngularModule, ButtonComponent, FaqComponent],
    templateUrl: './contact.component.html'
})
export class ContactComponent {
    CONTACT_INFO = CONTACT_INFO;
    CONTACT_TEXT = CONTACT_TEXT;
    SOCIAL_LINKS = SOCIAL_LINKS;

    readonly icons = { MessageCircle, Mail, MapPin, Instagram };
}
