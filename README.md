# Project Guidelines & Best Practices

This document outlines the coding standards, security practices, and conventions for our Next.js project.

---

## 1. Security Best Practices

### Common Vulnerabilities to Avoid

- **XSS (Cross-Site Scripting)**: Always sanitize user inputs and use React's built-in escaping. Avoid `dangerouslySetInnerHTML` unless absolutely necessary.
- **SQL Injection**: Use parameterized queries and ORM tools. Never concatenate user input into SQL queries.
- **CSRF (Cross-Site Request Forgery)**: Implement CSRF tokens for state-changing operations.
- **Clickjacking**: Use `X-Frame-Options` or CSP `frame-ancestors` directive.
- **Open Redirects**: Validate redirect URLs against a whitelist.
- **Insecure Deserialization**: Validate and sanitize all serialized data.

### Environment Variables

- **Never commit** `.env`, `.env.local`, or any file containing secrets
- Always provide `.env.example` with dummy values
- Use descriptive names: `DATABASE_URL`, `NEXT_PUBLIC_API_KEY`
- Prefix client-side variables with `NEXT_PUBLIC_`
- Rotate secrets regularly

### API Key and Secret Management

- Store secrets in environment variables or secret management services (AWS Secrets Manager, HashiCorp Vault)
- Use different keys for development, staging, and production
- Implement key rotation policies
- Never log or expose secrets in error messages
- Use server-side API routes to proxy sensitive requests

### Input Validation and Sanitization

- Validate all inputs on both client and server side
- Use validation libraries like Zod, Yup, or Joi
- Sanitize HTML inputs with DOMPurify
- Implement whitelist validation over blacklist
- Validate file uploads (type, size, content)

### Authentication and Authorization

- Use established libraries (NextAuth.js, Auth0, Clerk)
- Implement JWT with short expiration times
- Use refresh tokens for extended sessions
- Implement role-based access control (RBAC)
- Hash passwords with bcrypt (minimum 12 rounds)
- Implement multi-factor authentication (MFA) for sensitive operations
- Use secure session management

### HTTPS and Secure Communication

- Enforce HTTPS in production
- Use HSTS (HTTP Strict Transport Security) headers
- Implement certificate pinning for mobile apps
- Use secure WebSocket connections (wss://)

### Dependency Security

- Run `npm audit` regularly and fix vulnerabilities
- Use tools like Snyk or Dependabot for automated scanning
- Keep dependencies up to date
- Review dependency licenses
- Minimize dependency count

### Content Security Policy (CSP)

```javascript
// next.config.js
const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data:;
  font-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`;
```

### Rate Limiting and DDoS Protection

- Implement rate limiting on API routes
- Use services like Cloudflare or AWS Shield
- Implement request throttling
- Set up monitoring and alerts

### Error Handling

- Never expose stack traces in production
- Log errors server-side only
- Return generic error messages to clients
- Implement proper error boundaries in React
- Use structured logging

---

## 2. Component Creation Guidelines

### Folder Structure

```
src/components/
├── ui/              # Reusable UI components (buttons, forms, cards, etc.)
│   ├── addons/      # UI component addons
│   ├── form/        # Form-related components
│   ├── progress/    # Progress indicators
│   └── table/       # Table components
├── variants/        # CVA variant definitions for styling
├── layout/          # Layout components
├── theme-provider.tsx
└── theme-toggle.tsx
```

### When to Create a New Component

**Create a new component when:**

- The code block is reused in 2+ places
- The component has a single, clear responsibility
- It improves readability and maintainability
- It can be tested independently

**Reuse existing components when:**

- Similar functionality already exists
- Customization can be achieved through props
- The difference is purely stylistic (use variants)

### Component File Structure

```
src/components/ui/
└── button.tsx              # Component implementation

src/components/variants/
└── button-variants.ts      # CVA variant styles

src/stories/
└── button.stories.tsx      # Storybook story
```

**Pattern:**

- Component logic goes in `src/components/ui/[component].tsx`
- Variant styles go in `src/components/variants/[component]-variants.ts`
- Storybook stories go in `src/stories/[component].stories.tsx`
- Styles are handled via TailwindCSS and CVA (no separate CSS files)

### Props Interface Naming Conventions

```typescript
// Use ComponentNameProps pattern
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

// For extended props
interface CustomButtonProps extends ButtonProps {
  icon?: React.ReactNode;
}
```

### Default Props and Validation

```typescript
const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  ...props
}) => {
  // Component logic
};
```

### Component Documentation Standards

```typescript
/**
 * Button component for user interactions
 *
 * @param {ButtonProps} props - Component props
 * @param {string} props.variant - Visual style variant
 * @param {string} props.size - Button size
 * @param {boolean} props.disabled - Disabled state
 * @param {Function} props.onClick - Click handler
 *
 * @example
 * <Button variant="primary" size="lg" onClick={handleClick}>
 *   Click Me
 * </Button>
 */
```

### Storybook Usage

- Create stories for all reusable components
- Document all props and variants
- Include interactive controls
- Provide usage examples

### Accessibility Requirements

- Use semantic HTML elements (`<button>`, `<nav>`, `<main>`)
- Add ARIA labels for screen readers
- Ensure keyboard navigation works
- Maintain color contrast ratios (WCAG AA: 4.5:1)
- Add focus indicators
- Support reduced motion preferences

```typescript
<button
  aria-label="Close dialog"
  aria-pressed={isPressed}
  role="button"
  tabIndex={0}
>
  Close
</button>
```

### Performance Optimization

```typescript
// Use React.memo for expensive components
const ExpensiveComponent = React.memo(({ data }) => {
  // Component logic
});

// Use useMemo for expensive calculations
const sortedData = useMemo(() => {
  return data.sort((a, b) => a.value - b.value);
}, [data]);

// Use useCallback for function props
const handleClick = useCallback(() => {
  // Handler logic
}, [dependencies]);
```

---

## 3. Naming Conventions

### File Naming

| Type             | Convention                  | Example                            |
| ---------------- | --------------------------- | ---------------------------------- |
| Components       | PascalCase                  | `Button.tsx`, `UserProfile.tsx`    |
| Utilities        | camelCase                   | `formatDate.ts`, `apiHelper.ts`    |
| Hooks            | camelCase with "use" prefix | `useAuth.ts`, `useFetch.ts`        |
| Constants        | UPPER_SNAKE_CASE            | `API_ENDPOINTS.ts`, `CONFIG.ts`    |
| Types/Interfaces | PascalCase                  | `UserType.ts`, `ApiResponse.ts`    |
| Pages (Next.js)  | kebab-case                  | `user-profile.tsx`, `about-us.tsx` |

### Variable Naming

```typescript
// Boolean variables: use "is", "has", "should" prefix
const isLoading = true;
const hasError = false;
const shouldRender = true;

// Functions: verb-based camelCase
const fetchUsers = () => {};
const handleClick = () => {};
const validateForm = () => {};

// Constants: UPPER_SNAKE_CASE
const MAX_RETRIES = 3;
const API_BASE_URL = 'https://api.example.com';

// Private methods: underscore prefix
const _handleInternalState = () => {};

// Event handlers: "handle" or "on" prefix
const handleSubmit = () => {};
const onClick = () => {};
```

### Component Naming

```typescript
// ✅ Good: Descriptive and specific
<UserProfileCard />
<NavigationMenu />
<ProductSearchBar />

// ❌ Bad: Generic names
<Container />
<Wrapper />
<Component />

// ✅ Good: Use suffixes for variants
<ButtonPrimary />
<ButtonSecondary />
<CardElevated />
```

---

## 4. Git Commit Convention (Conventional Commits)

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

| Type       | Description              | Example                                     |
| ---------- | ------------------------ | ------------------------------------------- |
| `feat`     | New feature              | `feat(auth): add social login`              |
| `fix`      | Bug fix                  | `fix(api): resolve timeout issue`           |
| `docs`     | Documentation            | `docs(readme): update setup instructions`   |
| `style`    | Code style changes       | `style(button): fix indentation`            |
| `refactor` | Code refactoring         | `refactor(utils): simplify date formatting` |
| `perf`     | Performance improvements | `perf(images): implement lazy loading`      |
| `test`     | Tests                    | `test(auth): add login unit tests`          |
| `build`    | Build system             | `build(deps): upgrade next to 14.0`         |
| `ci`       | CI configuration         | `ci(github): add automated testing`         |
| `chore`    | Maintenance              | `chore(deps): update dependencies`          |
| `revert`   | Revert commit            | `revert: revert commit abc123`              |

### Scope (Optional)

Common scopes: `auth`, `api`, `ui`, `components`, `utils`, `database`, `config`

### Subject Rules

- Use imperative mood ("add" not "added" or "adds")
- Don't capitalize first letter
- No period at the end
- Keep under 50 characters

### Examples

```bash
feat(auth): add JWT token refresh mechanism
fix(ui): resolve mobile menu overflow issue
docs(api): add endpoint documentation
refactor(components): extract reusable form logic
perf(images): implement next/image optimization
test(utils): add unit tests for date formatter
```

---

## 5. Branch Naming Convention

### Format

```
<type>/<short-description>
```

### Types

| Type        | Purpose                 | Example                       |
| ----------- | ----------------------- | ----------------------------- |
| `feature/`  | New features            | `feature/user-authentication` |
| `fix/`      | Bug fixes               | `fix/login-redirect-issue`    |
| `hotfix/`   | Urgent production fixes | `hotfix/security-patch`       |
| `refactor/` | Code refactoring        | `refactor/api-structure`      |
| `docs/`     | Documentation           | `docs/api-documentation`      |
| `test/`     | Tests                   | `test/unit-tests-auth`        |
| `chore/`    | Maintenance             | `chore/update-dependencies`   |

### Rules

- Use lowercase and hyphens
- Be descriptive but concise
- Include ticket/issue number if applicable: `feature/PROJ-123-user-auth`

---

## 6. DO's ✅

### Code Quality

- ✅ Write self-documenting code with clear names
- ✅ Add comments for complex logic only
- ✅ Keep functions small and focused (single responsibility)
- ✅ Use TypeScript for type safety
- ✅ Write unit tests for critical functionality
- ✅ Use ESLint and Prettier consistently
- ✅ Handle errors gracefully with try-catch
- ✅ Validate all user inputs
- ✅ Use environment variables for configuration
- ✅ Keep dependencies up to date

### Git Practices

- ✅ Commit frequently with meaningful messages
- ✅ Pull before pushing to avoid conflicts
- ✅ Create feature branches from main
- ✅ Keep PRs small and focused
- ✅ Request reviews from 2 team members
- ✅ Resolve all comments before merging
- ✅ Delete branches after merging
- ✅ Use conventional commit messages

### Security

- ✅ Never commit secrets or API keys
- ✅ Use .env files for sensitive data
- ✅ Validate and sanitize all inputs
- ✅ Use HTTPS for all API calls
- ✅ Implement proper authentication
- ✅ Follow OWASP security guidelines
- ✅ Keep dependencies updated
- ✅ Use security headers

---

## 7. DON'Ts ❌

### Code Quality

- ❌ Don't use "any" type in TypeScript
- ❌ Don't leave console.log statements in production code
- ❌ Don't ignore ESLint warnings
- ❌ Don't create files over 300 lines
- ❌ Don't duplicate code (DRY principle)
- ❌ Don't hardcode values (use constants)
- ❌ Don't ignore error handling
- ❌ Don't use `var` (use `const`/`let`)
- ❌ Don't commit commented-out code
- ❌ Don't use inline styles (use CSS modules or styled-components)

### Git Practices

- ❌ Don't commit directly to main branch
- ❌ Don't force push to shared branches
- ❌ Don't commit without testing locally first
- ❌ Don't use vague commit messages ("fix stuff", "updates")
- ❌ Don't merge your own PRs without approval
- ❌ Don't ignore merge conflicts
- ❌ Don't commit node_modules or build folders
- ❌ Don't rewrite public history

### Security

- ❌ Don't store passwords in plain text
- ❌ Don't expose sensitive data in error messages
- ❌ Don't trust client-side validation alone
- ❌ Don't use HTTP for sensitive data
- ❌ Don't ignore security warnings
- ❌ Don't use deprecated or vulnerable packages
- ❌ Don't commit .env files
- ❌ Don't disable security features without reason

---

## 8. Code Review Checklist

### Before Submitting PR

- [ ] Does it follow naming conventions?
- [ ] Are there any security vulnerabilities?
- [ ] Is error handling implemented?
- [ ] Are there tests for new functionality?
- [ ] Is the code documented properly?
- [ ] Does it follow the component structure?
- [ ] Are commit messages conventional?
- [ ] Is the PR description complete?
- [ ] Have you tested locally?
- [ ] Are there any console.log statements?
- [ ] Is TypeScript strict mode satisfied?
- [ ] Are all ESLint warnings resolved?

### Reviewer Checklist

- [ ] Code follows project conventions
- [ ] Logic is clear and maintainable
- [ ] No security vulnerabilities introduced
- [ ] Tests are comprehensive
- [ ] Documentation is updated
- [ ] No breaking changes (or properly documented)
- [ ] Performance implications considered
- [ ] Accessibility requirements met

---

## 9. Project Structure

```
cobhub/
├── .github/                    # GitHub configuration
│   ├── workflows/             # CI/CD workflows
│   │   ├── ci.yml            # Continuous integration
│   │   ├── codeql.yml        # CodeQL security scanning
│   │   ├── codequality.yml   # Code quality checks
│   │   └── security.yml      # Security audits
│   └── PULL_REQUEST_TEMPLATE.md # PR template
│
├── .husky/                     # Git hooks (Husky)
│   └── pre-commit            # Pre-commit hooks for linting
│
├── .storybook/                 # Storybook configuration
│   └── main.ts               # Storybook main config
│
├── public/                     # Static assets
│   ├── file.svg              # SVG assets
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
├── src/                        # Source code
│   ├── app/                   # Next.js App Router
│   │   ├── favicon.ico       # Favicon
│   │   ├── globals.css       # Global styles
│   │   ├── layout.tsx        # Root layout
│   │   └── page.tsx          # Home page
│   │
│   ├── components/            # React components
│   │   ├── layout/           # Layout components
│   │   ├── ui/               # UI library components
│   │   │   ├── addons/       # UI addons
│   │   │   ├── form/         # Form components (10 components)
│   │   │   ├── progress/     # Progress components
│   │   │   ├── table/        # Table components (7 components)
│   │   │   ├── alert.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── breadcrumb.tsx
│   │   │   ├── button.tsx
│   │   │   ├── button-link.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dropdown.tsx
│   │   │   ├── icon-box.tsx
│   │   │   ├── icon-button.tsx
│   │   │   ├── loader.tsx
│   │   │   ├── modal.tsx
│   │   │   ├── tab.tsx
│   │   │   ├── tag.tsx
│   │   │   ├── toggle-box.tsx
│   │   │   ├── typography.tsx
│   │   │   └── index.ts      # Component exports
│   │   │
│   │   ├── variants/          # Component variant styles (CVA)
│   │   │   ├── alert-variants.ts
│   │   │   ├── avatar-variants.ts
│   │   │   ├── breadcrumb-variants.ts
│   │   │   ├── button-variants.ts
│   │   │   ├── card-variants.ts
│   │   │   ├── checkbox-variants.ts
│   │   │   ├── comboBox-variants.ts
│   │   │   ├── datePicker-variants.ts
│   │   │   ├── icon-button-variants.ts
│   │   │   ├── iconbox-variants.ts
│   │   │   ├── input-variants.ts
│   │   │   ├── loader-variants.ts
│   │   │   ├── progress-variants.ts
│   │   │   ├── radio-variants.ts
│   │   │   ├── select-variants.ts
│   │   │   ├── tab-variants.ts
│   │   │   ├── tag-variants.ts
│   │   │   ├── text-area-variants.ts
│   │   │   ├── toggle-switch-variants.ts
│   │   │   ├── typography-variants.ts
│   │   │   └── index.ts      # Variant exports
│   │   │
│   │   ├── theme-provider.tsx # Theme context provider
│   │   └── theme-toggle.tsx   # Dark/light mode toggle
│   │
│   ├── hooks/                 # Custom React hooks
│   │   ├── useOnClickOutside.ts # Click outside detection
│   │   ├── useTheme.tsx      # Theme management
│   │   └── index.ts          # Hook exports
│   │
│   ├── lib/                   # Utility libraries
│   │   ├── utils/            # Helper functions
│   │   ├── utils.ts          # Utility functions (cn, etc.)
│   │   └── index.ts          # Library exports
│   │
│   ├── types/                 # TypeScript types
│   │   ├── components.ts     # Component types & interfaces
│   │   ├── theme.ts          # Theme types
│   │   └── index.ts          # Type exports
│   │
│   ├── stories/               # Storybook stories (28 stories)
│   │   ├── alert.stories.tsx
│   │   ├── avatar.stories.tsx
│   │   ├── button.stories.tsx
│   │   ├── card.stories.tsx
│   │   ├── table.stories.tsx
│   │   └── ... (23 more stories)
│   │
│   └── test-husky.ts          # Husky test file
│
├── .env.example               # Environment variables template
├── .env.local                 # Local environment (gitignored)
├── .gitignore                 # Git ignore rules
├── .prettierrc                # Prettier configuration
├── chromatic.config.json      # Chromatic config for Storybook
├── eslint.config.mjs          # ESLint configuration
├── jest.config.js             # Jest configuration
├── jest.setup.js              # Jest setup
├── next.config.ts             # Next.js configuration
├── next-env.d.ts              # Next.js TypeScript declarations
├── package.json               # Dependencies and scripts
├── postcss.config.mjs         # PostCSS configuration
├── tailwind.config.ts         # TailwindCSS configuration
├── tsconfig.json              # TypeScript configuration
├── vitest.config.ts           # Vitest configuration
├── vitest.shims.d.ts          # Vitest type shims
└── README.md                  # This file
```

### Directory Explanations

| Directory                  | Purpose                                                                                    |
| -------------------------- | ------------------------------------------------------------------------------------------ |
| `.github/workflows/`       | CI/CD pipelines for automated testing, security scanning (CodeQL), and code quality checks |
| `.husky/`                  | Git hooks for pre-commit linting and formatting with lint-staged                           |
| `.storybook/`              | Storybook configuration for component documentation and visual testing                     |
| `public/`                  | Static SVG assets served directly by Next.js                                               |
| `src/app/`                 | Next.js 15 App Router with pages, layouts, and global styles                               |
| `src/components/ui/`       | Reusable UI components (38 components) built with Radix UI and TailwindCSS                 |
| `src/components/variants/` | Component variant styles using class-variance-authority (CVA)                              |
| `src/components/layout/`   | Layout components for page structure                                                       |
| `src/hooks/`               | Custom React hooks (theme management, click outside detection)                             |
| `src/lib/`                 | Utility functions including `cn()` for className merging                                   |
| `src/types/`               | TypeScript type definitions and interfaces for components and theme                        |
| `src/stories/`             | Storybook stories for all UI components (28 stories)                                       |

---

## Tech Stack

This project is built with modern web technologies:

### Core Framework

- **Next.js 15.2.4** - React framework with App Router
- **React 19.0.0** - UI library
- **TypeScript 5** - Type safety

### Styling

- **TailwindCSS 3.4.1** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **class-variance-authority (CVA)** - Component variant management
- **clsx & tailwind-merge** - Conditional className utilities

### UI Components

- **Radix UI** - Headless UI primitives
  - `@radix-ui/react-icons`
  - `@radix-ui/react-label`
  - `@radix-ui/react-slot`
  - `@radix-ui/react-toast`
- **@headlessui/react** - Additional UI components
- **Lucide React** - Icon library
- **@iconify/react** - Icon framework

### Development Tools

- **Storybook 8.6.12** - Component documentation and visual testing
- **Vitest 3.1.1** - Unit testing framework
- **Playwright 1.51.1** - E2E testing
- **ESLint 9** - Code linting
- **Prettier 3.5.3** - Code formatting
- **Husky 9.1.7** - Git hooks
- **lint-staged 15.5.0** - Pre-commit linting

### Theme & Utilities

- **next-themes 0.4.6** - Dark/light mode support
- **date-fns 4.1.0** - Date manipulation

---

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd cobhub

# Install dependencies
npm install

# Copy environment variables (if needed)
cp .env.example .env.local

# Run development server
npm run dev
```

The app will be available at `http://localhost:3000`

### Storybook

This project uses **Storybook** for component development and documentation. All UI components have corresponding stories.

```bash
# Start Storybook development server
npm run storybook

# Build Storybook for deployment
npm run build-storybook
```

Storybook will be available at `http://localhost:6006`

**Benefits:**

- Visual component testing in isolation
- Interactive documentation for all 28+ UI components
- Theme switching (light/dark mode) support
- Automated visual regression testing with Chromatic

### Available Scripts

```bash
npm run dev              # Start development server with Turbopack
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint
npm run storybook        # Start Storybook dev server on port 6006
npm run build-storybook  # Build Storybook for deployment
npm run prepare          # Setup Husky git hooks
```

> **Note**: This project uses **Husky** for git hooks and **lint-staged** for pre-commit linting. The hooks are automatically installed when you run `npm install`.

---

## Component Variant System

This project uses **class-variance-authority (CVA)** for managing component variants in a type-safe way. All variant definitions are centralized in `src/components/variants/`.

### How It Works

Each component has a corresponding variant file that defines all possible visual variations:

```typescript
// Example: button-variants.ts
import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'base-classes-here', // Base styles
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white',
        secondary: 'bg-secondary text-gray-900',
        outline: 'border border-gray-300',
      },
      size: {
        sm: 'px-3 py-1 text-sm',
        md: 'px-4 py-2 text-base',
        lg: 'px-6 py-3 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);
```

### Benefits

- **Type Safety**: TypeScript autocomplete for all variant options
- **Consistency**: Centralized style definitions prevent drift
- **Maintainability**: Easy to update variants across the entire app
- **Performance**: Optimized className generation with `tailwind-merge`

### Available Variants

The project includes 21 variant files covering all UI components:

- Buttons (button, icon-button, button-link)
- Form elements (input, select, checkbox, radio, textarea, combobox, datepicker)
- Feedback (alert, loader, progress, tag)
- Layout (card, avatar, breadcrumb, tab)
- Advanced (iconbox, toggle-switch, typography)

---

## Contributing

1. Create a feature branch: `git checkout -b feature/your-feature`
2. Make your changes following the guidelines above
3. Commit using conventional commits: `git commit -m "feat(scope): description"`
4. Push to your branch: `git push origin feature/your-feature`
5. Create a Pull Request with a clear description

**Pre-commit Hooks:**

- ESLint will automatically check your code
- Prettier will format your files
- Commits will be rejected if linting fails

---

## Resources

### Official Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)

### UI & Styling

- [Radix UI](https://www.radix-ui.com/) - Headless UI components
- [class-variance-authority](https://cva.style/docs) - Component variants
- [Lucide Icons](https://lucide.dev/) - Icon library

### Development Tools

- [Storybook Documentation](https://storybook.js.org/docs)
- [Vitest Documentation](https://vitest.dev/)
- [Playwright Documentation](https://playwright.dev/)
- [Chromatic](https://www.chromatic.com/) - Visual testing

### Best Practices

- [Conventional Commits](https://www.conventionalcommits.org/)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)

---

## License

[Your License Here]
