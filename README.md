# StrategicExcellence

A sophisticated, modern accordion component that showcases strategic services with smooth animations, elegant typography, and professional design. Features a clean two-column layout with interactive accordion functionality and a compelling visual presentation.

## Live Demo

https://thisislefa.github.io/StrategicExcellence

## Features

- **Smooth Accordion Animation**: Elegant height transitions with cubic-bezier timing for premium feel
- **Modern Typography**: Combines Inter and Playfair Display fonts for visual hierarchy
- **Professional Layout**: Clean two-column grid with balanced spacing and proportions
- **Interactive Elements**: Hover states and click animations with visual feedback
- **Responsive Design**: Adapts seamlessly from desktop to mobile devices
- **Accessibility**: Semantic HTML structure and intuitive interaction patterns
- **Performance Optimized**: Pure CSS and JavaScript with no external dependencies
- **Visual Content**: Professional imagery that complements the strategic theme

## Tech Stack

- **HTML5** - Semantic markup with clean, accessible structure
- **CSS3** - CSS Grid, Flexbox, and custom properties
- **JavaScript** - ES6+ with smooth accordion functionality
- **Google Fonts** - Inter and Playfair Display font families
- **SVG Icons** - Custom checkmarks and arrow icons

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/thisislefa/strategic-excellence.git
   cd strategic-excellence
   ```

2. **Open in browser**
   ```bash
   open index.html
   ```

## Project Structure

```
strategic-excellence/
├── index.html          # Complete HTML with embedded CSS and JavaScript
└── README.md           # Project documentation
```

## Usage

### Basic Integration
The component is entirely self-contained in a single HTML file. Simply include it in your project:

```html
<!-- Copy the entire section with class "se-container" -->
<section class="se-container">
    <!-- Component content -->
</section>
```

### Customizing Content
Update the accordion items by modifying the structure:

```html
<div class="se-acc-item">
    <div class="se-acc-header" onclick="toggleAccordion(this)">
        <span class="se-acc-number">[05]</span>
        <h3 class="se-acc-title">Your Service Title</h3>
    </div>
    <div class="se-acc-content">
        <div class="se-acc-description">
            <p class="se-text">Your service description.</p>
            <ul class="se-list">
                <li class="se-list-item">
                    <svg class="se-checkmark">...</svg>
                    Feature One
                </li>
            </ul>
        </div>
    </div>
</div>
```

## Customization

### Colors
- Primary Blue: `#2b26c7`
- Text: `#000` / `#111` / `#666`
- Borders: `#e5e5e5`
- Background: `#ffffff`

### Typography
- Headers: Playfair Display (italic, 500 weight)
- Body: Inter (300, 400, 500, 600 weights)
- Numbers: Inter (500 weight with tabular numerals)

### Layout
- Container Max Width: 1200px
- Grid Gap: 60px (desktop), 40px (tablet)
- Image Height: 600px (desktop), 400px (mobile)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Responsive Breakpoints

- Desktop: 1025px and above
- Tablet: 901px to 1024px
- Mobile: 900px and below

## Key Features

- **Smooth Transitions**: Height and opacity animations with custom timing functions
- **Professional Styling**: Clean borders, balanced spacing, and elegant typography
- **Interactive Feedback**: Hover states on accordion headers and contact button
- **Mobile-First**: Responsive grid that stacks on smaller screens
- **Accessible**: Proper heading hierarchy and interactive element states

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT License

Copyright (c) 2025 Lefa Mofokeng

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Author

- GitHub: https://github.com/thisislefa
- Portfolio: https://thisislefa.github.io/portfolio

## Acknowledgments

- Professional imagery from Pexels
- Fonts from Google Fonts
- Icons from Feather Icons


