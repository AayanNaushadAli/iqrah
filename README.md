# Iqrah - Responsive Quran Reading App with PDF Support

A modern, responsive Quran reading application that adapts beautifully to all screen sizes - from mobile phones to desktop computers. Now integrated with PDF support for viewing complete chapters!

## Features

✨ **Fully Responsive Design**
- Mobile-first approach (320px and above)
- Optimized layouts for tablets (768px) and desktops (1024px+)
- Adaptive navigation with collapsible sidebar

📱 **User-Friendly Interface**
- Clean, modern design with intuitive navigation
- Beautiful gradient header with dark theme support
- Smooth animations and transitions
- Touch-friendly buttons and controls

📖 **PDF Reading Features**
- View complete Quran chapters as PDFs
- All 114 Surahs integrated with their PDF files
- Download button to save each chapter locally
- Embedded PDF viewer for seamless reading
- Display chapter information (name, verse count)

⌨️ **Navigation**
- Click on any Surah from the sidebar or mobile menu
- Use arrow keys to navigate between chapters (Left/Right)
- Download individual chapter PDFs

## Responsive Breakpoints

### Mobile (480px and below)
- Full-width layout
- Collapsible menu hamburger button
- Single column content
- Simplified controls

### Tablets (481px - 768px)
- Two-column layout with visible sidebar
- Optimized spacing and padding
- Medium-sized text

### Desktop (769px and above)
- Full two-column layout
- Permanent sidebar navigation
- Large, readable text
- Maximum reading comfort

## File Structure

```
Iqrah/
├── index.html      # Main HTML structure
├── styles.css      # Responsive CSS with media queries
├── script.js       # JavaScript functionality
├── README.md       # This file
├── pdfs/           # Directory for Quran chapter PDFs
│   ├── chapter-1.pdf
│   ├── chapter-2.pdf
│   ├── ...
│   └── chapter-114.pdf
└── extract_pdf.py  # PDF extraction utility
```

## How to Use

### Setup
1. **Add PDF Files**: Place your Quran chapter PDFs in the `pdfs/` directory
2. **Name them correctly**: Use the pattern `chapter-1.pdf`, `chapter-2.pdf`, etc.
3. **Open the App**: Open `index.html` in your web browser

### Reading
1. **Select a Surah**: Click on any Surah from the sidebar (desktop) or menu button (mobile)
2. **View PDF**: The chapter PDF will display in the embedded viewer
3. **Download**: Use the download button to save the PDF locally
4. **Navigate**: Use arrow keys to jump between chapters

## Technical Details

### HTML Structure
- Semantic HTML5 elements
- Accessible header, nav, main, and footer
- Mobile-first meta viewport tag

### CSS Features
- CSS Custom Properties (variables) for theming
- Flexbox for responsive layouts
- Media queries for all screen sizes
- Smooth transitions and animations
- Responsive typography scaling

### JavaScript Functionality
- Dynamic Surah loading
- Verse pagination system
- Mobile menu toggle
- Keyboard navigation support
- Event delegation for efficient handling

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Change PDF Directory
If you want to use a different directory for PDFs, edit in `script.js`:
```javascript
const pdfDirectory = "pdfs/"; // Change this path
```

### Modify Surah Information
Edit the `quranData` array in `script.js` to update chapter names, verse counts, or PDF file names

## Future Enhancements

- [ ] Search functionality by Surah name
- [ ] Multiple PDF viewer formats (PDF.js, etc.)
- [ ] Bookmark favorite chapters
- [ ] Dark mode toggle
- [ ] Font size adjustment for PDFs
- [ ] Translation overlays
- [ ] Audio Quran playback
- [ ] Offline PDF support

## License

Open source project for educational purposes.

## Credits

Made with ❤️ for Quran readers everywhere.
