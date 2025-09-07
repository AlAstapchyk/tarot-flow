# TarotFlow App

A modern, interactive tarot card reading application built with Next.js, React, and Framer Motion. The app provides daily tarot card draws with personalized interpretations and additional wellness content.

## Features

- **Interactive Card Drawing**: Click to flip and reveal your daily tarot card
- **22 Tarot Cards**: Full collection of Major Arcana cards with upright and reversed meanings
- **Smooth Animations**: Fluid card flip animations powered by Framer Motion
- **Image Preloading**: Ensures smooth animations by preloading card images
- **Wellness Content Packs**: Three purchasable content packages:
  - **Tarot Expression**: Daily journaling prompts ($1 USDC)
  - **Tarot Yoga**: Curated yoga video sessions ($3 USDC)
  - **Tarot Meditation**: Guided meditation audio ($2 USDC)
- **Crypto Payments**: Integrated with Base blockchain for USDC payments
- **Responsive Design**: Optimized for mobile and desktop viewing
- **Background Video**: Atmospheric background video for enhanced user experience

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Payments**: Base blockchain integration with `@base-org/account`
- **Image Optimization**: Next.js Image component
- **Icons**: Custom SVG components

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd tarotflow-app
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

4. Add required assets:
   - Place tarot card images in `/public/cards/` (numbered 0-21.png)
   - Add `/public/cards/back-side.png` for card back
   - Add `/public/circle-logo.png` for logo
   - Add thumbnail images for yoga content
   - Add audio preview images for meditation content

5. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Project Structure

```
src/
├── components/
│   └── Header.jsx          # App header component
├── lib/
│   ├── svgs.tsx           # Custom SVG icon components
│   └── card-info.ts       # Tarot card data and interpretations
└── app/
    └── page.tsx           # Main application component
public/
├── cards/
│   ├── 0.png - 21.png     # Tarot card images
│   └── back-side.png      # Card back image
├── circle-logo.png        # App logo
├── thumbnail1.png         # Yoga video thumbnail
├── thumbnail2.png         # Yoga video thumbnail
├── audio-preview-1.png    # Meditation audio preview
└── audio-preview-2.png    # Meditation audio preview
```

## Key Components

### Main App Component (`page.tsx`)

The core application component that handles:

- Card selection and preloading
- Flip animations
- Payment processing
- Content unlocking
- State management

### Card Drawing Logic

```typescript
// Random card selection
function getRandomIndex(): number {
  const totalCards = 22;
  return Math.floor(Math.random() * totalCards);
}

// Image preloading for smooth animations
function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new window.Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
}
```

### State Management

```typescript
const [isCardClicked, setIsCardClicked] = useState(false);
const [isFlipped, setIsFlipped] = useState(false);
const [randomIndex, setRandomIndex] = useState<number>(0);
const [cardSrc, setCardSrc] = useState<string | null>(null);
const [isCardReversed, setIsCardReversed] = useState<boolean>(false);
const [unlockPack, setUnlockPack] = useState([false, false, false]);
```

## Payment Integration

The app uses Base blockchain for crypto payments:

```typescript
import { pay } from "@base-org/account";

const handlePayment = async (amount: string) => {
  try {
    const payment = await pay({
      amount,
      to: AUTHOR_ADDRESS,
      testnet: true,
    });
    console.log("Payment sent:", payment);
  } catch (error) {
    console.error("Payment failed:", error);
  }
};
```

## Card Data Structure

Card information is stored in `/lib/card-info.ts`:

```typescript
export interface CardInfo {
  name: string;
  uprightKeywords: string;
  reversedKeywords: string;
  uprightMean: string;
  reversedMean: string;
  questions: string;
  questionsReversed: string;
}
```

## Animation System

The app uses Framer Motion for smooth animations:

- **Card Flip**: 3D rotation animation with `rotateY`
- **Content Reveal**: Staggered animations for text and elements
- **Hover Effects**: Interactive scaling on buttons and cards
- **Exit Animations**: Smooth transitions when content changes

## Styling

The app uses Tailwind CSS with custom CSS variables for theming:

```css
.mini-app-theme {
  --app-foreground: #000000;
  --app-background: #ffffff;
  --app-gray: #f5f5f5;
}
```

## Content Packs

### 1. Tarot Expression ($1 USDC)

- Daily journaling prompts based on card interpretation
- Questions for self-reflection
- Upright and reversed variations

### 2. Tarot Yoga ($3 USDC)

- Curated yoga video sessions
- Links to YouTube content
- Thumbnail previews

### 3. Tarot Meditation ($2 USDC)

- Guided meditation audio sessions
- Audio preview images
- Mindfulness content

## Configuration

### Environment Variables

```bash
NEXT_PUBLIC_BASE_TESTNET=true
AUTHOR_ADDRESS=0x6DFbC8dBCF4b96130536EE234AcD79Cd4064Ef3C
```

### YouTube Video Integration

Background video configuration:

```html
<iframe
  src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&controls=0&playlist=VIDEO_ID&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0"
  className="pointer-events-none"
/>
```

## Development

### Running Tests

```bash
npm run test
```

### Building for Production

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## Performance Optimizations

- **Image Preloading**: Cards are preloaded for smooth animations
- **Next.js Image Optimization**: Automatic image optimization and lazy loading
- **Animation Optimization**: Hardware-accelerated CSS transforms
- **Code Splitting**: Automatic code splitting with Next.js

## Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Support

For support, email support@tarotflow.app or open an issue in the GitHub repository.

## Roadmap

- [ ] Additional tarot card decks
- [ ] User accounts and history
- [ ] Social sharing features
- [ ] Mobile app version
- [ ] Advanced payment options
- [ ] Multi-language support

---

**Built with ❤️ using Next.js and Base blockchain**
