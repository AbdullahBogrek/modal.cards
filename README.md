# getpopup

The easiest way to create high-converting popups for your website. Pick a template, customize it visually, and get a ready-to-use embed code — no coding required.

**Live demo:** [getpopup.site](https://getpopup.site)

## Features

- **12 Popup Templates** — Newsletter signups, pricing plans, announcements, login forms, and more
- **Visual Editor** — Customize colors, sizes, positions, content, and images with live preview
- **Smart Targeting** — Show popups based on device, scroll depth, time delay, exit intent, traffic source, and browser language
- **Typewriter Hero** — Rotating headline with typing animation showcasing different use cases
- **Live Template Carousel** — Hero section renders actual modal components in an animated carousel
- **Multi-language** — Full English and Turkish support with automatic browser language detection
- **Dark Mode** — System-aware theme toggle across all pages
- **Responsive** — Works on desktop, tablet, and mobile

## Tech Stack

- **Framework:** Next.js 12 (Pages Router)
- **Language:** TypeScript 4.8
- **Styling:** Tailwind CSS 3.1 + SCSS
- **State:** React Context API
- **Testing:** Jest 29 + React Testing Library 14 + Playwright
- **Deployment:** Docker + Cloudflare Pages

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app runs at [http://localhost:3000](http://localhost:3000).

### Docker

```bash
docker compose up -d --build
```

Serves at [http://localhost:6161](http://localhost:6161).

## Project Structure

```
├── pages/              # Next.js pages (index, generator)
├── components/
│   ├── Header/         # Navigation with anchor links
│   ├── Hero/           # Headline, CTA, carousel, stats
│   ├── HowItWorks/     # 4-step explanation section
│   ├── Features/       # 6-feature grid
│   ├── FAQ/            # Accordion section
│   ├── Footer/         # Columnar footer with links
│   ├── Generator/      # Template picker, appearance, content, targeting, settings
│   └── Modals/         # Modal1–Modal12 template components
├── contexts/           # ModalContext, Modal1Context, TranslationContext, ThemeContext
├── locales/            # en.json, tr.json
├── styles/             # globals.scss
└── __tests__/          # Unit and component tests
```

## Testing

```bash
# Run all unit tests
npm test

# Run with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm start` | Start production server |
| `npm test` | Run Jest tests |
| `npm run test:e2e` | Run Playwright E2E tests |
| `npm run storybook` | Start Storybook on port 6006 |

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/my-feature`)
3. Commit your changes (`git commit -m 'feat: add my feature'`)
4. Push to the branch (`git push origin feat/my-feature`)
5. Open a Pull Request

## License

[MIT](https://opensource.org/licenses/MIT)
