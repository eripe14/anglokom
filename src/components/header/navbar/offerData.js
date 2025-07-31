import { GraduationCap, Building2, Languages } from "lucide-react";

export const offerItems = [
    {
        section: 'szkolenia-jezykowe',
        label: 'Szkolenia językowe',
        icon: Languages,
        description: 'Profesjonalne kursy językowe dla firm i osób prywatnych'
    },
    {
        section: 'szkolenia-biznesowe',
        label: 'Szkolenia biznesowe',
        icon: Building2,
        description: 'Rozwój kompetencji miękkich i umiejętności biznesowych'
    },
    {
        section: 'kursy-maturalne',
        label: 'Kursy maturalne',
        icon: GraduationCap,
        description: 'Przygotowanie do matury z języków obcych'
    }
];

export const scrollToSection = async (sectionId, router) => {
    // Jeśli nie jesteśmy na stronie oferty, najpierw tam przejdź
    if (window.location.pathname !== '/oferta') {
        await router.push('/oferta');
        // Czekaj na załadowanie strony
        await new Promise(resolve => setTimeout(resolve, 200));
    }

    // Funkcja do obliczania prawidłowego offsetu
    const getNavbarHeight = () => {
        const navbar = document.querySelector('nav');
        if (navbar) {
            return navbar.offsetHeight;
        }
        // Fallback heights dla różnych breakpointów
        if (window.innerWidth < 768) {
            return 80; // mobile
        }
        return 80; // desktop
    };

    const scrollToElement = (element) => {
        if (!element) return;

        const navbarHeight = getNavbarHeight();
        const additionalOffset = window.innerWidth < 768 ? 20 : 30; // dodatkowy offset dla mobile
        const totalOffset = navbarHeight + additionalOffset;

        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - totalOffset;

        // Używamy requestAnimationFrame dla lepszej performacji na mobile
        requestAnimationFrame(() => {
            window.scrollTo({
                top: Math.max(0, offsetPosition), // nie scrolluj powyżej góry strony
                behavior: 'smooth'
            });
        });
    };

    // Znajdź element i przewiń do niego
    const element = document.getElementById(sectionId);
    if (element) {
        // Czekaj chwilę na załadowanie layoutu
        setTimeout(() => scrollToElement(element), 100);
    } else {
        // Jeśli element nie istnieje, spróbuj ponownie z większym opóźnieniem
        setTimeout(() => {
            const retryElement = document.getElementById(sectionId);
            if (retryElement) {
                scrollToElement(retryElement);
            } else {
                // Ostatnia próba z jeszcze większym opóźnieniem
                setTimeout(() => {
                    const finalElement = document.getElementById(sectionId);
                    if (finalElement) {
                        scrollToElement(finalElement);
                    }
                }, 500);
            }
        }, 400);
    }
};