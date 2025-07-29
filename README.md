This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details. thank you [cc @bforbilly24]

### Structure of Project

```
└── 📁src
    └── 📁actions
        └── get-achievements.js
        └── get-documents.js
        └── get-news.js
        └── get-programs.js
        └── get-users.js
    └── 📁app
        └── 📁dokumentasi-kegiatan
            └── page.jsx
        └── favicon.ico
        └── 📁jendela-berita
            └── 📁[jendelaId]
                └── page.jsx
            └── page.jsx
        └── layout.jsx
        └── not-found.jsx
        └── page.jsx
        └── 📁prestasi
            └── 📁[prestasiId]
                └── page.jsx
            └── page.jsx
        └── 📁program-kerja
            └── 📁[userSlug]
                └── 📁[programId]
                    └── page.jsx
                └── page.jsx
            └── page.jsx
    └── 📁components
        └── 📁cards
            └── achievement-card.jsx
            └── news-card.jsx
            └── news-latest-card.jsx
        └── 📁carousel
            └── embla-carousel-arrow-buttons.jsx
            └── embla-carousel-dot-button.jsx
        └── 📁container
            └── container-banner.jsx
        └── 📁footer
            └── footer.jsx
        └── 📁global
            └── loader.jsx
            └── responsive-pagination.jsx
        └── 📁header
        └── 📁miscellaneous
            └── max-width-wrapper.jsx
            └── not-ready-responsive.jsx
            └── scroll-to-anchor.jsx
        └── 📁navigation
            └── header.jsx
            └── mobile-navbar.jsx
            └── navbar.jsx
        └── 📁providers
            └── progress-bar-provider.jsx
        └── 📁sections
            └── 📁achievement
                └── achievement-section.jsx
                └── detail-achievement-section.jsx
            └── 📁documentation
                └── documentation-section.jsx
            └── 📁home
                └── advertisement-divider-section.jsx
                └── article-section.jsx
                └── aside-section.jsx
                └── hero-section.jsx
                └── principal-section.jsx
                └── structural-section.jsx
            └── 📁institution
                └── original-institution-section copy.jsx
                └── test-detail-instituion-section.jsx
                └── test-institution-section.jsx
            └── 📁news
                └── detail-news-section.jsx
                └── news-section.jsx
            └── section.jsx
            └── title-section.jsx
            └── 📁work-program
                └── detail-work-program-section.jsx
                └── work-program-section.jsx
        └── 📁splash
            └── splash-screen.js
        └── 📁ui
            └── 📁aceternity
                └── animated-list.jsx
            └── 📁magicui
                └── dock.jsx
                └── marquee.jsx
            └── 📁shadcn
                └── button.jsx
                └── card.jsx
                └── carousel.jsx
                └── collapsible.jsx
                └── command.jsx
                └── dialog.jsx
                └── pagination.jsx
                └── popover.jsx
                └── select.jsx
                └── separator.jsx
                └── sheet.jsx
                └── skeleton.jsx
                └── tooltip.jsx
    └── 📁constants
        └── list-institution.js
        └── nav-links.jsx
        └── socmed.js
        └── structure.js
    └── 📁hooks
    └── 📁lib
        └── navigation.js
        └── utils.js
    └── 📁styles
        └── globals.css
    └── 📁utils
        └── format-date.js
        └── generate-slug.js
```
