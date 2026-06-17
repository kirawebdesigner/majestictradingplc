# App Flow

## Homepage Journey
1. Visitor lands on a full-bleed visual hero with Majestic positioning and primary CTAs.
2. Quick capability cards establish multidisciplinary scope.
3. About section explains the integrated studio-and-build model.
4. Service cards make the offering scannable.
5. Why Choose Us and Process sections reduce purchase risk.
6. Featured Projects demonstrate likely project range using clearly marked placeholders.
7. Expertise and contact sections guide inquiry.

## Navigation
- Desktop: fixed translucent navigation with section anchors.
- Mobile: compact fixed header with animated drawer menu.

## Data Flow
- Static content arrays render services, projects, process, trust metrics, and navigation.
- Framer Motion handles viewport-triggered reveals.
- Local React state controls mobile menu open/close.

## Component Hierarchy
- `App`
- `Header`
- `Hero`
- `MetricStrip`
- `SectionIntro`
- `About`
- `Services`
- `WhyChooseUs`
- `Process`
- `Projects`
- `Expertise`
- `Contact`
- `Footer`
