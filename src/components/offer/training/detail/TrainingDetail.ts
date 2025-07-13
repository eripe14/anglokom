import React from "react";

export interface TrainingDetail {
    title: string;
    subtitle: string;
    description: string;
    icon: React.ReactNode;
    features: string[];
    details: {
        duration: string;
        groupSize: string;
        location: string;
        level?: string;
        certificate?: boolean;
    };
    content: {
        sections: ContentSection[];
    };
    cta: {
        primaryButton: string;
        primaryButtonLink?: string;
        secondaryButton?: string;
    };
}

export interface ContentSection {
    title: string;
    content: string | React.ReactNode | { title: string; description?: string; }[]; // Allow an array of objects
    type?: 'text' | 'list' | 'grid' | 'custom' | 'schedule';
}