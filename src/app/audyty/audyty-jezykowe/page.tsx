'use client'

import AuditDetailPage from "@/components/audit/AuditDetailPage";
import {useLanguage} from "@/contexts/LanguageContext";

export default function LanguageAuditPage() {
    const {t} = useLanguage();
    return <AuditDetailPage
        audit={
            {
                title: t('audits.language.subtitle'),
                description: t('audits.language.description'),
                image: "/images/audits/audyty-jezykowe.jpg"
            }
        }
    />
}