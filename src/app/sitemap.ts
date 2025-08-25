// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import { getAllTrainingSlugs } from '@/data/trainings';

export default function sitemap(): MetadataRoute.Sitemap {
    const base = "https://anglokom.pl";
    const now = new Date();

    const staticPages: MetadataRoute.Sitemap = [
        { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
        { url: `${base}/oferta`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
        { url: `${base}/o-firmie`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
        { url: `${base}/kontakt`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
        { url: `${base}/biuro-tlumaczen`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${base}/audyty`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
        { url: `${base}/szkolenia`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    ];

    // Dynamiczne strony szkoleń
    const trainings = getAllTrainingSlugs();
    const trainingPages: MetadataRoute.Sitemap = trainings.map(id => ({
        url: `${base}/oferta/szkolenia-jezykowe/szkolenia-dla-firm/${id}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.8
    }));

    return [
        ...staticPages,
        ...trainingPages
    ];
}