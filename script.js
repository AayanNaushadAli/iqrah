// Quran Data - All 114 Surahs with names in Arabic and English
const quranChapters = [
    { id: 1, nameArabic: "الفاتحة", nameEnglish: "Al-Fatiha", verses: 7 },
    { id: 2, nameArabic: "البقرة", nameEnglish: "Al-Baqarah", verses: 286 },
    { id: 3, nameArabic: "آل عمران", nameEnglish: "Al-Imran", verses: 200 },
    { id: 4, nameArabic: "النساء", nameEnglish: "An-Nisa", verses: 176 },
    { id: 5, nameArabic: "المائدة", nameEnglish: "Al-Maidah", verses: 120 },
    { id: 6, nameArabic: "الأنعام", nameEnglish: "Al-Anam", verses: 165 },
    { id: 7, nameArabic: "الأعراف", nameEnglish: "Al-Araf", verses: 206 },
    { id: 8, nameArabic: "الأنفال", nameEnglish: "Al-Anfal", verses: 75 },
    { id: 9, nameArabic: "التوبة", nameEnglish: "At-Taubah", verses: 129 },
    { id: 10, nameArabic: "يونس", nameEnglish: "Yunus", verses: 109 },
    { id: 11, nameArabic: "هود", nameEnglish: "Hud", verses: 123 },
    { id: 12, nameArabic: "يوسف", nameEnglish: "Yusuf", verses: 111 },
    { id: 13, nameArabic: "الرعد", nameEnglish: "Ar-Rad", verses: 43 },
    { id: 14, nameArabic: "إبراهيم", nameEnglish: "Ibrahim", verses: 52 },
    { id: 15, nameArabic: "الحجر", nameEnglish: "Al-Hijr", verses: 99 },
    { id: 16, nameArabic: "النحل", nameEnglish: "An-Nahl", verses: 128 },
    { id: 17, nameArabic: "الإسراء", nameEnglish: "Al-Isra", verses: 111 },
    { id: 18, nameArabic: "الكهف", nameEnglish: "Al-Kahf", verses: 110 },
    { id: 19, nameArabic: "مريم", nameEnglish: "Maryam", verses: 98 },
    { id: 20, nameArabic: "طه", nameEnglish: "Ta-Ha", verses: 135 },
    { id: 21, nameArabic: "الأنبياء", nameEnglish: "Al-Anbiya", verses: 112 },
    { id: 22, nameArabic: "الحج", nameEnglish: "Al-Hajj", verses: 78 },
    { id: 23, nameArabic: "المؤمنون", nameEnglish: "Al-Muminun", verses: 118 },
    { id: 24, nameArabic: "النور", nameEnglish: "An-Nur", verses: 64 },
    { id: 25, nameArabic: "الفرقان", nameEnglish: "Al-Furqan", verses: 77 },
    { id: 26, nameArabic: "الشعراء", nameEnglish: "Ash-Shuara", verses: 227 },
    { id: 27, nameArabic: "النمل", nameEnglish: "An-Naml", verses: 93 },
    { id: 28, nameArabic: "القصص", nameEnglish: "Al-Qasas", verses: 88 },
    { id: 29, nameArabic: "العنكبوت", nameEnglish: "Al-Ankabut", verses: 69 },
    { id: 30, nameArabic: "الروم", nameEnglish: "Ar-Rum", verses: 60 },
    { id: 31, nameArabic: "لقمان", nameEnglish: "Luqman", verses: 34 },
    { id: 32, nameArabic: "السجدة", nameEnglish: "As-Sajdah", verses: 30 },
    { id: 33, nameArabic: "الأحزاب", nameEnglish: "Al-Ahzab", verses: 73 },
    { id: 34, nameArabic: "سبأ", nameEnglish: "Saba", verses: 54 },
    { id: 35, nameArabic: "فاطر", nameEnglish: "Fatir", verses: 45 },
    { id: 36, nameArabic: "يس", nameEnglish: "Ya-Sin", verses: 83 },
    { id: 37, nameArabic: "الصافات", nameEnglish: "As-Saffat", verses: 182 },
    { id: 38, nameArabic: "ص", nameEnglish: "Sad", verses: 88 },
    { id: 39, nameArabic: "الزمر", nameEnglish: "Az-Zumar", verses: 75 },
    { id: 40, nameArabic: "غافر", nameEnglish: "Al-Ghafir", verses: 85 },
    { id: 41, nameArabic: "فصلت", nameEnglish: "Fussilat", verses: 54 },
    { id: 42, nameArabic: "الشورى", nameEnglish: "Ash-Shura", verses: 53 },
    { id: 43, nameArabic: "الزخرف", nameEnglish: "Az-Zukhruf", verses: 89 },
    { id: 44, nameArabic: "الدخان", nameEnglish: "Ad-Dukhan", verses: 59 },
    { id: 45, nameArabic: "الجاثية", nameEnglish: "Al-Jathiyah", verses: 37 },
    { id: 46, nameArabic: "الأحقاف", nameEnglish: "Al-Ahqaf", verses: 35 },
    { id: 47, nameArabic: "محمد", nameEnglish: "Muhammad", verses: 38 },
    { id: 48, nameArabic: "الفتح", nameEnglish: "Al-Fath", verses: 29 },
    { id: 49, nameArabic: "الحجرات", nameEnglish: "Al-Hujurat", verses: 18 },
    { id: 50, nameArabic: "ق", nameEnglish: "Qaf", verses: 45 },
    { id: 51, nameArabic: "الذاريات", nameEnglish: "Az-Zariyat", verses: 60 },
    { id: 52, nameArabic: "الطور", nameEnglish: "At-Tur", verses: 49 },
    { id: 53, nameArabic: "النجم", nameEnglish: "An-Najm", verses: 62 },
    { id: 54, nameArabic: "القمر", nameEnglish: "Al-Qamar", verses: 55 },
    { id: 55, nameArabic: "الرحمن", nameEnglish: "Ar-Rahman", verses: 78 },
    { id: 56, nameArabic: "الواقعة", nameEnglish: "Al-Waqi'ah", verses: 96 },
    { id: 57, nameArabic: "الحديد", nameEnglish: "Al-Hadid", verses: 29 },
    { id: 58, nameArabic: "المجادلة", nameEnglish: "Al-Mujadilah", verses: 22 },
    { id: 59, nameArabic: "الحشر", nameEnglish: "Al-Hashr", verses: 24 },
    { id: 60, nameArabic: "الممتحنة", nameEnglish: "Al-Mumtahanah", verses: 13 },
    { id: 61, nameArabic: "الصف", nameEnglish: "As-Saff", verses: 14 },
    { id: 62, nameArabic: "الجمعة", nameEnglish: "Al-Jumu'ah", verses: 11 },
    { id: 63, nameArabic: "المنافقون", nameEnglish: "Al-Munafiqun", verses: 11 },
    { id: 64, nameArabic: "التغابن", nameEnglish: "At-Taghabun", verses: 18 },
    { id: 65, nameArabic: "الطلاق", nameEnglish: "At-Talaq", verses: 12 },
    { id: 66, nameArabic: "التحريم", nameEnglish: "At-Tahrim", verses: 12 },
    { id: 67, nameArabic: "الملك", nameEnglish: "Al-Mulk", verses: 30 },
    { id: 68, nameArabic: "القلم", nameEnglish: "Al-Qalam", verses: 52 },
    { id: 69, nameArabic: "الحاقة", nameEnglish: "Al-Haqqah", verses: 52 },
    { id: 70, nameArabic: "المعارج", nameEnglish: "Al-Ma'arij", verses: 44 },
    { id: 71, nameArabic: "نوح", nameEnglish: "Nuh", verses: 28 },
    { id: 72, nameArabic: "الجن", nameEnglish: "Al-Jinn", verses: 28 },
    { id: 73, nameArabic: "المزمل", nameEnglish: "Al-Muzzammil", verses: 20 },
    { id: 74, nameArabic: "المدثر", nameEnglish: "Al-Muddaththir", verses: 56 },
    { id: 75, nameArabic: "القيامة", nameEnglish: "Al-Qiyamah", verses: 40 },
    { id: 76, nameArabic: "الإنسان", nameEnglish: "Al-Insan", verses: 31 },
    { id: 77, nameArabic: "المرسلات", nameEnglish: "Al-Mursalat", verses: 50 },
    { id: 78, nameArabic: "النبأ", nameEnglish: "An-Naba", verses: 40 },
    { id: 79, nameArabic: "النازعات", nameEnglish: "An-Nazi'at", verses: 46 },
    { id: 80, nameArabic: "عبس", nameEnglish: "'Abasa", verses: 42 },
    { id: 81, nameArabic: "التكوير", nameEnglish: "At-Takwir", verses: 29 },
    { id: 82, nameArabic: "الانفطار", nameEnglish: "Al-Infitar", verses: 19 },
    { id: 83, nameArabic: "المطففين", nameEnglish: "Al-Mutaffifin", verses: 36 },
    { id: 84, nameArabic: "الانشقاق", nameEnglish: "Al-Inshiqaq", verses: 25 },
    { id: 85, nameArabic: "البروج", nameEnglish: "Al-Buruj", verses: 22 },
    { id: 86, nameArabic: "الطارق", nameEnglish: "At-Tariq", verses: 17 },
    { id: 87, nameArabic: "الأعلى", nameEnglish: "Al-A'la", verses: 19 },
    { id: 88, nameArabic: "الغاشية", nameEnglish: "Al-Ghashiyah", verses: 26 },
    { id: 89, nameArabic: "الفجر", nameEnglish: "Al-Fajr", verses: 30 },
    { id: 90, nameArabic: "البلد", nameEnglish: "Al-Balad", verses: 20 },
    { id: 91, nameArabic: "الشمس", nameEnglish: "Ash-Shams", verses: 15 },
    { id: 92, nameArabic: "الليل", nameEnglish: "Al-Lail", verses: 21 },
    { id: 93, nameArabic: "الضحى", nameEnglish: "Ad-Duha", verses: 11 },
    { id: 94, nameArabic: "الشرح", nameEnglish: "Al-Inshirah", verses: 8 },
    { id: 95, nameArabic: "التين", nameEnglish: "At-Tin", verses: 8 },
    { id: 96, nameArabic: "العلق", nameEnglish: "Al-'Alaq", verses: 19 },
    { id: 97, nameArabic: "القدر", nameEnglish: "Al-Qadr", verses: 5 },
    { id: 98, nameArabic: "البينة", nameEnglish: "Al-Bayyinah", verses: 8 },
    { id: 99, nameArabic: "الزلزلة", nameEnglish: "Az-Zilzal", verses: 8 },
    { id: 100, nameArabic: "العاديات", nameEnglish: "Al-'Adiyat", verses: 11 },
    { id: 101, nameArabic: "القارعة", nameEnglish: "Al-Qari'ah", verses: 11 },
    { id: 102, nameArabic: "التكاثر", nameEnglish: "At-Takathur", verses: 8 },
    { id: 103, nameArabic: "العصر", nameEnglish: "Al-Asr", verses: 3 },
    { id: 104, nameArabic: "الهمزة", nameEnglish: "Al-Humazah", verses: 9 },
    { id: 105, nameArabic: "الفيل", nameEnglish: "Al-Fil", verses: 5 },
    { id: 106, nameArabic: "قريش", nameEnglish: "Quraysh", verses: 4 },
    { id: 107, nameArabic: "الماعون", nameEnglish: "Al-Ma'un", verses: 7 },
    { id: 108, nameArabic: "الكوثر", nameEnglish: "Al-Kawthar", verses: 3 },
    { id: 109, nameArabic: "الكافرون", nameEnglish: "Al-Kafirun", verses: 6 },
    { id: 110, nameArabic: "النصر", nameEnglish: "An-Nasr", verses: 3 },
    { id: 111, nameArabic: "اللهب", nameEnglish: "Al-Lahab", verses: 5 },
    { id: 112, nameArabic: "الإخلاص", nameEnglish: "Al-Ikhlas", verses: 4 },
    { id: 113, nameArabic: "الفلق", nameEnglish: "Al-Falaq", verses: 5 },
    { id: 114, nameArabic: "الناس", nameEnglish: "An-Nas", verses: 6 }
];

// PDF filename mapping - maps chapter ID to the exact PDF filename suffix
const pdfFileMap = {
    1: "al-fatiha",
    2: "al-baqarah",
    3: "aali-imran",
    4: "an-nisaa",
    5: "al-maidah",
    6: "al-anaam",
    7: "al-aaraf",
    8: "al-anfal",
    9: "at-tawbah",
    10: "yunus",
    11: "hud",
    12: "yusuf",
    13: "raad",
    14: "ibrahim",
    15: "al-hijr",
    16: "an-nahl",
    17: "al-isra",
    18: "al-kahf",
    19: "maryam",
    20: "taha",
    21: "al-anbiyaa",
    22: "al-hajj",
    23: "al-muminoon",
    24: "an-noor",
    25: "al-furqan",
    26: "ash-shuaraa",
    27: "an-naml",
    28: "al-qasas",
    29: "al-ankabut",
    30: "ar-rum",
    31: "luqman",
    32: "as-sajda",
    33: "al-ahzab",
    34: "saba",
    35: "fatir",
    36: "yaseen",
    37: "as-saaffat",
    38: "saad",
    39: "az-zumar",
    40: "ghafir",
    41: "fussilat",
    42: "ash-shura",
    43: "az-zukhurf",
    44: "ad-dukhaan",
    45: "al-jaathiya",
    46: "al-ahqaf",
    47: "muhammad",
    48: "al-fath",
    49: "al-hujuraat",
    50: "qaaf",
    51: "adh-dhaariyat",
    52: "at-tur",
    53: "an-najm",
    54: "al-qamar",
    55: "ar-rahman",
    56: "al-waaqia",
    57: "al-hadid",
    58: "al-mujaadila",
    59: "al-hashr",
    60: "al-mumtahana",
    61: "as-saff",
    62: "al-jumua",
    63: "al-munaafiqoon",
    64: "at-taghaabun",
    65: "at-talaaq",
    66: "at-tahrim",
    67: "al-mulk",
    68: "al-qalam",
    69: "al-haaqqa",
    70: "al-maarij",
    71: "nooh",
    72: "al-jinn",
    73: "al-muzzammil",
    74: "al-muddaththir",
    75: "al-qiyaama",
    76: "al-insaan",
    77: "al-mursalaat",
    78: "an-naba",
    79: "an-naaziaat",
    80: "abasa",
    81: "at-takwir",
    82: "al-infitaar",
    83: "al-mutaffifin",
    84: "al-inshiqaaq",
    85: "al-burooj",
    86: "at-taariq",
    87: "alaa",
    88: "al-ghaashiya",
    89: "al-fajr",
    90: "al-balad",
    91: "ash-shams",
    92: "al-lail",
    93: "ad-dhuhaa",
    94: "ash-sharh",
    95: "at-tin",
    96: "alaq",
    97: "al-qadr",
    98: "al-bayyina",
    99: "az-zalzala",
    100: "al-adiyat",
    101: "al-qariah",
    102: "at-takathur",
    103: "al-asr",
    104: "al-humazah",
    105: "al-fil",
    106: "quraysh",
    107: "al-maun",
    108: "al-kawthar",
    109: "al-kafirun",
    110: "an-nasr",
    111: "al-lahab",
    112: "al-ikhlaas",
    113: "al-falaq",
    114: "an-nas"
};

// Chapter Themes - Beautiful illustrated backgrounds for each chapter
const chapterThemes = {
    1: {
        name: 'Al-Fatiha - The Opening',
        svg: `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" /><stop offset="100%" style="stop-color:#FFA500;stop-opacity:1" /></linearGradient></defs><rect width="800" height="600" fill="url(#bg1)"/><circle cx="400" cy="150" r="80" fill="#FFF" opacity="0.9"/><path d="M 400 250 L 450 350 L 500 250 Z" fill="#FFD700" opacity="0.8"/><path d="M 300 250 L 350 350 L 400 250 Z" fill="#FFD700" opacity="0.6"/></svg>`
    },
    2: {
        name: 'Al-Baqarah - The Cow',
        svg: `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#8B6914;stop-opacity:1" /><stop offset="100%" style="stop-color:#D2B48C;stop-opacity:1" /></linearGradient></defs><rect width="800" height="600" fill="url(#bg2)"/><ellipse cx="400" cy="300" rx="120" ry="100" fill="#654321" opacity="0.9"/><circle cx="350" cy="240" r="25" fill="#000" opacity="0.8"/><circle cx="450" cy="240" r="25" fill="#000" opacity="0.8"/><path d="M 330 220 L 320 180" stroke="#000" stroke-width="4" opacity="0.8"/><path d="M 470 220 L 480 180" stroke="#000" stroke-width="4" opacity="0.8"/><ellipse cx="380" cy="180" rx="8" ry="15" fill="#000" opacity="0.7"/><ellipse cx="420" cy="180" rx="8" ry="15" fill="#000" opacity="0.7"/></svg>`
    },
    3: {
        name: 'Al-Imran - The Family',
        svg: `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#CD5C5C;stop-opacity:1" /><stop offset="100%" style="stop-color:#F08080;stop-opacity:1" /></linearGradient></defs><rect width="800" height="600" fill="url(#bg3)"/><circle cx="300" cy="300" r="30" fill="#FFE4E1" opacity="0.9"/><circle cx="500" cy="300" r="30" fill="#FFE4E1" opacity="0.9"/><circle cx="400" cy="200" r="35" fill="#FFE4E1" opacity="0.9"/><path d="M 300 330 L 400 250" stroke="#CD5C5C" stroke-width="3" opacity="0.6"/><path d="M 500 330 L 400 250" stroke="#CD5C5C" stroke-width="3" opacity="0.6"/></svg>`
    },
    5: {
        name: 'Al-Maidah - The Table',
        svg: `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg5" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#20B2AA;stop-opacity:1" /><stop offset="100%" style="stop-color:#48D1CC;stop-opacity:1" /></linearGradient></defs><rect width="800" height="600" fill="url(#bg5)"/><rect x="250" y="250" width="300" height="150" fill="#8B4513" opacity="0.8" rx="10"/><circle cx="320" cy="300" r="20" fill="#FF6347" opacity="0.9"/><circle cx="400" cy="280" r="20" fill="#FFD700" opacity="0.9"/><circle cx="480" cy="300" r="20" fill="#228B22" opacity="0.9"/><rect x="200" y="420" width="400" height="40" fill="#8B4513" opacity="0.7"/></svg>`
    },
    10: {
        name: 'Yunus - Jonah',
        svg: `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg10" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#4B0082;stop-opacity:1" /><stop offset="100%" style="stop-color:#9932CC;stop-opacity:1" /></linearGradient></defs><rect width="800" height="600" fill="url(#bg10)"/><ellipse cx="400" cy="350" rx="150" ry="100" fill="#1C1C3C" opacity="0.9"/><path d="M 300 300 Q 350 250 400 300 Q 450 250 500 300" fill="#87CEEB" opacity="0.7" stroke="#87CEEB" stroke-width="2"/><path d="M 320 320 L 340 340 L 360 320" fill="#FF69B4" opacity="0.8"/></svg>`
    },
    16: {
        name: 'An-Nahl - The Bee',
        svg: `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg16" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#FFD700;stop-opacity:1" /><stop offset="100%" style="stop-color:#FFA500;stop-opacity:1" /></linearGradient></defs><rect width="800" height="600" fill="url(#bg16)"/><ellipse cx="400" cy="300" rx="30" ry="40" fill="#000" opacity="0.8"/><circle cx="390" cy="260" r="15" fill="#000" opacity="0.8"/><circle cx="410" cy="260" r="15" fill="#000" opacity="0.8"/><path d="M 370 300 L 350 320" stroke="#FFD700" stroke-width="3" opacity="0.7"/><path d="M 430 300 L 450 320" stroke="#FFD700" stroke-width="3" opacity="0.7"/><circle cx="400" cy="150" r="60" fill="#FFD700" opacity="0.6"/><circle cx="420" cy="140" r="40" fill="#FFA500" opacity="0.5"/></svg>`
    },
    17: {
        name: 'Al-Isra - The Night Journey',
        svg: `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg17" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#191970;stop-opacity:1" /><stop offset="100%" style="stop-color:#4169E1;stop-opacity:1" /></linearGradient></defs><rect width="800" height="600" fill="url(#bg17)"/><circle cx="400" cy="150" r="50" fill="#FFFACD" opacity="0.9"/><circle cx="100" cy="100" r="8" fill="#FFF" opacity="0.8"/><circle cx="200" cy="80" r="6" fill="#FFF" opacity="0.7"/><circle cx="700" cy="120" r="7" fill="#FFF" opacity="0.75"/><circle cx="650" cy="90" r="5" fill="#FFF" opacity="0.6"/><path d="M 200 400 L 400 300 L 600 400" fill="#4169E1" opacity="0.6" stroke="#87CEEB" stroke-width="2"/></svg>`
    },
    18: {
        name: 'Al-Kahf - The Cave',
        svg: `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg18" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#8B0000;stop-opacity:1" /><stop offset="100%" style="stop-color:#DC143C;stop-opacity:1" /></linearGradient></defs><rect width="800" height="600" fill="url(#bg18)"/><path d="M 150 250 Q 250 150 350 250 L 350 550 L 150 550 Z" fill="#333" opacity="0.9"/><path d="M 450 250 Q 550 150 650 250 L 650 550 L 450 550 Z" fill="#444" opacity="0.85"/><rect x="300" y="300" width="200" height="200" fill="#2C2C2C" opacity="0.8"/></svg>`
    },
    36: {
        name: 'Ya-Sin - Ya-Sin',
        svg: `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg36" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#1E90FF;stop-opacity:1" /><stop offset="100%" style="stop-color:#87CEEB;stop-opacity:1" /></linearGradient></defs><rect width="800" height="600" fill="url(#bg36)"/><circle cx="150" cy="100" r="8" fill="#FFD700" opacity="0.9"/><circle cx="400" cy="80" r="10" fill="#FFF" opacity="0.85"/><circle cx="650" cy="110" r="7" fill="#FFD700" opacity="0.8"/><circle cx="250" cy="150" r="6" fill="#FFF" opacity="0.7"/><circle cx="550" cy="140" r="8" fill="#FFF" opacity="0.75"/><polygon points="100,400 200,300 300,400 250,450 150,450" fill="#87CEEB" opacity="0.6"/><polygon points="500,400 600,300 700,400 650,450 550,450" fill="#87CEEB" opacity="0.6"/></svg>`
    },
    105: {
        name: 'Al-Fil - The Elephant',
        svg: `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg105" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#8B4513;stop-opacity:1" /><stop offset="100%" style="stop-color:#D2B48C;stop-opacity:1" /></linearGradient></defs><rect width="800" height="600" fill="url(#bg105)"/><ellipse cx="400" cy="350" rx="100" ry="120" fill="#654321" opacity="0.9"/><circle cx="350" cy="280" r="35" fill="#654321" opacity="0.9"/><circle cx="450" cy="280" r="35" fill="#654321" opacity="0.9"/><path d="M 380 380 L 370 480" stroke="#654321" stroke-width="20" stroke-linecap="round" opacity="0.9"/><rect x="320" y="480" width="160" height="40" fill="#8B7355" opacity="0.8"/></svg>`
    },
};

// Default theme for chapters without specific illustrations
const defaultSvg = `<svg viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bgDefault" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#667eea;stop-opacity:1" /><stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" /></linearGradient></defs><rect width="800" height="600" fill="url(#bgDefault)"/><circle cx="400" cy="300" r="80" fill="#FFF" opacity="0.15"/><circle cx="300" cy="200" r="50" fill="#FFF" opacity="0.1"/><circle cx="500" cy="400" r="60" fill="#FFF" opacity="0.12"/></svg>`;

// State
let currentChapterId = null;
let currentPage = 1;
let pdfDoc = null;
let pdfLibReady = false;
const pdfDirectory = "pdfs/";

// DOM Elements
const chapterList = document.getElementById('chapterList');
const welcomeScreen = document.getElementById('welcomeScreen');
const reader = document.getElementById('reader');
const surahTitle = document.getElementById('surahTitle');
const pageInfo = document.getElementById('pageInfo');
const pdfCanvas = document.getElementById('pdfCanvas');
const pdfBackground = document.getElementById('pdfBackground');
const loading = document.getElementById('loading');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadChapters();
    loadPdfJs();
    setupEventListeners();
    setupVerseToggle();
    setupMobileMenu();
});

// Setup verse expansion functionality
function setupVerseToggle() {
    const h1 = document.querySelector('.sidebar-header h1');
    // Note: Verse is now always visible in the header, no toggle needed
}

// Sidebar toggle for mobile
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const sidebar = document.querySelector('.sidebar');
    const appContainer = document.querySelector('.app-container');

    // Create overlay if it doesn't exist
    let overlay = document.querySelector('.sidebar-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'sidebar-overlay';
        document.body.appendChild(overlay);
    }

    if (mobileMenuBtn && sidebar) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebar.classList.toggle('active');
            overlay.classList.toggle('active');
        });

        // Close when clicking overlay
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('active');
            overlay.classList.remove('active');
        });

        // Close when clicking outside (fallback)
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768 &&
                sidebar.classList.contains('active') &&
                !sidebar.contains(e.target) &&
                e.target !== mobileMenuBtn &&
                !mobileMenuBtn.contains(e.target)) {
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
            }
        });
    }
}


// Load all chapters into the sidebar
function loadChapters() {
    quranChapters.forEach(chapter => {
        const item = document.createElement('div');
        item.className = 'chapter-item';
        item.dataset.id = chapter.id;
        item.innerHTML = `
            <div class="chapter-info">
                <div class="chapter-number">Chapter ${chapter.id}</div>
                <div class="chapter-name-arabic">${chapter.nameArabic}</div>
                <div class="chapter-name-english">${chapter.nameEnglish}</div>
            </div>
            <div class="chapter-verses">${chapter.verses} verses</div>
        `;
        item.addEventListener('click', () => openChapter(chapter));
        chapterList.appendChild(item);
    });
}

// Load PDF.js library
function loadPdfJs() {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js';
    script.onload = () => {
        console.log('PDF.js loaded');
        if (window.pdfjsLib) {
            window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';
            pdfLibReady = true;
        }
    };
    script.onerror = () => {
        console.error('Failed to load PDF.js');
    };
    document.head.appendChild(script);
}

// Setup event listeners
function setupEventListeners() {
    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            renderCurrentPage();
            updatePageInfo();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (pdfDoc && currentPage < pdfDoc.numPages) {
            currentPage++;
            renderCurrentPage();
            updatePageInfo();
        }
    });

    // Back button functionality
    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            // Hide reader, show welcome
            welcomeScreen.style.display = 'flex';
            reader.style.display = 'none';

            // Show verse header
            const verseHeader = document.querySelector('.verse-header');
            if (verseHeader) {
                verseHeader.style.display = 'flex'; // Restore flex display
                document.documentElement.style.setProperty('--header-height', '140px'); // Mobile height
            }

            // Allow sidebar toggle again
            document.querySelector('.mobile-menu-btn').style.display = 'block';
        });
    }

    // Zoom controls
    const zoomInBtn = document.getElementById('zoomInBtn');
    const zoomOutBtn = document.getElementById('zoomOutBtn');

    if (zoomInBtn && zoomOutBtn) {
        window.userZoomLevel = 1.0;

        zoomInBtn.addEventListener('click', () => {
            if (window.userZoomLevel < 3.0) {
                window.userZoomLevel += 0.25;
                renderCurrentPage();
            }
        });

        zoomOutBtn.addEventListener('click', () => {
            if (window.userZoomLevel > 0.5) {
                window.userZoomLevel -= 0.25;
                renderCurrentPage();
            }
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!pdfDoc) return;

        if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
            e.preventDefault();
            if (currentPage > 1) {
                currentPage--;
                renderCurrentPage();
                updatePageInfo();
            }
        } else if (e.key === 'ArrowRight' || e.key === 'PageDown') {
            e.preventDefault();
            if (currentPage < pdfDoc.numPages) {
                currentPage++;
                renderCurrentPage();
                updatePageInfo();
            }
        }
    });

    // Add click handler to sidebar header to close reader and show welcome
    const sidebarHeader = document.querySelector('.sidebar-header');
    if (sidebarHeader) {
        sidebarHeader.addEventListener('click', () => {
            welcomeScreen.style.display = 'flex';
            reader.style.display = 'none';

            // Show verse header again
            const verseHeader = document.querySelector('.verse-header');
            if (verseHeader) {
                verseHeader.style.display = 'block';
                document.documentElement.style.setProperty('--header-height', '160px');
            }

            // Remove active state from chapters
            document.querySelectorAll('.chapter-item').forEach(item => {
                item.classList.remove('active');
            });
        });
    }

    // Add click handler for full Quran button
    const fullQuranBtn = document.getElementById('fullQuranBtn');
    if (fullQuranBtn) {
        fullQuranBtn.addEventListener('click', () => {
            openFullQuran();
        });
    }
}

// Open full Quran PDF
async function openFullQuran() {
    currentChapterId = 'full-quran';
    currentPage = 1;
    pdfDoc = null;

    // Remove active state from all chapters
    document.querySelectorAll('.chapter-item').forEach(item => {
        item.classList.remove('active');
    });

    // Show reader, hide welcome
    welcomeScreen.style.display = 'none';
    reader.style.display = 'flex';

    // Hide verse header when opening PDF
    const verseHeader = document.querySelector('.verse-header');
    if (verseHeader) {
        verseHeader.style.display = 'none';
        document.documentElement.style.setProperty('--header-height', '0px');
    }

    // Update title
    surahTitle.textContent = '📕 Complete Quran';

    // Set a simple background
    pdfBackground.style.backgroundImage = 'linear-gradient(135deg, #8b9f7f 0%, #a89968 100%)';
    pdfBackground.style.backgroundSize = 'cover';

    // Show loading
    loading.classList.add('show');
    pdfCanvas.style.display = 'none';

    // Load full Quran PDF
    await loadPdf('full-quran');
}

// Open a chapter
async function openChapter(chapter) {
    currentChapterId = chapter.id;
    currentPage = 1;
    pdfDoc = null;

    // Update active state in sidebar
    document.querySelectorAll('.chapter-item').forEach(item => {
        item.classList.remove('active');
        if (parseInt(item.dataset.id) === chapter.id) {
            item.classList.add('active');
        }
    });

    // Show reader, hide welcome
    welcomeScreen.style.display = 'none';
    reader.style.display = 'flex';

    // Hide verse header when opening PDF
    const verseHeader = document.querySelector('.verse-header');
    if (verseHeader) {
        verseHeader.style.display = 'none';
        document.documentElement.style.setProperty('--header-height', '0px');
    }

    // Update title
    surahTitle.textContent = `${chapter.nameArabic} - ${chapter.nameEnglish}`;

    // Set background theme with SVG illustration
    const theme = chapterThemes[chapter.id];
    const svgContent = theme ? theme.svg : defaultSvg;
    const svgDataUrl = 'data:image/svg+xml;utf8,' + encodeURIComponent(svgContent);
    pdfBackground.style.backgroundImage = `url('${svgDataUrl}')`;
    pdfBackground.style.backgroundSize = 'cover';
    pdfBackground.style.backgroundPosition = 'center';

    // Show loading
    loading.classList.add('show');
    pdfCanvas.style.display = 'none';

    // Load PDF
    await loadPdf(chapter.id);

    // Close sidebar on mobile
    if (window.innerWidth <= 768) {
        document.querySelector('.sidebar').classList.remove('active');
        const overlay = document.querySelector('.sidebar-overlay');
        if (overlay) overlay.classList.remove('active');
    }
}

// Load PDF file with multiple fallback methods
async function loadPdf(chapterId) {
    if (!window.pdfjsLib) {
        console.log('PDF.js not ready yet, waiting...');
        setTimeout(() => loadPdf(chapterId), 500);
        return;
    }

    let pdfPath;

    // GitHub CDN Base URL
    const baseUrl = 'https://raw.githubusercontent.com/AayanNaushadAli/iqrah/main/pdfs/';

    // Handle full Quran PDF
    if (chapterId === 'full-quran') {
        pdfPath = baseUrl + 'quran-full.pdf';
    } else {
        // Get the PDF filename suffix from the map
        const pdfSuffix = pdfFileMap[chapterId];
        if (!pdfSuffix) {
            loading.textContent = 'Chapter not found in PDF map';
            loading.classList.add('show');
            return;
        }
        pdfPath = `${baseUrl}quran-chapter-${chapterId}-surah-${pdfSuffix}-pdf.pdf`;
    }

    console.log('=== LOADING PDF ===');
    console.log('Chapter ID:', chapterId);
    console.log('PDF Path:', pdfPath);

    loading.textContent = 'Loading...';
    loading.classList.add('show');

    // Try fetch first
    try {
        console.log('Trying fetch...');
        const response = await fetch(pdfPath);
        console.log('Response status:', response.status);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const arrayBuffer = await response.arrayBuffer();
        console.log('PDF fetched, size:', arrayBuffer.byteLength);

        const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
        pdfDoc = await loadingTask.promise;

        console.log('PDF loaded successfully! Pages:', pdfDoc.numPages);

        loading.classList.remove('show');
        pdfCanvas.style.display = 'block';

        renderCurrentPage();
        updatePageInfo();
        return;
    } catch (error) {
        console.error('Fetch failed:', error.message);
        loading.textContent = 'Error loading PDF. Please check connection.';
    }
}

// Fallback: Load PDF using XMLHttpRequest
function loadPdfWithXHR(pdfPath) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', pdfPath, true);
        xhr.responseType = 'arraybuffer';

        xhr.onload = function () {
            if (xhr.status === 200) {
                try {
                    const arrayBuffer = xhr.response;
                    console.log('PDF fetched via XHR, size:', arrayBuffer.byteLength);

                    const loadingTask = pdfjsLib.getDocument({ data: arrayBuffer });
                    pdfDoc = loadingTask.promise;

                    pdfDoc.then(doc => {
                        console.log('PDF loaded via XHR! Pages:', doc.numPages);
                        loading.classList.remove('show');
                        pdfCanvas.style.display = 'block';
                        renderCurrentPage();
                        updatePageInfo();
                        resolve(doc);
                    }).catch(err => {
                        console.error('Error parsing PDF from XHR:', err);
                        reject(err);
                    });
                } catch (err) {
                    console.error('Error creating PDF from XHR:', err);
                    reject(err);
                }
            } else {
                console.error('XHR failed with status:', xhr.status);
                reject(new Error(`HTTP ${xhr.status}`));
            }
        };

        xhr.onerror = function () {
            console.error('XHR network error');
            reject(new Error('Network error'));
        };

        xhr.send();
    });
}

// Fallback: Load PDF using embed tag
function loadPdfViaEmbed(pdfPath) {
    console.log('Using embed fallback for:', pdfPath);
    const container = document.querySelector('.pdf-container');
    if (container) {
        container.innerHTML = `
            <div style="text-align: center; padding: 20px;">
                <embed type="application/pdf" 
                       src="${pdfPath}" 
                       width="100%" 
                       height="600px"
                       style="border: 1px solid #ddd; border-radius: 8px;">
                <p style="margin-top: 15px; color: #666; font-size: 14px;">
                    If PDF doesn't display above, 
                    <a href="${pdfPath}" target="_blank" style="color: #27ae60;">click here to open directly</a>
                </p>
            </div>
        `;
    }
    loading.classList.remove('show');
}

// Render current page with High DPI support
async function renderCurrentPage() {
    if (!pdfDoc) return;

    try {
        const page = await pdfDoc.getPage(currentPage);
        const ctx = pdfCanvas.getContext('2d', { alpha: false });

        // Calculate container dimensions
        const container = document.querySelector('.pdf-container');
        if (!container) return;

        // Get available space
        const containerWidth = container.clientWidth - 20; // Reduce padding slightly
        const containerHeight = container.clientHeight - 20;

        // Get the original viewport to calculate aspect ratio
        const baseViewport = page.getViewport({ scale: 1 });

        // Calculate scale to fit within container
        const scaleX = containerWidth / baseViewport.width;
        const scaleY = containerHeight / baseViewport.height;

        // Base scale to fit container (contain)
        let fitScale = Math.min(scaleX, scaleY);

        // High DPI Support + User Zoom
        // Use devicePixelRatio (e.g. 2.0) * userZoom (e.g. 1.0, 1.25)
        const pixelRatio = window.devicePixelRatio || 1;
        const currentZoom = window.userZoomLevel || 1.0;

        const renderScale = fitScale * pixelRatio * currentZoom;

        // Render viewport with the high-res scale
        const viewport = page.getViewport({ scale: renderScale });

        // Set actual canvas pixel dimensions (High Res)
        pdfCanvas.width = viewport.width;
        pdfCanvas.height = viewport.height;

        // Set CSS display dimensions (Visual Size)
        // fitScale * currentZoom gives the visual size in CSS pixels
        pdfCanvas.style.width = (viewport.width / pixelRatio) + 'px';
        pdfCanvas.style.height = (viewport.height / pixelRatio) + 'px';
        pdfCanvas.style.maxWidth = 'none';
        pdfCanvas.style.maxHeight = 'none';

        // Render with high quality settings
        const renderContext = {
            canvasContext: ctx,
            viewport: viewport,
            enableWebHost: false
        };

        await page.render(renderContext).promise;

        console.log(`Rendered page ${currentPage} at scale ${renderScale.toFixed(2)} (CSS scale ${fitScale.toFixed(2)})`);
    } catch (error) {
        console.error('Error rendering page:', error);
    }
}

// Update page info and buttons
function updatePageInfo() {
    if (pdfDoc) {
        pageInfo.textContent = `Page ${currentPage} of ${pdfDoc.numPages}`;
        prevBtn.disabled = currentPage <= 1;
        nextBtn.disabled = currentPage >= pdfDoc.numPages;
    }
}

