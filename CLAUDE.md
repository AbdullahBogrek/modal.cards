# modal.cards

## Overview
Modal card generator built with Next.js 12, React 18, TypeScript, Tailwind CSS, and SCSS.
Users select from 12 modal templates, then customize appearance, content, targeting, and settings.

## Tech Stack
- Next.js 12.3.1 (Pages Router)
- React 18.2.0
- TypeScript 4.8.3
- Tailwind CSS 3.1.8 + SCSS
- Storybook 6.5.12

## Architecture
- **Pages**: `pages/index.tsx` (single page app), `pages/_app.tsx` (context providers)
- **Components**: `components/` - Header, Hero, Generator (Templates, Appearance, Content, Targeting, Settings, CardPlaceholder), Modals (Modal1-Modal13), Features, FAQ, Footer
- **State**: React Context in `contexts/` - ModalContext (wizard steps), Modal1Context (modal customization), Modal2Context (unused), LanguageContext (language toggle)
- **Styles**: `styles/globals.scss` (Tailwind + custom SCSS classes), `tailwind.config.js`

## Development
```bash
npm install
npm run dev        # Start dev server (port 3000)
npm test           # Run Jest unit tests
npm run test:e2e   # Run Playwright E2E tests
npm run storybook  # Start Storybook (port 6006)
```

## Testing
- Jest 29 + React Testing Library 14 for unit/component tests
- Playwright for E2E tests
- Custom render wrapper: `test-utils/render.tsx` (wraps components in all context providers)
- Test files: `__tests__/` (unit), `e2e/` (E2E)

## Known Issues
- Modal2-Modal13 are hardcoded (not connected to context)
- Modal2Context not included in _app.tsx provider hierarchy
- "Get your Code" button handler is empty
- Webhook integration not implemented
- SVG attributes use HTML syntax instead of React camelCase
