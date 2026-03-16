<div align="center">

# ⚡ React + Vite + Tailwind CSS

### A fast, modern frontend starter template

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![ESLint](https://img.shields.io/badge/ESLint-Configured-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org)

</div>

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📁 Project Structure

```
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

---

## 🔌 Official Vite Plugins

Two official plugins are available for React Fast Refresh:

| Plugin | Compiler | Best For |
|--------|----------|----------|
| [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) | **Babel** / oxc (rolldown-vite) | Standard projects |
| [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) | **SWC** | Faster builds |

> 💡 **oxc** is used automatically when using [rolldown-vite](https://vite.dev/guide/rolldown) for even faster builds.

---

## ⚛️ React Compiler

> The React Compiler is **not enabled** by default in this template due to its impact on dev & build performance.

To enable it, follow the official guide:
👉 [React Compiler Installation](https://react.dev/learn/react-compiler/installation)

---

## 🛡️ ESLint Configuration

For production applications, it is recommended to use **TypeScript** with type-aware lint rules.

### Upgrade to TypeScript

1. Use the [TS Vite template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts)
2. Integrate [`typescript-eslint`](https://typescript-eslint.io)

```bash
# Create a new project with TypeScript
npm create vite@latest my-app -- --template react-ts
```

---

## 🧰 Tech Stack

- **[React 18](https://react.dev)** — UI library with hooks & concurrent features
- **[Vite 5](https://vitejs.dev)** — Lightning fast build tool with HMR
- **[Tailwind CSS 3](https://tailwindcss.com)** — Utility-first CSS framework
- **[ESLint](https://eslint.org)** — Code linting and quality

---

<div align="center">

Made with ❤️ using React, Vite & Tailwind CSS

</div>
