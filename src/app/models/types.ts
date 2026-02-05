export enum Page {
    HOME = 'HOME',
    ABOUT = 'ABOUT',
    SERVICES = 'SERVICES',
    DBT = 'DBT',
    CONTACT = 'CONTACT',
    BUSINESS_CARD = 'BUSINESS_CARD',
}

export interface NavItem {
    id: Page;
    label: string;
}

export interface ServiceItem {
    title: string;
    description: string;
    icon: any; // Using any for lucide-angular icon objects/components for flexibility
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface ContactInfo {
    whatsapp: string;
    whatsappLink: string;
    email: string;
    crp: string;
    location: string;
}
