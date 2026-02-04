import { LucideIcon } from 'lucide-react';

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
  icon: LucideIcon;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactInfo {
  whatsapp: string; // Formatting for display
  whatsappLink: string; // Formatting for href
  email: string;
  crp: string;
  location: string;
}
