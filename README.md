# Sri Videm Showroom

Create a production-quality premium digital showroom platform for Sri Videm's Furniture, Hyderabad.

This is NOT an ecommerce website.

This is a modern digital showroom where visitors explore furniture collections and send inquiries via WhatsApp.

The website should feel like entering a premium furniture showroom rather than browsing an online shopping site.

The codebase should be clean, reusable, scalable and ready for future Supabase integration, Capacitor Android/iOS apps and an admin dashboard.

Use React, TypeScript, Tailwind CSS, React Router, Framer Motion and a reusable component architecture.

DESIGN PHILOSOPHY

The experience should feel similar to premium brands like

 BoConcept

 Natuzzi

 Minotti

 Restoration Hardware

Large whitespace

Elegant typography

Minimal UI

Luxury lighting

Soft shadows

Smooth animations

High-end furniture photography

Absolutely no clutter.

No discount banners.

No ecommerce look.

COLOR PALETTE

Background

#FAF8F5

Cards

#FFFFFF

Primary Text

#202020

Secondary Text

#666666

Accent

#B8895E

Footer

#151515

Border

rgba(0,0,0,0.08)

TYPOGRAPHY

Heading

Cormorant Garamond

Body

Manrope

Buttons

Manrope SemiBold

Elegant spacing.

Premium hierarchy.

WEBSITE STRUCTURE

Create these pages.

/

Home

/collections

/category/:slug

/product/:slug

/contact

/about

All pages should use React Router.

HOME PAGE STRUCTURE

The homepage must follow exactly this order.

SECTION 1

FULLSCREEN HERO

Height

100vh

Use ONLY the attached showroom facade images as the hero background.

Never use stock images.

The two attached showroom images should alternate automatically.

Behavior

Cross fade

Every 8 seconds

No slider arrows

No dots

Infinite loop

Each image should slowly zoom while visible.

Scale

1 → 1.05

Use GPU accelerated transitions.

Overlay

Dark warm gradient

Slight vignette

Glassmorphism text panel.

Hero Text

Furniture That Completes Every Home

Supporting Text

Discover beautifully crafted furniture collections for every room—from luxurious sofas and elegant dining sets to stylish bedrooms, office furniture and handcrafted wooden collections—all under one roof.

Buttons

Browse Collections

WhatsApp Inquiry

Animations

Hero fades

Buttons stagger

Header fades

Scroll indicator

Gentle bounce

SECTION 2

CATEGORY CAROUSEL

Heading

Browse Collections

Create a continuously moving horizontal carousel.

It should move automatically.

Pause on hover.

Allow manual dragging.

Cards

Rounded

Premium

Luxury icons

Soft shadows

Glow on hover

Categories

Sofas

Beds

Dining Sets

Wardrobes

Dressing Tables

TV Units

Coffee Tables

Office Furniture

Swing Sofas

Wooden Furniture

Display Units

Drawers

Chairs

Home Decor

Every category opens its own dedicated page.

Never filter products on the homepage.

SECTION 3

FEATURED COLLECTIONS

Large masonry layout.

Three premium banners.

Living Room Collection

Bedroom Collection

Dining Collection

Large photography.

Overlay text.

Image zoom on hover.

SECTION 4

WHY VIDEM'S

Premium icon cards.

Features

Premium Quality

Modern Designs

Affordable Luxury

Reliable Delivery

Customer Satisfaction

Use animated outline icons.

SECTION 6

VISIT OUR SHOWROOM

Left

Address

Phone

Business Hours

Buttons

Call

WhatsApp

Get Directions

Right

Embedded Google Map.

Rounded.

Shadow.

SECTION 6

Footer

Dark luxury footer.

CATEGORY PAGE

Each category opens its own page.

Examples

/category/sofas

/category/beds

/category/dining

/category/office

/category/swing

/category/dressing

Every category page should include

Hero Banner

Category Title

Short Introduction

Product Grid

WhatsApp CTA

Footer

PRODUCT PAGE

Large gallery.

Image zoom.

Product information.

Features.

Materials.

Related Products.

Floating WhatsApp Inquiry.

PRODUCT GRID

This is extremely important.

The browsing experience must remain premium on every screen size.

Do NOT shrink product cards excessively.

Maintain comfortable spacing and large product images.

Use the following responsive grid rules exactly:

Desktop (1440px+)

4 columns

Laptop (1024px–1439px)

4 columns

Tablet Landscape

3 columns

Tablet Portrait

2 columns

Mobile

Exactly 2 columns

Never use 1-column layouts for product browsing unless the screen becomes extremely narrow (below approximately 340px).

Each card should remain visually large and easy to browse.

Do not allow tiny cards or compressed layouts.

Every product card must contain:

 Large product image

 Product name

 Category

 Short description

 "View Details" button

 "WhatsApp Inquiry" button

Cards should have:

 Large border radius

 Soft shadow

 Smooth hover lift

 Image zoom

 Elegant spacing

 Consistent aspect ratio

Maintain equal spacing between all cards.

Images must always remain the focal point.

Browsing products on mobile should feel as comfortable as Instagram or Pinterest.

This responsive grid rule is mandatory throughout the application.

WHATSAPP

Floating button.

Visible on every page.

Bottom right.

Pulse animation.

Expand on hover.

Open WhatsApp.

RESPONSIVENESS

The application will later become a Capacitor app.

Design mobile first.

No horizontal scrolling.

Large touch targets.

Sticky header.

Sticky WhatsApp.

Comfortable spacing.

Optimized typography.

ANIMATIONS

Use Framer Motion.

Hero fade.

Parallax.

Crossfade backgrounds.

Image zoom.

Fade up.

Slide.

Reveal.

Cards lift.

Glass effects.

Nothing flashy.

Everything elegant.

PERFORMANCE

Lazy loading.

Image optimization.

60 FPS.

Preload hero images.

Fast page transitions.

Reusable components.

FUTURE READY

Architect the project so future features can be added without redesign:

 Supabase backend

 Owner login

 Product upload panel

 Category management

 Product search

 Product filters

 Multiple showroom branches

 WhatsApp API

 Inquiry management

 Analytics

 Capacitor Android & iOS apps

IMPORTANT

Use the attached showroom facade images only for the homepage hero background with an automatic cross-fade transition.

Use the attached furniture images as the initial product catalog.

Do not replace them with stock images.

The overall experience should feel like a premium digital showroom where users naturally explore collections, open category pages, browse products in a spacious responsive grid, view product details, and contact the showroom via WhatsApp or by visiting the physical location.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
