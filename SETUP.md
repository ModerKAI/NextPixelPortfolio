# NextPixel Website Setup Guide

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   ```
   http://localhost:3000
   ```

## 📧 EmailJS Setup (Optional)

To enable the contact form functionality, you'll need to set up EmailJS:

### 1. Create EmailJS Account
- Go to [EmailJS.com](https://www.emailjs.com/)
- Sign up for a free account
- Create a new service (Gmail, Outlook, etc.)

### 2. Get Your Credentials
- **Service ID**: Found in your EmailJS dashboard
- **Template ID**: Create an email template
- **Public Key**: Found in Account settings

### 3. Update Contact Form
Edit `components/ContactSection.tsx` and replace the form submission logic:

```typescript
import emailjs from '@emailjs/browser'

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_PUBLIC_KEY'
    )
    setIsSubmitted(true)
  } catch (error) {
    console.error('Error sending email:', error)
  } finally {
    setIsSubmitting(false)
  }
}
```

### 4. Install EmailJS
```bash
npm install @emailjs/browser
```

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  'dark-bg': '#0E0E10',        // Main background
  'dark-bg-alt': '#18181C',    // Secondary background
  'accent-purple': '#A86CF5',  // Primary accent
  'accent-mint': '#4EF0C1',    // Secondary accent
}
```

### Content
- **Hero Section**: Edit `components/HeroSection.tsx`
- **Portfolio**: Edit `components/PortfolioSection.tsx`
- **About**: Edit `components/AboutSection.tsx`
- **Contact**: Edit `components/ContactSection.tsx`

### Fonts
The website uses Inter font from Google Fonts. To change:

1. Update the import in `app/globals.css`:
   ```css
   @import url('https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@300;400;500;600;700;800;900&display=swap');
   ```

2. Update the font family in `tailwind.config.js`:
   ```javascript
   fontFamily: {
     'sans': ['YOUR_FONT', 'system-ui', 'sans-serif'],
   }
   ```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify

### Custom Server
1. Build: `npm run build`
2. Start: `npm start`

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use:**
   ```bash
   npm run dev -- -p 3001
   ```

2. **Build errors:**
   ```bash
   npm run build
   ```

3. **TypeScript errors:**
   ```bash
   npx tsc --noEmit
   ```

### Performance Tips

1. **Optimize images:** Use WebP format and proper sizing
2. **Lazy loading:** Images are automatically lazy-loaded
3. **Code splitting:** Next.js handles this automatically

## 📞 Support

If you need help with setup or customization:

- **Email**: hello@nextpixel.studio
- **Telegram**: @nextpixel
- **GitHub**: github.com/nextpixel

---

Made with ❤️ by NextPixel
