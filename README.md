# Astro Tailwind Flowbite Starter

A starter template for building web applications with Astro, Tailwind CSS, and Flowbite.

![Image](https://github.com/user-attachments/assets/d9b10353-f85a-42ad-a049-f65540a4d1a4)

## 🚀 Features

- [Astro](https://astro.build/) - Modern static site builder
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Flowbite](https://flowbite.com/) - UI component library built on top of Tailwind CSS
- TypeScript support
- Pre-configured components:
  - Modal dialog
  - Tooltips
  - Responsive card grid
  - Basic layout structure

## 🛠️ Getting Started

1. Clone this repository:
```bash
git clone https://github.com/czbone/astro-tailwind4-flowbite-starter.git
cd astro-tailwind4-flowbite-starter
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open your browser and visit `http://localhost:4321`

5. To build for production:
```bash
pnpm build
```

## 📦 Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   ├── scripts/
│   │   └── index.js
│   └── styles/
│       └── global.css
└── package.json
```

## 📝 Available Commands

| Command | Action |
| :--- | :--- |
| `pnpm install` | Install dependencies |
| `pnpm dev` | Start development server at `localhost:4321` |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |

## 🔧 Configuration

- Tailwind CSS configuration is handled through `tailwind.config.js`
- Astro configuration is in `astro.config.mjs`
- TypeScript configuration is in `tsconfig.json`

## 📚 Dependencies

- Astro v5.2.1
- Tailwind CSS v4.0.1
- Flowbite v3.0.0
- TypeScript v5.7.3

## 📄 License

This project is licensed under the MIT License.
