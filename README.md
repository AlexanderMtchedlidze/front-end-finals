# StreamFlix - Movie Streaming Website

## Project Overview

A modern, responsive movie streaming website built with HTML, CSS, and JavaScript. This project demonstrates clean code practices, semantic HTML5 structure, CSS animations, and dynamic content loading.

## Features

### ✅ All Requirements Met:

**HTML (5 points):**
- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Proper document structure
- Meta tags for SEO and viewport
- ARIA labels for accessibility
- DRY principle with reusable classes

**CSS (5 points):**
- CSS variables for all colors (`:root`)
- Responsive design (1440px desktop, 420px mobile)
- @keyframes animations: `fadeInUp`, `fadeIn`, `pulse`
- :hover effects on all interactive elements
- Modern dark theme design

**JavaScript (10 points):**
- Burger menu functionality for mobile navigation
- Fetch API loading movie data from JSON
- Fixed header on scroll
- Dynamic content rendering
- Error handling
- Smooth scroll navigation

## Project Structure

```
movie-website/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styling
├── js/
│   └── script.js       # JavaScript functionality
├── data/
│   └── movies.json     # Movie data
└── README.md           # This file
```

## Design Specifications

### Color Palette:
- **Primary Blue**: #3b82f6
- **Primary Purple**: #9333ea
- **Dark Background**: #020617
- **Dark Card**: #0f172a
- **Text White**: #ffffff
- **Text Gray**: #94a3b8
- **Yellow Star**: #eab308

### Typography:
- **Font Family**: System fonts (San Francisco, Segoe UI, Roboto)
- **Hero Title**: 56px (desktop), 28px (mobile)
- **Section Title**: 40px (desktop), 28px (mobile)
- **Body Text**: 18px (desktop), 16px (mobile)

### Breakpoints:
- **Desktop**: 1440px - Full layout with 2-column movie grid
- **Tablet**: 768px - Burger menu appears
- **Mobile**: 420px - Single column, optimized spacing

## Key Features

### 1. Burger Menu (Mobile)
- Animated hamburger icon
- Slide-in navigation drawer
- Click outside to close
- Smooth transitions

### 2. Featured Movie Hero
- Large banner section
- Dynamic content from JSON
- Rating badge with star icon
- Call-to-action button with gradient

### 3. Movie Grid
- Responsive 2-column (desktop) / 1-column (mobile)
- Movie cards with hover effects
- Rating display
- Smooth animations

### 4. Fixed Header on Scroll
- Header becomes fixed after 50px scroll
- Added shadow effect when scrolled
- Smooth transition

## Animations

**@keyframes fadeInUp:**
- Duration: 1s
- Effect: Fade in with upward movement
- Applied to: Hero content elements

**@keyframes fadeIn:**
- Duration: 0.5s
- Effect: Simple fade in
- Applied to: Movie cards

**@keyframes pulse:**
- Duration: 8s
- Effect: Pulsing scale animation
- Applied to: Hero background

## How to Use

1. **Open in Browser:**
   - Simply open `index.html` in any modern web browser

2. **Local Development Server:**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```

3. **View Responsive Design:**
   - Desktop: View at full width (1440px)
   - Mobile: Resize browser to 420px or use device emulator

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)  
- Safari (latest)
- Mobile browsers

## Technical Implementation

### Semantic HTML5:
- `<header>` for site header
- `<nav>` for navigation
- `<main>` for main content
- `<section>` for content sections
- `<footer>` for site footer

### CSS Best Practices:
- CSS variables for maintainability
- Mobile-first responsive approach
- Smooth transitions and animations
- Modern gradient effects
- Backdrop blur for header

### JavaScript Functionality:
- Event-driven architecture
- Async/await for data fetching
- Error handling for network requests
- DOM manipulation
- Event listeners for interactivity

## Credits

**Design inspired by**: Modern streaming platforms
**Icons**: Inline SVG icons
**Images**: Placeholder emoji for demo purposes

## License

Educational project - created for final exam demonstration.
# front-end-finals
