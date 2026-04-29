# T3CKGROUP - System Documentation

## 1. Overview & Tech Stack
This project is a modern web application for T3CKGROUP, built with a performance-oriented React stack.
- **Framework**: React 19 + Vite
- **Routing**: `@generouted/react-router` (File-based routing built on React Router 7)
- **Styling**: Tailwind CSS v4, custom CSS variables
- **State Management**: Zustand
- **Animations & 3D**: GSAP (`@gsap/react`), Three.js (`three`), and OGL (`ogl`).
- **Icons**: Lucide React
- **Backend/Database Integration**: Supabase (`@supabase/supabase-js`)

## 2. Project Architecture
The application is structured inside the `src/` directory to separate concerns:
- `assets/`: Static assets such as custom fonts (`TacticSans`) and images.
- `components/`: Reusable React components, ranging from UI elements (Buttons, Accordions) to full layout sections (Navbar, Footer, HeroSection).
- `data/`: Contains static, mock data, and configuration objects. The navigation data has been specifically modularized under `src/data/nav/` into branch-specific files (e.g., `mainNav.js`, `eeocNav.js`) for easier maintenance and future CMS integration.
- `lib/`: Third-party library initializations (e.g., `supabase.js`).
- `pages/`: The file-based routing directory structure powered by Generouted.
- `store/`: Global state management slices utilizing Zustand (e.g., `useStore.js`).
- `utils/`: Helper functions, data formatters, and custom React hooks (e.g., `useNavbarHeight.jsx`, `useMegaMenu.jsx`).

## 3. Routing Architecture
The application utilizes file-based routing via `@generouted/react-router`. The directory tree in `src/pages/` automatically maps to the application's URLs:
- `/` -> `src/pages/index.jsx`
- `/main` -> `src/pages/main/index.jsx`
- `/main/field-operations` -> `src/pages/main/field-operations/index.jsx`
- `/main/strategic-aquisitions` -> `src/pages/main/strategic-aquisitions/index.jsx`
- **Other Branches:** Routes are created for various entities like `/dii`, `/eeoc`, `/t3cktrading`, `/tca-cbs`, `/tg-ent`, and `/tggt-opc`.
- `_app.jsx` acts as the global layout wrapper for the routing tree.

## 4. State Management
Zustand is used for lightweight, client-side global state management. The main store logic resides in `src/store/useStore.js`:
- **UI State (`useUIStore`)**: Manages global UI flags, such as whether the mobile/mega navigation menu is active (`isNavActive`).
- **Tab State (`useTabStore`)**: Manages the currently active tab across complex interfaces or layout variations (`activeTab`), useful for toggling between branch-specific content.

## 5. Styling Strategy
- **Tailwind CSS v4**: Serves as the primary tool for layout, responsive design, and utility styling.
- **Design System Tokens (`index.css`)**: 
  - The project leverages a heavily customized CSS variable theme within `@theme`.
  - Color palettes are strictly categorized into **TG RED SCALE** (primary branding) and **TACTICAL GRAY SCALE** (backgrounds, borders, text).
  - Modern P3 color gamut support is built-in via CSS `@supports` queries to ensure high-end Apple displays render vivid reds correctly.
  - Global CSS utility classes like `.wrapper`, `.flex-center`, and `.tg-box-shadow` ensure consistency and reduce markup bloat.

## 6. Components Breakdown
Components are categorized roughly by their scope and purpose:
- **Layout & Navigation**: `Navbar.jsx`, `Footer.jsx`, `MobileMenu.jsx`, `NavDropDown.jsx`, `SmallBanner.jsx`. (The navigation uses a unified mega-menu pattern).
- **Core Sections**: Page-level sections such as `HeroSection.jsx`, `MissionAndVision.jsx`, `ProductSpotlight.jsx`, `StrategicAcquisitions.jsx`, `ServicesSlider.jsx`.
- **Forms**: `Form.jsx` handles generic form submissions (e.g., Contact forms).
- **Micro-Components**: Highly reusable elements such as `PrimaryButton.jsx`, `SecondaryButton.jsx`, `Accordion.jsx`, `SpotlightCard.jsx`.

## 7. Data Flow & External Integrations
- **Navigation Data**: Recently refactored. The monolithic navigation structure was broken down. The `Navbar.jsx` dynamically ingests modularized data sources based on the active route or branch.
- **Supabase**: Backend-as-a-service logic is stubbed out in `src/lib/supabase.js`, handling database queries or authentication initialization.

## 8. Animations & Interactivity
The user interface prioritizes dynamic, smooth transitions and premium aesthetics:
- **GSAP**: Extensively used across layout components and page transitions to choreograph intricate micro-animations.
- **WebGL / 3D**: `Three.js` and `OGL` are integrated to support high-performance 3D visual assets or background effects, matching the high-tech, tactical branding of the company.
