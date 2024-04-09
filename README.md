## Project Description

### Tools and Technologies
- [editorconfig]
- [eslint]
- [Prettier]
- [React]
- [RTK-Query]
- [StoryBook]
- [Playwright]
- [Tailwind]
- [TypeScript]
- [Vite]
- [Vitest]

### The key aspects of this project are:
- Initializing a library of reusable components using Tailwind CSS
- Unifying design rules for the entire team using tools such as nvm, ESLint, Prettier and EditorConfig
- Documenting components using Storybook
- Using Vite bundler to speed up the development process
- Using the Atomic Design architectural approach
- Using design patterns such as render props
- Using RTK Query - provides a robust caching

## Structure of the project
The project uses the Atomic Design approach, which divides the user interface into smaller, reusable components.
The project structure is as follows:
```bash
src/
├── components/
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   └── templates/
```

## First steps
```bash
nvm use
npm install
npm run dev
```

## StoryBook
```bash
npm run storybook build
npm run storybook-dev
```

## Build project
```bash
npm run build
```
