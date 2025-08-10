'use client'

import AuditDetailPage from "@/components/audit/AuditDetailPage";
import {useLanguage} from "@/contexts/LanguageContext";

export default function CommunicationAuditPage() {
    const {t} = useLanguage();
    return <AuditDetailPage
        audit={
            {
                title: t('audits.communication.title'),
                description: t('audits.communication.description'),
                image: "/images/audits/audyty-komunikacji.jpg"
            }
        }
    />
}