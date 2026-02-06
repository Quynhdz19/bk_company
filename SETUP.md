# Quick Setup Guide for InnoBKTech Portfolio

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The site will be available at `http://localhost:5173/` (or the next available port)

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

## 📁 Project Structure

```
bk_company/
├── src/
│   ├── components/          # All React components
│   │   ├── Header.jsx       # Navigation with smooth scroll
│   │   ├── Hero.jsx         # Hero section with animations
│   │   ├── About.jsx        # Company information
│   │   ├── Services.jsx     # Service offerings
│   │   ├── Portfolio.jsx    # Project showcase (images & videos)
│   │   ├── Technologies.jsx # Tech stack display
│   │   ├── Testimonials.jsx # Client reviews carousel
│   │   ├── Contact.jsx      # Contact form
│   │   └── Footer.jsx       # Footer with links
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles + animations
├── public/                  # Static assets
├── index.html              # HTML template
└── README.md               # Full documentation
```

## 🎨 Customization Guide

### Update Company Name
Search and replace "InnoBKTech" with your company name in:
- `src/components/Header.jsx`
- `src/components/Hero.jsx`
- `src/components/About.jsx`
- `src/components/Footer.jsx`
- `index.html`

### Change Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
      accent: '#your-color',
    },
  },
}
```

### Update Portfolio Projects
Edit `src/components/Portfolio.jsx`:
- Replace placeholder images with your project images
- Add video URLs for projects with video demos
- Update project descriptions and technologies

### Modify Services
Edit the `services` array in `src/components/Services.jsx`

### Update Contact Information
Edit `src/components/Contact.jsx` and `src/components/Footer.jsx`

## 📸 Adding Your Own Media

### Images
1. Place images in the `public` folder
2. Reference them like: `/your-image.png`
3. Or use external URLs (as currently implemented)

### Videos
1. Host videos externally or place in `public`
2. Update video URLs in Portfolio component
3. Videos support: autoplay on hover, controls in modal

## 🎯 Key Features

✅ Fully responsive design (mobile, tablet, desktop)
✅ Smooth scrolling navigation
✅ Portfolio with image & video support
✅ Interactive contact form
✅ Client testimonials carousel
✅ Technology stack showcase
✅ Modern animations and transitions
✅ SEO-friendly structure

## 🔧 Tech Stack

- **React 19** - UI Library
- **Vite 7** - Build Tool
- **Tailwind CSS 4** - Styling
- **PostCSS** - CSS Processing

## 📦 Deployment

### Vercel
```bash
npm run build
vercel deploy
```

### Netlify
```bash
npm run build
# Deploy the dist/ folder
```

### GitHub Pages
```bash
npm run build
# Copy dist/ contents to gh-pages branch
```

## 💡 Tips

1. **Replace placeholder content** with your actual company information
2. **Add real project images** to the Portfolio section
3. **Update testimonials** with real client feedback
4. **Configure contact form** to send to your email/backend
5. **Add analytics** (Google Analytics, etc.)
6. **Optimize images** for better performance

## 🐛 Troubleshooting

### Dev server won't start
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Tailwind styles not working
- Check `postcss.config.js` is correctly configured
- Ensure `@tailwindcss/postcss` is installed
- Clear browser cache

### Build errors
```bash
npm run build -- --debug
```

## 📞 Support

For issues or questions:
- Check the main README.md
- Review component code comments
- Contact: contact@innobktech.com

## 🎉 You're Ready!

Your portfolio website is now set up and ready to customize. Happy coding!
