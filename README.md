# NextPixel - Modern Web Development Studio

A modern, dark-themed website for NextPixel web development studio built with Next.js, React, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Dark Theme**: Deep dark gray background (#0E0E10) with purple and mint accents
- **Modern Typography**: Inter font with large, bold headings
- **Smooth Animations**: Framer Motion animations and hover effects
- **Custom Cursor**: Glowing sphere cursor that reacts to movement
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Interactive Elements**: Hover effects, form animations, and micro-interactions
- **Handwritten Elements**: Personal touches with handwritten-style text
- **Noise Texture**: Subtle background texture to avoid sterile look

## 🎨 Design System

### Colors
- **Background**: `#0E0E10` (deep dark gray)
- **Secondary Background**: `#18181C`
- **Accent Purple**: `#A86CF5`
- **Accent Mint**: `#4EF0C1`
- **Text Primary**: `#FFFFFF`
- **Text Secondary**: `#A1A1AA`
- **Border**: `#27272A`

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: Bold, large sizes (text-5xl to text-8xl)
- **Body**: Regular weight, readable sizes
- **Handwritten**: Kalam font for personal touches

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nextpixel-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with custom cursor
│   └── page.tsx             # Main page component
├── components/
│   ├── AboutSection.tsx     # About us section with team members
│   ├── ContactSection.tsx   # Contact form and info
│   ├── CustomCursor.tsx     # Glowing cursor component
│   ├── Footer.tsx           # Minimalist footer
│   ├── HeroSection.tsx      # Hero section with animations
│   └── PortfolioSection.tsx # Portfolio grid with project cards
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🎯 Sections

### 1. Hero Section
- Large heading with gradient text
- Call-to-action buttons with hover effects
- Abstract background elements
- Scroll indicator

### 2. Portfolio Section
- Grid of project cards
- Hover animations and effects
- Project categories and tags
- "View All Projects" button

### 3. About Section
- Team member cards with hover effects
- Statistics and achievements
- Handwritten personal touches
- Color-coded team roles

### 4. Contact Section
- Contact form with validation
- Animated submission states
- Contact information cards
- Social media links

### 5. Footer
- Minimalist design
- Animated coffee and code icons
- Floating hearts animation
- Handwritten thank you message

## 🛠 Technologies Used

- **Next.js 14**: React framework with App Router
- **React 18**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **React Hook Form**: Form handling
- **EmailJS**: Email service integration

## 🎨 Customization

### Adding New Projects
Edit `components/PortfolioSection.tsx` and add new objects to the `projects` array:

```typescript
{
  id: 7,
  title: 'Your Project',
  description: 'Project description',
  image: '/path/to/image.jpg',
  category: 'Category',
  tags: ['Tag1', 'Tag2'],
}
```

### Changing Colors
Update the color values in `tailwind.config.js`:

```javascript
colors: {
  'accent-purple': '#YOUR_COLOR',
  'accent-mint': '#YOUR_COLOR',
  // ...
}
```

### Adding Animations
Use Framer Motion components for new animations:

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Your content
</motion.div>
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
Build the project for production:
```bash
npm run build
npm start
```

---

Made with ☕ coffee and 💻 code by NextPixel

