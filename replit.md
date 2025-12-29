# Union Crest Holdings LLC Website

## Overview
A professional real estate investment company website for Union Crest Holdings LLC, a multi-member run partnership LLC based in Texas. The website showcases the company's real estate investment and property development services.

## Purpose
The Limited Liability Company engages in all phases of real estate investment and property development including:
- Acquisition, rehabilitation, improvement, management, and disposition of properties
- Residential, commercial, and raw land properties
- Traditional and specialized channels (government auctions, distressed sales)
- United States and international markets

## Tech Stack
- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **Backend**: Express.js
- **Database**: PostgreSQL with Drizzle ORM
- **State Management**: TanStack Query

## Project Structure
```
client/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── navigation.tsx
│   │   ├── hero-section.tsx
│   │   ├── value-proposition.tsx
│   │   ├── investment-focus.tsx
│   │   ├── stats-section.tsx
│   │   ├── portfolio-preview.tsx
│   │   ├── partnership-section.tsx
│   │   ├── contact-section.tsx
│   │   ├── footer.tsx
│   │   └── theme-toggle.tsx
│   ├── pages/            # Page components
│   │   └── home.tsx
│   ├── hooks/            # Custom React hooks
│   └── lib/              # Utilities
server/
├── db.ts                 # Database connection
├── routes.ts             # API routes
├── storage.ts            # Data access layer
└── index.ts              # Server entry point
shared/
└── schema.ts             # Database schema & types
```

## Features
1. **Hero Section**: Full-width background with company tagline and CTAs
2. **Value Proposition**: Three-column grid showcasing approach
3. **Investment Focus**: Property type categories with imagery
4. **Stats Section**: Key performance metrics
5. **Portfolio Preview**: Featured property cards
6. **Partnership Section**: Partnership benefits and CTA
7. **Contact Form**: Form with validation and database persistence
8. **Dark/Light Mode**: Theme toggle with localStorage persistence

## Database Schema
- `users`: User accounts (id, username, password)
- `contact_inquiries`: Contact form submissions (id, name, email, phone, company, inquiry_type, message)

## API Endpoints
- `POST /api/contact`: Submit a contact inquiry
- `GET /api/contact`: Retrieve all contact inquiries

## Design
- **Fonts**: Inter (headings/UI), Lora (body text)
- **Color Scheme**: Deep navy primary with professional neutrals
- **Responsive**: Mobile-first design with breakpoints

## Development Commands
- `npm run dev`: Start development server
- `npm run db:push`: Push schema changes to database
