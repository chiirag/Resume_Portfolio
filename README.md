# Gen AI Portfolio

A modern, responsive portfolio website showcasing Generative AI projects and expertise. Built with Next.js, React, TypeScript, and TailwindCSS.

## Features

- 🎨 Modern, beautiful UI with gradient effects and animations
- 📱 Fully responsive design for all devices
- ⚡ Fast and optimized with Next.js 14
- 🎯 Sections for About, Skills, Projects, Experience, and Contact
- 🌈 Smooth animations and transitions
- 🔥 Built with TypeScript for type safety

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **Deployment**: Ready for Vercel, Netlify, or any static hosting

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Update Personal Information

Edit `app/page.tsx` to update:
- Your name and title
- About section content
- Skills and expertise
- Project details
- Experience history
- Contact links (email, GitHub, LinkedIn)

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Color scheme uses CSS variables defined in `globals.css`

## Build for Production

```bash
npm run build
npm start
```

## Docker Support

This project includes Docker support for containerized deployment.

### Quick Start with Docker

```bash
docker-compose up -d
```

Access at [http://localhost:3000](http://localhost:3000)

For detailed Docker instructions, see [DOCKER.md](DOCKER.md)

## Deployment

### Option 1: Docker (Recommended for self-hosting)
See [DOCKER.md](DOCKER.md) for complete Docker deployment guide.

### Option 2: Vercel (Easiest for cloud deployment)
The easiest way to deploy is with [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel --prod
```

For complete step-by-step instructions, see [VERCEL_DEPLOYMENT.md](VERCEL_DEPLOYMENT.md)

### Option 3: Other Platforms
Or use Netlify, GitHub Pages, or any static hosting service.

## License

MIT License - feel free to use this template for your own portfolio!
