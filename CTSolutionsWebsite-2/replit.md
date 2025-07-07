# CTSolutions Company Website

## Overview

This is a static multi-page React.js company website for CTSolutions, a technology solutions and training provider. The application is built as a modern single-page application (SPA) using React with TypeScript, featuring a responsive design system built on top of shadcn/ui components and Tailwind CSS.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Router**: Wouter for client-side routing
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Build Tool**: Vite for development and production builds
- **State Management**: TanStack Query (React Query) for data fetching and caching
- **Animations**: GSAP (GreenSock Animation Platform) for smooth animations and scroll triggers

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Development**: Hot module replacement via Vite middleware
- **Storage**: In-memory storage implementation with interface for future database integration

### Data Storage Solutions
- **Current**: MemStorage class providing in-memory data persistence
- **Prepared**: Drizzle ORM configured for PostgreSQL with Neon serverless database
- **Schema**: User management schema defined in shared directory
- **Migrations**: Drizzle Kit for database schema management

## Key Components

### Frontend Structure
```
client/
├── src/
│   ├── components/
│   │   ├── ui/           # shadcn/ui component library
│   │   ├── Layout.tsx    # Main layout wrapper
│   │   ├── Navbar.tsx    # Navigation component
│   │   └── Footer.tsx    # Footer component
│   ├── pages/            # Route-based page components
│   ├── hooks/            # Custom React hooks
│   └── lib/              # Utility functions and configurations
```

### Backend Structure
```
server/
├── index.ts      # Express server setup
├── routes.ts     # API route definitions
├── storage.ts    # Data storage interface and implementation
└── vite.ts       # Vite development server integration
```

### Shared Resources
```
shared/
└── schema.ts     # Database schema and type definitions
```

## Data Flow

1. **Client-Side Routing**: Wouter handles navigation between pages without full page reloads
2. **Component Rendering**: React components render with TypeScript type safety
3. **Styling Pipeline**: Tailwind CSS processes utility classes with PostCSS
4. **Animation System**: GSAP triggers animations based on scroll events and component lifecycle
5. **Data Fetching**: TanStack Query manages API calls and caching (when backend endpoints are implemented)
6. **Development Hot Reload**: Vite middleware provides instant updates during development

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React 18, React DOM, TypeScript
- **Routing**: wouter for lightweight client-side routing
- **UI Framework**: Radix UI primitives with shadcn/ui components
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **Data Fetching**: TanStack React Query
- **Animations**: GSAP with ScrollTrigger plugin
- **Forms**: React Hook Form with Hookform Resolvers
- **Database**: Drizzle ORM with Neon serverless PostgreSQL driver

### Development Tools
- **Build Tool**: Vite with React plugin
- **TypeScript**: Full type checking and compilation
- **PostCSS**: CSS processing with Tailwind and Autoprefixer
- **Replit Integration**: Development banner and error modal plugins

## Deployment Strategy

### Development Mode
```bash
npm run dev  # Starts Vite dev server with hot reload
```

### Production Build
```bash
npm run build  # Vite builds client + esbuild bundles server
npm start      # Runs production server
```

### Build Process
1. **Client Build**: Vite compiles React app to `dist/public/`
2. **Server Build**: esbuild bundles Express server to `dist/`
3. **Static Serving**: Production server serves built client assets
4. **Database Setup**: `npm run db:push` applies schema changes

### Environment Configuration
- **Development**: Vite dev server with Express API proxy
- **Production**: Express serves static files and API routes
- **Database**: PostgreSQL connection via `DATABASE_URL` environment variable

## Changelog

```
Changelog:
- July 06, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```