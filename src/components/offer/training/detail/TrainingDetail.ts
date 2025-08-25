import React from "react";

export interface ContentSection {
    title: string;
    type: "list" | "grid" | "custom" | "schedule" | "text";
    content: unknown;
    href?: string;
}

export interface TrainingDetail {
    title: string;
    subtitle: string;
    description: string;
    icon?: React.ReactNode;   // <-- KLUCZOWE
    features: string[];       // (zostaje wymagane – patrz punkt 2)
    details: {
        duration: string;
        groupSize: string;
        location: string;
        level?: string;
        certificate?: boolean;
    };
    content: { sections: ContentSection[] };
    cta: {
        primaryButton: string;
        primaryButtonLink?: string;

        // opcjonalny 2. guzik
        secondaryButton?: string;
        secondaryButtonLink?: string;              // np. "/downloads/program.docx"
        secondaryDownloadFileName?: string;        // np. "Program.docx" -> włącza <a download>

        // opcjonalny 3. guzik
        tertiaryButton?: string;
        tertiaryButtonLink?: string;
        tertiaryDownloadFileName?: string;
    };
}
