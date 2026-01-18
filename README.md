# Synapse — Strategic Component System

A modular, high-performance UI component system designed for modern business and consulting websites. Combines an interactive accordion with visual storytelling, built with semantic HTML, vanilla JavaScript, and clean CSS.

---

## Overview

Synapse is a **dual-panel layout component** featuring a numbered accordion interface for service detailing alongside a contextual hero image. It’s built for clarity, engagement, and seamless integration into corporate, consulting, or portfolio sites.

<img width="1920" height="1126" alt="synapse" src="https://github.com/user-attachments/assets/036e2b0a-1d4c-4cca-9966-603f8cde4bd8" />

## Live Deployment

[View Live Demo](https://lefajmofokeng.github.io/Synapse)  

---

## Core Features

- **Interactive Accordion**: Smooth height-based animations with single-open behavior
- **Typography Pairing**: Inter (modern) + Playfair Display (elegant italic) for visual hierarchy
- **Responsive Grid**: Adapts from 2-column desktop to stacked mobile layout
- **Accessible UI**: Semantic HTML, keyboard-navigable, ARIA-ready
- **Performance**: Zero dependencies, vanilla JS, optimized CSS transitions
- **Customizable**: CSS variables and modular class structure

---

## Tech Stack & Integration

### Built With
- **HTML5**: Semantic, SEO-friendly markup
- **CSS3**: Flexbox, Grid, transitions, and modern selectors
- **Vanilla JavaScript**: Lightweight accordion logic with smooth animations

### Compatible With
- **Static Site Generators**: Hugo, Jekyll, 11ty, Gatsby
- **Frontend Frameworks**: Vue.js, React (as a standalone component)
- **CMS Platforms**: WordPress (as a custom block), Webflow (via embed)
- **Build Tools**: Webpack, Vite, Parcel (import-ready)
- **Styling Systems**: Can be wrapped with Tailwind, SCSS, or CSS-in-JS

---

## Project Structure

```
synapse/
├── index.html          # Component markup
├── style.css           # Complete styling (responsive, themed)
├── script.js           # Accordion interaction logic
└── README.md
```

---

## Getting Started

### 1. Basic Usage
Clone or download the component and include the three files in your project:

```html
<link rel="stylesheet" href="path/to/style.css">
<script src="path/to/script.js" defer></script>
```

### 2. Framework Integration

#### **React Example**
```jsx
import './style.css';
import { useEffect } from 'react';

export default function SynapseComponent() {
  useEffect(() => {
    // Initialize accordion logic if needed
  }, []);

  return (
    <section className="se-container">
      {/* Header and grid structure */}
    </section>
  );
}
```

#### **Vue 3 Example**
```vue
<template>
  <section class="se-container">
    <!-- Synapse markup -->
  </section>
</template>

<script setup>
import './style.css';
</script>
```

### 3. CMS Integration (WordPress)
- Create a custom block using `register_block_type`
- Enqueue CSS/JS files in your theme
- Use PHP to render the HTML structure dynamically

---

## Customization

### Theming
Modify CSS variables in `:root` (add to `style.css`):

```css
:root {
  --primary-color: #2b26c7;
  --text-dark: #111;
  --border-color: #e5e5e5;
  --transition-timing: cubic-bezier(0.4, 0, 0.2, 1);
}
```

### Content
- Replace titles, descriptions, and list items
- Update the hero image URL in `index.html`
- Modify button link and text

### Behavior
Adjust accordion logic in `script.js`:
- Change `transition` duration
- Enable/disable single-open behavior
- Add keyboard navigation (Tab/Enter support)

---

## API & Extensions

### JavaScript API
The `toggleAccordion` function is exposed globally. You can trigger opens/closes programmatically:

```js
// Open the second item
const header = document.querySelector('.se-acc-item:nth-child(2) .se-acc-header');
toggleAccordion(header);
```

### Potential Extensions
1. **Lazy-load images**: Add `loading="lazy"` to `<img>`
2. **Dark mode**: Add `prefers-color-scheme` media query
3. **Analytics tracking**: Log accordion interactions
4. **SEO enhancement**: Add structured data (FAQ schema)
5. **Animation library**: Integrate GSAP for advanced transitions

---

## Responsive Behavior

| Breakpoint       | Layout                | Accordion Behavior        |
|------------------|-----------------------|---------------------------|
| Desktop (>900px) | 2-column grid         | Smooth height transitions |
| Tablet           | Stacked, image first  | Same                     |
| Mobile           | Full-width, compact   | Tappable headers          |

---

## Accessibility

- **Keyboard navigable**: Tab through headers, Enter to toggle
- **Screen reader friendly**: Semantic `<section>`, `<header>`, `<h3>` tags
- **Focus indicators**: Built-in hover and focus states
- **ARIA attributes**: Can be extended with `aria-expanded`, `aria-controls`

---

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome  | ✅ 60+  |
| Firefox | ✅ 55+  |
| Safari  | ✅ 12+  |
| Edge    | ✅ 79+  |

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit changes (`git commit -m 'Add some feature'`)
4. Push to branch (`git push origin feature/improvement`)
5. Open a Pull Request

### Contribution Areas
- **Accessibility**: Improve ARIA labels, keyboard navigation
- **Performance**: Optimize animations, reduce CLS
- **Theming**: Add dark mode, color schemes
- **Framework wrappers**: Create React/Vue components

---

## License

Free for personal and commercial use. Attribution appreciated.

---

## Why “Synapse”?

Just as synapses connect neurons to transmit information, this component connects services with visuals to communicate value—efficiently, elegantly, and interactively.

---

**Built by [Lefa Mofokeng](https://github.com/lefajmofokeng)**  


