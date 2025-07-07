# Cognify - Brain-Computer Interface Website

A modern, animated website for Cognify, showcasing hands-free assistive technology designed to empower individuals with mobility impairments through brain-computer interfaces.

## 🚀 Features

- **Modern Design**: Clean, futuristic interface with smooth animations
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Animated logo, particle effects, and smooth transitions
- **Single-Page Application**: Seamless scrolling experience with anchor navigation
- **Animated Background**: Custom bubble animation system
- **Accessibility**: Designed with accessibility in mind

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.5
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber
- **Icons**: Heroicons
- **Deployment**: Vercel-ready

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 18.17 or higher)
- **npm** (comes with Node.js) or **yarn**

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/cognify.git
cd cognify
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
cognify/
├── public/
│   └── cognify-logo.png          # Main logo file
├── src/
│   ├── app/
│   │   ├── globals.css           # Global styles
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Main homepage
│   └── components/
│       ├── BubblesBackground.tsx # Animated background
│       ├── Navbar.tsx            # Navigation component
│       └── Hero3D.tsx            # 3D hero component
├── package.json                  # Dependencies and scripts
├── tailwind.config.js           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
└── README.md                    # This file
```

## 🎨 Customization

### Colors
The website uses a custom color palette:
- **Primary Blue**: `#5f5fff`
- **Purple**: `#a259ff`
- **Background**: Black (`#000000`)

### Logo
Replace `public/cognify-logo.png` with your own logo file. The logo should be:
- PNG format
- Recommended size: 600x338px or similar aspect ratio
- Transparent background preferred

### Content
Edit `src/app/page.tsx` to update:
- Company information
- Team member details
- Product features
- Contact information

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically

### Deploy to Other Platforms

#### Build for Production

```bash
npm run build
# or
yarn build
```

#### Start Production Server

```bash
npm start
# or
yarn start
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support, email support@cognify.com or create an issue in this repository.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌟 Features in Detail

### Animated Background
- Custom bubble animation system using HTML5 Canvas
- Smooth, performance-optimized animations
- Responsive to window resizing

### Interactive Logo
- Hover effects with particle bursts
- Smooth scaling animations
- Glowing effects

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interactions

### Performance
- Optimized images and animations
- Lazy loading for better performance
- Minimal bundle size

---

**Cognify** - Empowering minds. Transforming possibilities.
