# Product Listing Page - (PLP)

## AppScrip Frontend Assignment

## 📌 Objective

The goal of this project is to create a fully functional **Product Listing Page (PLP)** that matches the provided Figma design.

This page simulates a real-world e-commerce product listing interface, including:

* Header with navigation and search
* Sidebar filters (categories, price, etc.)
* Product grid displaying items
* Footer section

### 🎯 Purpose

This project demonstrates:

* Converting UI/UX designs into code using **HTML, CSS, and React.js**
* Building **responsive layouts** for desktop, tablet, and mobile
* Applying **SEO best practices** (semantic HTML, meta tags, alt attributes)
* Integrating **dynamic data** using a mock API
* Writing **clean, maintainable, and efficient code**
* Deploying a live project and managing version control with GitHub

---

## 🛠️ Technical Requirements

### Software & Tools

* **Code Editor**: Visual Studio Code (VS Code)
* **Version Control**: Git + GitHub
* **Runtime**: Node.js (v14+) with npm
* **Browser**: Chrome / Firefox
* **Deployment**: Netlify (Free Tier)
* **Mock API (Optional)**: https://fakestoreapi.com/

### Libraries

* React.js (Create React App)
* Optional: Axios (for API calls)

> ⚠️ Note: Avoid heavy UI frameworks like Bootstrap. Use pure CSS.

---

## 🚀 Project Setup

### 1. Clone Repository

```bash
git clone https://github.com/yourusername/Appscrip-task-yourname.git
cd Appscrip-task-yourname
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm start
```

---

## 🧱 Features

* ✅ Responsive product grid (desktop, tablet, mobile)
* ✅ Sidebar filters UI
* ✅ Reusable React components
* ✅ Clean and minimal DOM structure
* ✅ SEO-friendly HTML structure
* ✅ API integration (optional)
* ✅ Optimized images with alt text

---

## 🎨 Implementation Steps

### Step 1: Review Figma Design

* Understand layout, spacing, fonts, and colors
* Identify sections (header, filters, products, footer)

### Step 2: Setup Environment

* Install Node.js & Git
* Initialize React app
* Setup GitHub repo

### Step 3: Build Static Layout

* Use semantic HTML (`header`, `main`, `footer`)
* Write global CSS styles
* Add responsive design using media queries

### Step 4: Convert to React

* Break UI into reusable components
* Manage state using `useState`
* Fetch data using `useEffect` (optional API)

### Step 5: Add Responsiveness

* Use CSS Grid/Flexbox
* Test across devices using dev tools

### Step 6: Deploy

```bash
npm run build
```

* Deploy via Netlify
* Connect GitHub for CI/CD (optional)

---

## 🌐 API Integration (Optional)

Example using Axios:

```javascript
import axios from 'axios';

useEffect(() => {
  axios.get('https://fakestoreapi.com/products')
    .then(res => setProducts(res.data))
    .catch(err => console.error(err));
}, []);
```

---

## 📱 Responsiveness

| Device  | Layout     |
| ------- | ---------- |
| Desktop | 3+ columns |
| Tablet  | 2 columns  |
| Mobile  | 1 column   |

---

## 🔍 SEO Optimization

* Semantic HTML tags
* Meta description in `index.html`
* Image `alt` attributes
* Structured data (JSON-LD)

---

## 📦 Deployment

* Build the project:

  ```bash
  npm run build
  ```
* Deploy using Netlify (drag & drop or Git integration)

---

## 🔗 Deliverables

* ✅ GitHub Repository
* ✅ Live Netlify URL

---

## 📌 Conclusion

This project highlights the ability to build a scalable, responsive, and SEO-friendly product listing interface using modern front-end practices.
It emphasizes clean code structure, performance optimization, and real-world development workflow.
