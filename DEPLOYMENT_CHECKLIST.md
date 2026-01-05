# Deployment Checklist

## ✅ **Before Deployment:**

### **1. Test Build Locally**
```bash
npm run build
npm install -g serve
serve -s build
```
Visit `http://localhost:3000` to test production build

### **2. Check All Links**
- ✅ Navigation links work
- ✅ Social media links are correct
- ✅ Project links work
- ✅ Contact form submits properly

### **3. Optimize Performance**
- ✅ Images are optimized
- ✅ No console errors
- ✅ All dependencies installed

### **4. Update Content**
- ✅ Replace placeholder text
- ✅ Add real project URLs
- ✅ Update contact information
- ✅ Check Formspree form ID

### **5. SEO Optimization**
- ✅ Update `public/index.html` title
- ✅ Add meta description
- ✅ Add favicon
- ✅ Add Open Graph tags

## 🚀 **Deployment Steps (Netlify)**

### **Option A: Drag & Drop**
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag `build` folder to deploy area
4. Get live URL instantly!

### **Option B: GitHub Integration**
1. Push code to GitHub
2. Connect repo to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`
5. Deploy automatically on every push

## 📝 **Post-Deployment**

### **1. Test Everything**
- ✅ All pages load correctly
- ✅ Mobile responsiveness works
- ✅ Contact form sends emails
- ✅ All animations work
- ✅ Dark/light mode toggle works

### **2. Performance Check**
- Test on [PageSpeed Insights](https://pagespeed.web.dev/)
- Check loading times
- Verify mobile performance

### **3. Share Your Portfolio**
- Add URL to GitHub repo description
- Update LinkedIn profile
- Share on social media
- Add to resume

## 🔧 **Custom Domain Setup (Optional)**

### **1. Buy Domain**
- Namecheap, GoDaddy, or Google Domains
- Choose something like: `mobinmiah.dev` or `mobinmiah.com`

### **2. Connect to Netlify**
- Go to Netlify site settings
- Add custom domain
- Update DNS records as instructed
- SSL certificate auto-generated

## 🎯 **Recommended URL Structure**
- **Netlify default**: `https://mobin-portfolio.netlify.app`
- **Custom domain**: `https://mobinmiah.dev`
- **GitHub Pages**: `https://mobinmiah.github.io/portfolio`

## 📊 **Analytics (Optional)**
- Add Google Analytics
- Track visitor behavior
- Monitor performance
- See which projects get most views

## 🔄 **Continuous Deployment**
Once connected to GitHub:
- Make changes locally
- Push to GitHub: `git push origin main`
- Netlify automatically rebuilds and deploys
- Live site updates in 1-2 minutes

## 🆘 **Troubleshooting**
- **Build fails**: Check console for errors
- **404 errors**: Ensure routing is configured
- **Form not working**: Verify Formspree setup
- **Images not loading**: Check image URLs
- **Slow loading**: Optimize images and code