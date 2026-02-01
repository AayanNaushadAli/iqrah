# Deployment Guide for Iqrah Quran Reader

## Quick Deployment to Netlify (Recommended)

### Option 1: Drag and Drop (Easiest)

1. Go to [Netlify Drop](https://app.netlify.com/drop)
2. Drag the entire `Iqrah` folder onto the page
3. Your site will be deployed instantly with a shareable link
4. (Optional) Add custom domain in Settings

### Option 2: Netlify CLI

```bash
# Install Netlify CLI
npm install netlify-cli -g

# Login to Netlify
netlify login

# Deploy from project folder
netlify deploy --dir=. --prod
```

## Deployment to GitHub Pages

1. Create a new repository on GitHub
2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit: Iqrah Quran Reader"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

3. Go to Repository Settings → Pages
4. Select "main" branch as source
5. Your site will be at: `https://YOUR_USERNAME.github.io/YOUR_REPO/`

## Deployment to Vercel

```bash
# Install Vercel CLI
npm install vercel -g

# Deploy
vercel --prod
```

## Project Structure for Deployment

```
Iqrah/
├── index.html          # Main HTML file
├── styles.css          # Styles
├── script.js           # JavaScript functionality
├── netlify.toml        # Netlify configuration
├── README.md           # Documentation
└── pdfs/               # Quran PDF files (114 Surahs)
    ├── quran-chapter-1-surah-al-fatiha-pdf.pdf
    ├── quran-chapter-2-surah-al-baqarah-pdf.pdf
    └── ...
```

## Features Ready for Deployment

- ✅ All 114 Surahs with PDF files
- ✅ PDF.js integration for rendering
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Keyboard navigation (arrow keys)
- ✅ Beautiful Arabic/English chapter names
- ✅ Chapter themes and illustrations

## Share Your Site!

Once deployed, share your link with:
- Family and friends
- Islamic communities
- Social media

**May Allah reward you for spreading His words! 🤲**

