# Archie Overton - Portfolio Website

A modern, responsive portfolio website showcasing projects, skills, and professional experience in software engineering and cybersecurity.

## 🚀 Live Demo

Visit the live site: [https://archieovo.github.io/archie-overton/](https://archieovo.github.io/archie-overton/)

## ✨ Features

- **Dynamic Content**: Live GitHub repository integration via GitHub API
- **Responsive Design**: Mobile-first approach optimized for all devices
- **Interactive Navigation**: Smooth scroll with quick navigation pills
- **SEO Optimized**: Comprehensive meta tags and sitemap for search engines
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation support
- **Performance**: Lazy loading images, optimized builds, and fast load times

## 🛠️ Tech Stack

- **Frontend**: React 19.2.0
- **Build Tool**: Vite 7.2.2
- **Styling**: Custom CSS (no framework)
- **Icons**: Font Awesome 4.7.0
- **Fonts**: Google Fonts (Raleway, Figtree)
- **Deployment**: GitHub Pages with automated CI/CD

## 📦 Installation

### Prerequisites

- Node.js 20.x or higher
- npm

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/archieovo/archie-overton.git
cd archie-overton
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🏗️ Build

To create a production build:

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🚀 Deployment

This project is configured for automatic deployment to GitHub Pages.

### Automatic Deployment

1. Push changes to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Site will be live at `https://archieovo.github.io/archie-overton/`

### Manual Deployment

If needed, you can trigger deployment manually:

1. Go to the repository on GitHub
2. Navigate to Actions tab
3. Select "Deploy to GitHub Pages" workflow
4. Click "Run workflow"

### GitHub Pages Setup

Ensure GitHub Pages is configured:

1. Go to repository Settings
2. Navigate to Pages section
3. Source should be set to "GitHub Actions"
4. Branch: `main`

## 📁 Project Structure

```
archie-overton/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   ├── assets/                 # Static images and media
│   ├── robots.txt             # SEO robots file
│   └── sitemap.xml            # SEO sitemap
├── src/
│   ├── components/
│   │   ├── Header.jsx         # Navigation header
│   │   ├── Home.jsx           # Main content
│   │   ├── Footer.jsx         # Site footer
│   │   └── GitHubStats.jsx    # GitHub API integration
│   ├── App.jsx                # Root component
│   ├── main.jsx               # Entry point
│   ├── index.css              # Global styles
│   └── App.css                # App-specific styles
├── index.html                  # HTML template
├── vite.config.js             # Vite configuration
├── package.json               # Dependencies and scripts
└── README.md                  # Project documentation
```

## 🎨 Key Sections

- **Introduction**: Professional summary and career objectives
- **Skills**: Categorized technical skills with visual badges
- **Education**: Self-directed learning journey
- **Projects**: Featured work with technology tags
- **GitHub Stats**: Live repository data from GitHub API
- **Work Experience**: Professional placements and insights
- **Contact**: Multiple channels with availability status

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📈 Performance

- Lighthouse Score: 90+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

## 🔐 Security

- All external links use `rel="noopener noreferrer"`
- HTTPS enforced on GitHub Pages
- No sensitive data in client-side code
- GitHub API rate limiting handled gracefully

## 📝 License

This project is open source and available for educational purposes.

## 👤 Author

**Archie Overton**

- GitHub: [@archieovo](https://github.com/archieovo)
- LinkedIn: [Archie Overton](https://www.linkedin.com/in/archie-overton-2a36902b9)
- Email: archieoverton@hotmail.com

## 🤝 Contributing

This is a personal portfolio project. While direct contributions aren't accepted, feel free to fork and use as inspiration for your own portfolio!

## 📄 Acknowledgments

- Built with React and Vite
- Icons from Font Awesome
- Fonts from Google Fonts
- Hosted on GitHub Pages
