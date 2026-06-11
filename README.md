# Alkye Assignment

A Next.js application that displays articles in a horizontal carousel with full detail pages.

## Tech Stack

- **Next.js 16** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Embla Carousel** (client-side carousel)

## Features

- Fetches articles from an external API
- Horizontal carousel on home page with 1.5 slides visible on desktop, 1 slide on mobile
- Article cards with background image, prompt badge, and description overlay
- Detail page per article (`/[id]/details`)
- Responsive design across all viewports

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

### Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
```

### Start production server

```bash
npm start
```

### Lint

```bash
npm run lint
```

## Project Structure

```
├── app/
│   ├── [id]/details/page.tsx   # Article detail page
│   ├── globals.css              # Global styles + fonts
│   ├── layout.tsx               # Root layout with providers
│   └── page.tsx                 # Homepage with carousel
├── components/
│   ├── articleBox.tsx           # Article card component
│   ├── ArticleCarousel.tsx      # Embla carousel wrapper
│   └── header.tsx               # Page header
├── context/
│   └── ArticleContext.tsx       # Article data context + API fetch
├── assets/
│   └── fonts/                   # Custom local fonts
└── public/                      # Static assets
```

## Data Source

Articles are fetched from:
```
https://alkyetest-738240239910.us-central1.run.app/myapp/list/
```

The data is stored in React Context at the app level and shared between the homepage carousel and detail pages.
