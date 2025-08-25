// scripts/check-meta.js
const fs = require('fs');
const path = require('path');

console.log('🔍 Sprawdzanie SEO...\n');

// Sprawdź czy istnieją wymagane pliki
const requiredFiles = [
    'public/sitemap.xml',
    'public/robots.txt',
    'public/favicon.ico',
    'public/apple-touch-icon.png'
];

console.log('📁 Sprawdzanie plików SEO:');
requiredFiles.forEach(file => {
    if (fs.existsSync(file)) {
        console.log(`✅ ${file} - OK`);
    } else {
        console.log(`❌ ${file} - BRAKUJE`);
    }
});

// Sprawdź długość meta tagów
const checkMetaLength = () => {
    console.log('\n📏 Sprawdzanie długości meta tagów:');

    // Te wartości powinieneś pobrać z swojego layout.tsx
    const title = "Anglokom - Profesjonalne Szkolenia językowe dla firm i Tłumaczenia";
    const description = "Szkolenia językowe dla firm, audyty komunikacji i tłumaczenia. Online i stacjonarnie. Ponad 25 lat doświadczenia w branży.";

    // Sprawdź title
    if (title.length <= 60) {
        console.log(`✅ Title: ${title.length}/60 znaków`);
    } else {
        console.log(`⚠️  Title: ${title.length}/60 znaków - ZA DŁUGI`);
    }

    // Sprawdź description
    if (description.length >= 120 && description.length <= 160) {
        console.log(`✅ Description: ${description.length}/160 znaków`);
    } else if (description.length < 120) {
        console.log(`⚠️  Description: ${description.length}/160 znaków - ZA KRÓTKI`);
    } else {
        console.log(`⚠️  Description: ${description.length}/160 znaków - ZA DŁUGI`);
    }
};

checkMetaLength();

// Sprawdź strukturę folderów dla SEO
console.log('\n📂 Sprawdzanie struktury folderów:');
const seoFolders = [
    'src/app/sitemap.ts',
    'src/app/robots.ts',
    'public/images'
];

seoFolders.forEach(folder => {
    if (fs.existsSync(folder)) {
        console.log(`✅ ${folder} - OK`);
    } else {
        console.log(`❌ ${folder} - BRAKUJE`);
    }
});

console.log('\n🚀 Sprawdzanie zakończone!');
console.log('\n💡 Kolejne kroki:');
console.log('1. Dodaj Google Search Console verification');
console.log('2. Skonfiguruj Google Analytics');
console.log('3. Przetestuj na PageSpeed Insights');
console.log('4. Sprawdź rich snippets w Google Rich Results Test');