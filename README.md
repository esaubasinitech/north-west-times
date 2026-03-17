# North West Times

A modern, responsive **Next.js** news and content web application providing local and national coverage for the North West province of South Africa. The site is built with **Next.js**, styled with Tailwind CSS, and deployed on **Vercel** for fast global performance.

Live site: [https://north-west-times.vercel.app/](https://north-west-times.vercel.app/)

---

## 🚀 What This Project Does

North West Times serves as a central news platform focused on delivering timely local and international content. Its goal is to keep residents of the North West province informed across multiple categories, offering:

* **Latest news articles and headlines**
* **Location‑specific content relevant to the North West province**
* **Responsive layouts for mobile and desktop**
* **Fast performance and optimization via Next.js and Vercel**

---

## 🧱 Stack & Tools

| Category        | Technology                                                                           |
| --------------- | ------------------------------------------------------------------------------------ |
| Frontend        | Next.js (React framework) ([nextjs.org](https://nextjs.org/?utm_source=chatgpt.com)) |
| Styling         | Tailwind CSS                                                                         |
| Deployment      | Vercel                                                                               |
| Language        | TypeScript                                                                           |
| Package Manager | pnpm                                                                                 |

---

## 📁 Project Structure

```
├── app/                    # Next.js app router
├── components/             # Reusable UI components
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions and types
├── public/                 # Public static assets
├── styles/                 # Global CSS
├── next.config.mjs         # Next.js configuration
├── package.json            # Project manifest
├── pnpm-lock.yaml          # pnpm lockfile
└── tsconfig.json           # TypeScript config
```

---

## 🛠️ Local Development

### Install dependencies

```bash
pnpm install
```

### Start dev server

```bash
pnpm dev
```

Visit `http://localhost:3000` to view your local development version.

---

## 📦 Build & Production

### Build

```bash
pnpm build
```

### Start production server locally

```bash
pnpm start
```

---

## 🚀 Deployment

This project uses **GitHub → Vercel** integration for automatic deployments. Every push to your production branch (e.g., `main`) triggers a new build and deployment on Vercel.

Ensure the following build settings in your Vercel project:

* **Install Command**: `pnpm install`
* **Build Command**: `pnpm build`
* **Output Directory**: *(leave empty — Vercel handles Next.js output)*

Vercel will auto‑detect the Next.js framework and optimize accordingly.

---

## 📌 Environment Variables

If the app requires any API keys, CMS endpoints, or external integrations, define them in Vercel under:

```
Settings → Environment Variables
```

and mirror them locally in a `.env.local` file.

---

## 🧪 Testing

*(Add instructions here if you integrate unit tests, linting, or CI workflows.)*

---

## 📄 License

Specify your license (e.g., MIT) here.

---

## 🧠 Notes

This is a **Next.js** app leveraging server‑side features and static optimization for highly performant, SEO‑friendly pages. It’s backed by Vercel’s global CDN for fast response times worldwide. ([nextjs.org](https://nextjs.org/?utm_source=chatgpt.com))
