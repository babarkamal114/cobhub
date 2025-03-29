# Cobhub - Modern Component Library

A modern, accessible, and customizable component library built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern and accessible components
- 📦 Built with Next.js 15 and TypeScript
- 🎯 Class Variance Authority (CVA) for component variants
- 📚 Storybook for component documentation and testing
- 🎭 Dark mode support
- 🎨 Tailwind CSS for styling
- ♿️ Accessible components following WAI-ARIA guidelines

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/cobhub.git
cd cobhub
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Start Storybook:
```bash
npm run storybook
# or
yarn storybook
```

## Component Library

### Available Components

- Button
- Input
- Checkbox
- Alert
- (More components coming soon)

### Usage

```tsx
import { Button } from "@/components/ui/button";

export default function MyComponent() {
  return (
    <Button variant="default" size="lg">
      Click me
    </Button>
  );
}
```

## Development

### Project Structure

```
src/
├── components/
│   └── ui/           # Reusable UI components
├── lib/
│   └── utils.ts      # Utility functions
├── stories/          # Storybook stories
└── app/             # Next.js app directory
```

### Adding New Components

1. Create a new component in `src/components/ui/`
2. Create corresponding stories in `src/stories/`
3. Add tests in `__tests__/` directory
4. Document the component in Storybook

### Testing

```bash
npm run test
# or
yarn test
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 