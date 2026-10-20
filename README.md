# React Composition Patterns Store

An e-commerce-style React app built to explore component composition patterns and custom hooks, using TypeScript, Context API and client-side routing.

🔗 **Live demo:** https://danielgranato.github.io/react-composition-patterns-store/

## 📖 About

This project is part of Alura's React learning track. It focuses on building flexible, reusable interfaces by combining small components instead of creating large components with many props.

The app is **UseDev**, a fictional online store (from clothing to tech gadgets) used to practice composition patterns and reusable logic in a more complex, real-world scenario. It was developed for study purposes only.

## 🎯 Learning Objectives

- Applying component composition patterns in React
- Extracting and reusing stateful logic with custom hooks
- Typing components and hooks with TypeScript (interfaces and generics)
- Sharing state across the app with Context API
- Organizing pages with client-side routing
- Testing components with Jest and Testing Library
- Structuring a larger React project

## 🧩 Patterns and Concepts

- **Higher-Order Components (HOC):** `withForm` wraps the `Input` component and returns an enhanced version of it.
- **Compound components:** `RadioGroup` and `RadioButton` work together as a single composed unit.
- **Custom hooks:**
  - `useSearch`: debounced search with options (minimum length, case sensitivity, whitespace trimming) and helpers to filter text and arrays.
  - `useFetch`: reusable HTTP hook with typed responses, loading and error states, custom headers and request cancellation.
- **Context API:** shared state across the app.
- **Composition over configuration:** small components combined together instead of one large component with many props.

## 🛠️ Tech Stack

- **React 19** and **TypeScript**
- **Vite**: build tool and dev server
- **Tailwind CSS 4**: styling
- **React Router 7**: page navigation
- **Context API**: shared state
- **json-server**: mock REST API
- **Jest** and **Testing Library**: unit and component tests
- **ESLint**: linting

## 🗄️ Data Source

- **Development:** data is served by `json-server` from `server.json` (`npm run server`, port 3001).
- **Production (GitHub Pages):** GitHub Pages only hosts static files, so the `prebuild` script (`scripts/export-static-data.mjs`) exports the data as static JSON files (`products.json` and `categories.json`), which the app loads with `fetch`.

## 📁 Project Structure

```
src/
├── assets/
├── components/    # Button, Counter, Footer, Header, Input, Link,
│                  # ProductCard, RadioButton, SearchInput, Selector, withForm
├── context/       # Context providers
├── routes/        # App routes
├── screens/       # Pages
├── types/         # Shared TypeScript types
└── utils/         # Helper functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/DanielGranato/react-composition-patterns-store.git

# Navigate into the project folder
cd react-composition-patterns-store

# Install dependencies
npm install
```

### Running locally

```bash
# Start the mock API (json-server, port 3001)
npm run server

# In another terminal, start the app
npm run dev
```

## 📜 Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server |
| `npm run server` | Starts json-server on port 3001 using `server.json` |
| `npm run build` | Exports static data, type-checks and builds for production |
| `npm run preview` | Previews the production build |
| `npm run lint` | Runs ESLint |
| `npm test` | Runs the Jest test suite |

