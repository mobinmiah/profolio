# Mobin Miah - MERN Stack Developer Portfolio

A modern, responsive portfolio website showcasing my skills and projects as a MERN stack developer.

## 🚀 Live Demo

[View Live Portfolio](https://your-portfolio-url.netlify.app) *(Update this after deployment)*

## 🛠️ Built With

- **Frontend**: React.js, Tailwind CSS, DaisyUI
- **Animations**: Framer Motion, GSAP
- **Smooth Scrolling**: Lenis
- **Icons**: Remix Icons, Lucide React
- **UI Components**: shadcn/ui
- **Form Handling**: Formspree
- **Deployment**: Netlify

## ✨ Features

- 🎨 **Modern Design** - Clean, professional interface
- 📱 **Fully Responsive** - Works on all devices
- 🌙 **Dark/Light Mode** - Theme toggle functionality
- ⚡ **Smooth Animations** - Framer Motion & GSAP
- 📧 **Contact Form** - Working contact form with Formspree
- 🚀 **Fast Loading** - Optimized performance
- 🎯 **SEO Friendly** - Proper meta tags and structure

## 📂 Project Structure

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   ├── Header.jsx       # Navigation header
│   ├── Hero.jsx         # Hero section
│   ├── About.jsx        # About me section
│   ├── Services.jsx     # Services offered
│   ├── Process.jsx      # Work process
│   ├── Skills.jsx       # Technical skills
│   ├── Projects.jsx     # Portfolio projects
│   ├── Contact.jsx      # Contact form
│   └── Footer.jsx       # Footer section
├── assets/              # Images and static assets
├── lib/                 # Utility functions
├── App.jsx              # Main app component
└── index.jsx            # Entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/mobinmiah/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
```

## 📧 Contact Form Setup

The contact form uses Formspree for handling submissions:

1. Create account at [Formspree.io](https://formspree.io)
2. Create a new form
3. Update the form ID in `src/components/Contact.jsx`
4. Replace `mlgdaqrk` with your form ID

## 🎨 Customization

### Colors
Update colors in `tailwind.config.js`:
```javascript
colors: {
  primary: '#your-color',
  // ... other colors
}
```

### Content
- Update personal information in components
- Replace project data in `Projects.jsx`
- Modify skills in `Skills.jsx`
- Update social links in `Header.jsx` and other components

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 640px
- **Tablet**: 641px - 1024px  
- **Desktop**: 1025px+

## 🚀 Deployment

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Drag the `build` folder to [Netlify](https://netlify.com)
3. Get instant live URL

### Vercel
1. Connect GitHub repository
2. Auto-deploy on every push

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 👨‍💻 Author

**Mobin Miah**
- LinkedIn: [linkedin.com/in/mobin-miah](https://www.linkedin.com/in/mobin-miah)
- GitHub: [github.com/mobinmiah](https://github.com/mobinmiah)
- Email: mdmobinmiah1998@gmail.com

## 🙏 Acknowledgments

- [React.js](https://reactjs.org/) - UI Library
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Framer Motion](https://www.framer.com/motion/) - Animation Library
- [GSAP](https://greensock.com/gsap/) - Animation Library
- [Formspree](https://formspree.io/) - Form Handling

---

⭐ **Star this repository if you found it helpful!**