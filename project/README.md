# Tejavardhan Reddy Chilkur - DevOps Engineer Portfolio

A modern, responsive portfolio website showcasing DevOps expertise, cloud architecture skills, and professional achievements.

## Features

- **Single-page application** with smooth scrolling navigation
- **Dark/Light theme** toggle with system preference detection
- **Responsive design** optimized for all devices
- **Interactive chatbot** for portfolio Q&A
- **Performance optimized** for fast loading (<1.0s LCP target)
- **SEO optimized** with meta tags, Open Graph, and JSON-LD schema
- **Accessibility compliant** (WCAG AA standards)

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Deployment**: Vercel/Netlify ready

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation with scroll-spy
│   ├── Hero.tsx        # Landing section with typing animation
│   ├── About.tsx       # Skills and bio
│   ├── Highlights.tsx  # Achievement metrics
│   ├── Experience.tsx  # Professional experience
│   ├── Skills.tsx      # Technical skills categorized
│   ├── Projects.tsx    # Featured projects
│   ├── Resume.tsx      # Resume download & links
│   ├── Blogs.tsx       # Medium articles
│   ├── Contact.tsx     # Contact form & info
│   └── Chatbot.tsx     # Interactive Q&A bot
├── data/
│   └── portfolio.ts    # Content data
├── hooks/
│   ├── useTheme.ts     # Theme management
│   └── useScrollSpy.ts # Navigation highlighting
└── types/
    └── index.ts        # TypeScript definitions
```

## Key Features

### Performance Optimizations
- Vite for fast builds and HMR
- Lazy loading for images
- Optimized bundle splitting
- Efficient re-renders with React hooks

### SEO & Analytics
- Comprehensive meta tags
- Open Graph and Twitter Card support
- JSON-LD structured data
- Sitemap and robots.txt
- Cookie-less analytics ready

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- High contrast color ratios

## Deployment

The site is optimized for deployment on:
- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- Any static hosting provider

Build artifacts are generated in the `dist/` folder.

## Customization

### Content Updates
Edit `src/data/portfolio.ts` to update:
- Professional experience
- Skills and projects
- Contact information
- Chatbot Q&A responses

### Styling
- Primary theme colors in `tailwind.config.js`
- Component styles in individual `.tsx` files
- Global styles in `src/index.css`

## Contact

**Tejavardhan Reddy Chilkur**
- Email: reddytejavardhan@gmail.com
- Phone: +1 (901) 645-2738
- LinkedIn: [tejareddyyy](https://www.linkedin.com/in/tejareddyyy/)
- GitHub: [tejavardhann](https://github.com/tejavardhann)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS