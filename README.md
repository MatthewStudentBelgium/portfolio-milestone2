# Roberts_Matthew_602688_Milestone_2 — Portfolio Website

## 📄 Project Overview
This project is a **personal portfolio website** built for the WFS361 module (Milestone 2).  
It was designed in **Figma** and implemented in **React** using modular components, animations, and responsive layouts.

The portfolio showcases my professional profile, education, experience, skills, and projects — with a dynamic user experience achieved through React and Framer Motion.

---

## 🧩 Features

### 🎨 Design & Structure
- Based on the approved Figma wireframes (Milestone 1)
- Clean, responsive layout adaptable to desktop and mobile
- Consistent typography and spacing

### ⚛️ React Development
- Standalone React components:
  - `Header`, `About`, `Education`, `Experience`, `Skills`, `Projects`, `Footer` (Hobbies)
- Components are populated using modular data files from `/src/data`
- Smooth scrolling navigation and section highlighting via Intersection Observer
- Centralized motion settings in `/src/utils/motionSettings.js`

### ✨ Interactivity & Motion
- Entry animations using **Framer Motion**
- Hover scaling and fade effects
- Animated navigation highlight with smooth transitions
- Profile image fade-in and interactive click-to-expand modal

### 🧱 Technology Stack
| Category | Tools |
|-----------|--------|
| Framework | React (Vite) |
| Styling | CSS (component-level styles) |
| Animation | Framer Motion |
| Icons | Lucide-React + PNG assets |
| Deployment | Netlify |

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/Roberts_Matthew_602688_Milestone_2.git
   cd Roberts_Matthew_602688_Milestone_2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run locally**
   ```bash
   npm run dev
   ```
   Then open the app at **http://localhost:5173**

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview the production build (optional)**
   ```bash
   npm run preview
   ```

---

## 🚀 Deployment (Netlify)

1. Push the project to GitHub (exclude `node_modules`).
2. On Netlify → **New site from Git**.
3. Choose your repo and set:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Deploy and copy the public URL.

---

## 📋 Project Requirements Mapping

| Milestone 2 Requirement | Implementation |
|--------------------------|----------------|
| Create a professional portfolio using React | ✅ Fully implemented |
| Separate components for each section | ✅ All sections modular |
| Include animations / transitions | ✅ Framer Motion & CSS transitions |
| Ensure responsive layout | ✅ Desktop/mobile tested |
| Smooth navigation and interactivity | ✅ Fixed navbar with smooth scrolling |
| Visual alignment with Figma design | ✅ Matches layout & theme |

---

## 🧠 Author

**Matthew Roberts**  
Student ID: 602688  
Diploma in Information Technology  
Belgium Campus ITversity

---

## 🏁 Status

✅ Milestone 2 complete and ready for deployment  
Next stage: Milestone 3 (Deployment & Submission)
