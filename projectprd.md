# Project Documentation: Aux Délices du Maroc

## 1. Executive Summary

This document provides a comprehensive overview of the "Aux Délices du Maroc" restaurant web application. The project is a modern, performant, and secure website designed to serve as the restaurant's primary digital presence.

The core objective of the recent development session was to pivot the application from a dynamic, admin-editable platform to a streamlined, static-first website optimized for public use. This involved the complete removal of the administrative backend, user authentication, and in-page editing functionalities, thereby hardening the application's security and simplifying its maintenance for production deployment.

---

## 2. Technology Deep Dive

The application is built on a carefully selected, modern tech stack designed for performance, developer experience, and scalability.

- **Framework**: **[Next.js](https://nextjs.org/) (v14) with App Router**
  - **Why**: The App Router enables a flexible hybrid approach of server-side rendering (SSR) for dynamic content and static site generation (SSG) for content that rarely changes. This results in excellent SEO and fast page loads.
- **User Interface**: **[React](https://reactjs.org/) (v18)**
  - **Why**: As the industry standard for building interactive user interfaces, React's component-based architecture allows for reusable and maintainable UI code.
- **Styling**: **[Tailwind CSS](https://tailwindcss.com/) (v4)**
  - **Why**: A utility-first CSS framework that allows for rapid UI development without leaving the HTML. It ensures a consistent design system and is highly optimizable, purging unused styles for a minimal production CSS file.
- **Backend & Database**: **[Convex](https://www.convex.dev/)**
  - **Why**: Convex provides a seamless full-stack development experience with a real-time database and serverless TypeScript functions. It was initially used for both content delivery and management. Post-refactor, it now serves as a highly reliable, read-only data source for the menu and gallery.
- **Email Service**: **[Resend](https://resend.com/)**
  - **Why**: A modern, developer-focused email API that makes sending transactional emails simple and reliable. It is integrated to handle all reservation notifications.
- **Email Templates**: **[React Email](https://react.email/)**
  - **Why**: Enables the creation of beautiful, robust email templates using React components. This approach makes email design as simple as building a web page and ensures consistency across different email clients.
- **Language**: **[TypeScript](https://www.typescriptlang.org/)**
  - **Why**: TypeScript enhances JavaScript with static typing, which improves code quality, reduces runtime errors, and provides a superior developer experience through autocompletion and type inference.

---

## 3. In-Depth Project Structure

The project follows a logical structure that separates concerns and aligns with Next.js and Convex best practices.

```
/
├── convex/
│   ├── schema.ts         # Defines the database schema (tables and fields)
│   ├── contact.ts        # Backend logic for contact/reservation form
│   ├── gallery.ts        # Backend query for fetching gallery images
│   ├── hero.ts           # Backend query for fetching hero banner content
│   └── menu.ts           # Backend query for fetching menu items
│
├── public/               # All static assets, directly served
│   └── gallery/          # Restaurant and food images
│
├── src/
│   ├── app/              # Core of the Next.js application
│   │   ├── api/          # Server-side API routes
│   │   │   └── reservations/
│   │   │       └── route.ts # Fallback endpoint for reservation emails
│   │   │
│   │   ├── components/   # Global, reusable React components (e.g., Navbar, Footer)
│   │   │
│   │   ├── (public_routes)/
│   │   │   ├── notre-carte/page.tsx   # The menu page
│   │   │   ├── galerie/page.tsx     # The image gallery page
│   │   │   └── reservation/page.tsx # The reservation form page
│   │   │
│   │   ├── layout.tsx    # The root layout, wraps all pages
│   │   └── globals.css   # Global styles and Tailwind CSS definitions
│   │
│   ├── emails/
│   │   └── ReservationEmail.tsx # React Email component for notifications
│   │
│   └── lib/
│       └── convex.ts     # Convex client initialization and configuration
│
└── projectprd.md         # This documentation file
```

---

## 4. Feature Breakdown

### Reservation System: A Two-Pronged Approach

The reservation system is engineered for high reliability:

1.  **Primary Path (Convex)**: On form submission, the frontend first calls a Convex mutation (`contact/createMessage`). This function writes the reservation data to the database and schedules a Convex action to send an email via Resend. This is fast and robust.
2.  **Fallback Path (Next.js API)**: If the Convex mutation fails (e.g., due to a network issue or a temporary Convex outage), the frontend's error-handling logic immediately makes a second request to a server-side API route at `/api/reservations`. This Next.js endpoint uses Resend to send the notification email directly.

This dual-path architecture ensures that a reservation is never lost, providing a resilient and professional experience.

---

## 5. Session Refactor: From Dynamic to Static

The core of this session was a strategic pivot to enhance security and performance.

1.  **Complete Admin Panel Removal**:
    - Deleted the entire `src/app/admin` directory.
    - Removed all related routing, state management, and UI components that were specific to the admin experience.
2.  **Elimination of In-Page Editing**:
    - Deleted the `EditableText` and `EditableImage` components.
    - Removed the `useEditMode` provider and all associated logic that toggled the application between "view" and "edit" modes.
3.  **Backend Hardening**:
    - Refactored all Convex function files (`convex/*.ts`).
    - Deleted all `mutation` functions used for creating, updating, or deleting data (e.g., `createMenuItem`, `updateImage`, `deleteHeroEvent`).
    - The backend is now effectively read-only, which significantly reduces the attack surface.
4.  **Authentication System Uninstall**:
    - The `@clerk/nextjs` package was removed from the project's dependencies.
    - Deleted the `clerk-provider.tsx` and all related shims.
    - Removed the `ClerkRootProvider` from the root layout, severing all ties to the authentication service.
5.  **Rigorous Verification**:
    - Conducted end-to-end testing of the reservation form.
    - Diagnosed and resolved an invalid `RESEND_API_KEY` environment variable issue by creating and running a dedicated test script (`reservation-test.mjs`).
    - Ran a production build (`npm run build`) to ensure the refactored application compiles without errors and is ready for deployment.

---

## 6. Deployment Readiness

The application is fully prepared for production deployment.

### Pre-Deployment Checklist:

- [ ] **Environment Variables**: Ensure the following are set in the hosting provider's environment settings:
  - `NEXT_PUBLIC_CONVEX_URL`
  - `RESEND_API_KEY`
  - `CONTACT_TARGET_EMAIL` (optional, defaults to `resa.addm@gmail.com`)
- [ ] **Git Repository**: All changes have been committed to the `main` branch.
- [ ] **Domain & DNS**: The production domain is correctly configured to point to the hosting provider.

## 7. Potential Future Enhancements

- **Online Ordering System**: Integration with a payment gateway to allow customers to order food online for pickup or delivery.
- **Blog/Events Section**: A section for the restaurant to post updates, special events, or blog posts about Moroccan cuisine. This would be a good candidate for a headless CMS.
- **Customer Reviews**: A system to display customer testimonials, potentially integrated with a platform like Google Reviews.
