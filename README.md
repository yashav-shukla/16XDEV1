

<p align="center">
  <img src="public/logo.png" alt="16XDEV Logo" width="180" />
</p>


---




<p align="center">
  A modern, production-ready landing page template built with <b>Vite 5</b>, <b>React 18</b>, <b>TypeScript</b>, and <b>Tailwind CSS 3</b>.  
  Perfect for <i>portfolios, product launches, and agency websites</i>.
</p>

<p align="center">
  <a href="https://16xdev.netlify.app/" target="_blank"><img src="https://img.shields.io/badge/Live%20Preview-16xdev.netlify.app-red?style=for-the-badge" /></a>
  <img src="https://img.shields.io/badge/Vite-5-purple?style=for-the-badge&logo=vite" />
  <img src="https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/TailwindCSS-3-06B6D4?style=for-the-badge&logo=tailwindcss" />
</p>

---

## ✨ Features

- 🚀 **Lightning fast** – powered by Vite 5  
- 🛠 **TypeScript-first** – strong typing & modern tooling  
- 🎨 **Tailwind CSS 3** – utility-first, JIT enabled  
- 🧩 **Prebuilt sections** – `Header`, `Hero`, `About`, `Portfolio`, `CodeLabs`, `Services`, `Testimonials`, `Contact`, `Footer`  
- 🎭 **Icons** – via [`lucide-react`](https://lucide.dev/)  
- ✅ **ESLint 9** – configured for TypeScript, React hooks & fast refresh  

---

## 📂 Project Structure

```plaintext
project-root/
├─ public/                 # Static assets
│  ├─ logo.png
│  ├─ website_logo.png
│  └─ ...
├─ src/
│  ├─ components/          # All page sections
│  ├─ App.tsx              # Composes sections
│  ├─ index.css            # Tailwind base & custom styles
│  └─ main.tsx             # React entry
├─ index.html              # Vite HTML entry
├─ tailwind.config.js      # Tailwind config
├─ vite.config.ts          # Vite config
├─ eslint.config.js        # ESLint rules
├─ tsconfig.json           # TypeScript config
└─ package.json
⚡ Getting Started
1. Prerequisites
Node.js 18+ (required by Vite 5)

Package manager: npm (default) / pnpm / yarn

2. Installation
bash
Copy
Edit
npm install
3. Development
bash
Copy
Edit
npm run dev
➡️ Then open http://localhost:5173.

4. Production Build
bash
Copy
Edit
npm run build
Outputs production-ready files into dist/.

5. Local Preview
bash
Copy
Edit
npm run preview
📦 Available Scripts
bash
Copy
Edit
npm run dev       # start Vite dev server
npm run build     # build for production
npm run preview   # locally preview production build
npm run lint      # run ESLint checks
🎨 Tailwind Setup
Configured via tailwind.config.js

Scans index.html and all files in src/**/*.{js,ts,jsx,tsx}

Ensure src/index.css imports Tailwind base, components, and utilities

🖼 Icon Usage (lucide-react)
tsx
Copy
Edit
import { ArrowRight } from "lucide-react";

export function CtaButton() {
  return (
    <button className="inline-flex items-center gap-2 px-4 py-2 rounded bg-white text-black">
      Get Started
      <ArrowRight size={18} />
    </button>
  );
}
🚀 Deployment
Static hosting – deploy dist/ to Netlify, Vercel, GitHub Pages, or Cloudflare Pages.

Local preview – run npm run preview before publishing.

Live demo: 👉 https://16xdev.netlify.app/

🛠 Customization
🔧 Branding: Replace assets in /public (logo.png, website_logo.png)

📝 Content: Edit text/layout in src/components/*.tsx

🎨 Theme: Extend Tailwind in tailwind.config.js

❓ Troubleshooting
Dev server not starting? → Confirm Node 18+ is installed

Icons not rendering? → Ensure lucide-react is installed properly

📜 License
This project is currently private.
Add a license file if you plan to distribute or open-source it.
