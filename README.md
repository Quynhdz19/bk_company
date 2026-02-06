# InnoBKTech - Portfolio Website

A modern, responsive portfolio website for a Web App & Blockchain development agency built with React and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Fully responsive across all devices
- **Interactive Portfolio**: Showcase projects with images and video support
- **Contact Form**: Easy-to-use contact form for client inquiries
- **Technology Stack Display**: Highlight your tech expertise
- **Client Testimonials**: Rotating testimonial carousel
- **Services Section**: Detailed service offerings

## Tech Stack

- **React 19** - Modern UI library
- **Vite 7** - Fast build tool and dev server
- **Tailwind CSS v4** - Next-generation utility-first CSS framework
- **React Hooks** - State management

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd bk_company
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
bk_company/
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Navigation header
│   │   ├── Hero.jsx         # Hero section
│   │   ├── About.jsx        # About section
│   │   ├── Services.jsx     # Services showcase
│   │   ├── Portfolio.jsx    # Projects portfolio
│   │   ├── Technologies.jsx # Tech stack display
│   │   ├── Testimonials.jsx # Client testimonials
│   │   ├── Contact.jsx      # Contact form
│   │   └── Footer.jsx       # Footer section
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html              # HTML template
├── package.json            # Dependencies
├── tailwind.config.js      # Tailwind configuration
└── vite.config.js          # Vite configuration
```

## Customization

### Updating Content

1. **Company Information**: Edit the text content in each component file
2. **Colors**: Modify the color scheme in `src/index.css` using `@theme` directive (Tailwind v4)
3. **Projects**: Update the projects array in `src/components/Portfolio.jsx`
4. **Services**: Edit the services array in `src/components/Services.jsx`
5. **Technologies**: Update tech stack in `src/components/Technologies.jsx`
6. **Contact Info**: Modify contact details in `src/components/Contact.jsx`

### Adding Images

- Place images in the `public` folder
- Update image references in components
- For portfolio projects, you can add both images and videos

### Styling

- Global styles are in `src/index.css`
- Tailwind utilities are used throughout components
- Custom animations are defined in `index.css`

## Features to Implement

- [ ] Blog section
- [ ] Multi-language support
- [ ] Dark mode toggle
- [ ] Backend integration for contact form
- [ ] CMS integration
- [ ] Analytics integration

## License

MIT License - feel free to use this template for your own projects.

## Support

For questions or issues, please contact: contact@innobktech.com
# bk_company
