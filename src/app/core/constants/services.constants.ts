import { ServiceItem } from '../../models/types';
import { HeartHandshake, Users, Monitor, Sparkles } from 'lucide-angular';

// --- SERVICES ---

export const SERVICES: ServiceItem[] = [
    {
        title: "Psicoterapia Individual",
        description: "Para adultos e adolescentes (a partir de 15 anos). Um espaço para autoconhecimento, resolução de conflitos e tratamento de comorbidades como ansiedade e depressão.",
        icon: Users,
    },
    {
        title: "Psicoterapia de Casal",
        description: "Alternativas para abordar dificuldades da relação, fortalecer o vínculo, reconstruir a confiança ou auxiliar em encerramentos cuidadosos.",
        icon: HeartHandshake,
    },
    {
        title: "Terapias Contextuais",
        description: "Atuação integrada com Análise do Comportamento, ACT, DBT e FAP. Foco em compreender seu contexto para gerar mudanças consistentes.",
        icon: Sparkles,
    },
    {
        title: "Atendimento Online",
        description: "Sessões por videoconferência com total sigilo e segurança, no conforto do seu ambiente.",
        icon: Monitor,
    },
];
