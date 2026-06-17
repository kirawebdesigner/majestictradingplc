# Design System

## Direction
Premium construction/interior studio aesthetic inspired by the Strux template: full-bleed imagery, deep teal, white space, rounded pill CTAs, subtle borders, large Inter Display headings, and scroll-driven reveals.

## Colors
- Deep Teal: `#00303f`
- Ink Teal: `#0e2730`
- Action Teal: `#177896`
- Soft Teal: `#305763`
- Paper: `#ffffff`
- Warm Off White: `#fafafa`
- Muted Text: `#676e78`
- Border: `rgba(0, 48, 63, 0.12)`
- Gold Accent: `#c59b52`

## Typography
- Primary: Inter, system fallback.
- Display: Inter Display, Inter, system fallback.
- H1: large condensed line-height, high weight.
- Body: 16-18px, readable line-height.

## Layout
- Max width: 1400px.
- Section padding: 96-140px desktop, 72-96px tablet, 56-72px mobile.
- Cards: 8-12px radius, never nested.
- Buttons: pill structure with circular icon segment, mirroring Strux interaction language.

## Motion
- Page elements reveal from `translateY(50px)` to settled with opacity fade.
- Hover states use image scale, CTA icon translation, and border/color shifts.
- Reduced-motion media query disables decorative movement.
