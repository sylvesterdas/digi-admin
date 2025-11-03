# Overview

This is a website/blog platform built with Payload CMS and Next.js. It provides a full-featured content management system with support for pages, blog posts, categories, media management, and form submissions. The application features a headless CMS backend with a modern React-based frontend, offering both live preview and draft capabilities for content editors.

**Platform**: Migrated from Vercel to Replit (November 3, 2025)

# Recent Changes

**November 3, 2025 - Bayern Portal Transformation & Navigation Menu**
- Created new Payload CMS collections: Situations (life/business/authority categories) and Funding Programs
- Redesigned homepage with Bayern Portal blue theme and hero search section
- Implemented category buttons for citizens, businesses, and authorities
- Created situation card grid components with Lucide icons
- Built dynamic category pages for browsing situations by type
- Updated color scheme to Bayern blue (#0078A0 primary color)
- Added accessible navigation drawer with ARIA support (role="dialog", focus trap, keyboard navigation)
- Created new pages: Funding Programs, About, Help & Support, Popular Services
- Fixed homepage hydration issues with client-side search component

**November 3, 2025 - Vercel to Replit Migration**
- Updated Next.js server configuration to run on port 5000 with 0.0.0.0 binding for Replit compatibility
- Modified environment variable handling in next.config.js to support Replit domains while maintaining custom domain overrides
- Configured production deployment settings for autoscale deployment target
- Set up secure environment variables using Replit Secrets (DATABASE_URI, PAYLOAD_SECRET, CRON_SECRET, PREVIEW_SECRET, NEXT_PUBLIC_SERVER_URL)

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework**: Next.js 15 (App Router)
- Uses the App Router architecture with separate `(frontend)` and `(payload)` route groups
- Server-side rendering (SSR) by default with client components marked with `'use client'`
- Implements Next.js caching strategies (`unstable_cache`) with tag-based revalidation
- Supports both static and dynamic rendering based on content

**Styling**: Tailwind CSS with shadcn/ui components
- Custom CSS variables for theming (light/dark mode support)
- Component library from shadcn/ui (buttons, inputs, cards, etc.)
- Responsive design with mobile-first breakpoints
- Geist font family for typography

**State Management**: React hooks and context
- Theme provider for dark/light mode
- Header theme provider for contextual styling
- Form state managed through react-hook-form

**Content Rendering**: Block-based layout system
- Modular content blocks (Archive, CallToAction, Content, Form, MediaBlock, Banner, Code)
- Rich text rendering with Lexical editor
- Hero sections with multiple impact levels (high, medium, low)

## Backend Architecture

**CMS**: Payload CMS 3.62
- Headless CMS with GraphQL and REST APIs
- Admin panel at `/admin` route
- Collections: Pages, Posts, Categories, Media, Users, Forms
- Global configurations: Header, Footer
- Live preview and draft preview capabilities

**Database**: SQLite (via @payloadcms/db-sqlite adapter)
- Configured for development and production use
- Can be swapped for other databases (PostgreSQL, MongoDB) via adapter pattern
- Uses Drizzle ORM under the hood

**Content Structure**:
- **Pages**: Dynamic page builder with hero sections and layout blocks
- **Posts**: Blog posts with categories, authors, and rich content
- **Categories**: Taxonomies for organizing posts
- **Media**: Asset management with image optimization (Sharp)
- **Forms**: Dynamic form builder with email notifications
- **Users**: Authentication and authorization

**Access Control**:
- Role-based access (authenticated users vs. public)
- Published/draft status for content
- Custom access control functions (`authenticated`, `authenticatedOrPublished`, `anyone`)

## Content Features

**SEO**: Plugin-based SEO management
- Meta title, description, and Open Graph images
- Sitemap generation (next-sitemap)
- Customizable per page/post

**Search**: Full-text search functionality
- Search plugin with custom field overrides
- Category-aware search results
- Debounced search input

**Redirects**: Dynamic redirect management
- Database-driven redirects
- Supports internal (reference-based) and external redirects
- Automatic revalidation on changes

**Forms**: Dynamic form builder
- Custom field types (text, email, select, checkbox, etc.)
- Email notifications on submission
- Confirmation messages or redirect options

**Nested Docs**: Hierarchical page structure support

**Live Preview**: Real-time content preview
- Integration with Payload's live preview system
- Multiple device breakpoints (mobile, tablet, desktop)
- Preview mode with draft content

**Jobs/Scheduling**: Scheduled publishing
- `publishedAt` field for time-based publishing
- Hook-based population of publish dates

## Performance Optimizations

**Caching Strategy**:
- Document-level caching with `getCachedDocument`
- Global configuration caching with `getCachedGlobal`
- Tag-based invalidation on content changes
- Redirect caching to minimize database queries

**Image Optimization**:
- Next.js Image component for automatic optimization
- Sharp for server-side image processing
- Multiple image sizes (thumbnail, og, etc.)
- Focal point support for better cropping

**On-Demand Revalidation**:
- Hooks trigger revalidation on content changes
- Tag-based cache invalidation for specific resources
- Prevents stale content while maintaining performance

## External Dependencies

**Core Framework**:
- Next.js 15.4.4 (React framework with SSR/SSG)
- React 19 (UI library)
- Payload CMS 3.62 (Headless CMS)

**Database**:
- SQLite adapter (@payloadcms/db-sqlite)
- Can be replaced with PostgreSQL or other databases via adapter pattern

**Styling & UI**:
- Tailwind CSS (utility-first CSS framework)
- shadcn/ui components (Radix UI primitives)
- Geist font family
- Lucide React (icon library)

**Content & Rich Text**:
- Lexical editor (@payloadcms/richtext-lexical)
- prism-react-renderer (code syntax highlighting)

**Image Processing**:
- Sharp (server-side image optimization)

**Forms**:
- react-hook-form (form state management)

**Payload Plugins**:
- @payloadcms/plugin-seo (SEO management)
- @payloadcms/plugin-search (search functionality)
- @payloadcms/plugin-redirects (redirect management)
- @payloadcms/plugin-form-builder (dynamic forms)
- @payloadcms/plugin-nested-docs (hierarchical pages)

**Development Tools**:
- TypeScript (type safety)
- ESLint (code linting)
- Prettier (code formatting)
- Playwright (E2E testing)
- Vitest (integration testing)

**Deployment**:
- Replit autoscale deployment (migrated from Vercel)
- Custom URL handling via environment variables
- Secure secret management via Replit Secrets
- Payload Cloud integration support
- Production build: `pnpm run build`
- Production start: `pnpm start` (port 5000)