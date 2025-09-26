// app/szkolenia/[slug]/page.tsx
import { notFound } from "next/navigation";
import TrainingDetailPage from "@/components/offer/training/detail/TrainingDetailPage";
import { getTrainingBySlug, getAllTrainingSlugs } from "@/data/trainings";

export async function generateStaticParams() {
    return getAllTrainingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const t = getTrainingBySlug(params.slug);
    return {
        title: t ? `${t.title} — ANGLOKOM` : "Szkolenie — ANGLOKOM",
        description: t?.subtitle ?? t?.description?.slice(0, 160),
    };
}

export default function Page({ params }: { params: { slug: string } }) {
    const training = getTrainingBySlug(params.slug);
    if (!training) return notFound();

    return <TrainingDetailPage training={training} backHref="/oferta/szkolenia-biznesowe/szkolenia-komunikacja" />;
}
