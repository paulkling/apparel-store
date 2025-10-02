# ApparelHub - Artist & Creator Merchandise Store

A modern, responsive e-commerce website for artist, creator, and gaming merchandise built with React and Tailwind CSS.

## 🌟 Features

### **Navigation & Layout**
- **Responsive sidebar navigation** (10-25% width) with expandable categories
- **Main product display area** (75-90% width) with grid layout
- **Mobile-friendly design** with collapsible sidebar and touch interactions
- **Professional header** with logo, search, and user features

### **Product Management**
- **Category organization**: Artists, Creators, and Games
- **Individual subcategories** for each artist/creator/game
- **Product filtering** by type (t-shirt, hoodie, bag, etc.) and price range
- **Sorting options**: Name, price (low-to-high, high-to-low), newest first
- **Grid/list view toggle** for different display preferences

### **Search Functionality**
- **Real-time search** across product names, descriptions, and categories
- **Search suggestions** and instant results
- **Clear search** functionality with visual feedback
- **Mobile-optimized** search experience

### **Interactive Product Cards**
- **Color selection** with visual color swatches
- **Size selection** with clickable size options
- **Add to cart** functionality with shopping cart integration
- **Wishlist toggle** for saving favorite products
- **Quick view overlay** with hover effects
- **Smooth animations** and micro-interactions

### **User Experience**
- **Shopping cart** with item counter
- **User account features** with dropdown menu
- **Responsive design** that works on desktop, tablet, and mobile
- **Professional styling** with modern design principles
- **Accessibility features** and keyboard navigation

## 🚀 Getting Started

### **Prerequisites**
- Node.js (v16 or higher)
- npm or pnpm

### **Installation**
```bash
# Clone the repository
git clone https://github.com/yourusername/apparel-store.git
cd apparel-store

# Install dependencies
npm install
# or
pnpm install

# Start development server
npm run dev
# or
pnpm dev
```

### **Development**
```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📁 Project Structure

```
apparel-store/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── Header.jsx     # Top navigation header
│   │   ├── Sidebar.jsx    # Left sidebar navigation
│   │   ├── ProductCard.jsx # Individual product cards
│   │   ├── ProductGrid.jsx # Product display grid
│   │   └── ui/           # UI components (shadcn/ui)
│   ├── data/
│   │   └── sampleData.js  # Product data and helper functions
│   ├── assets/           # Images and static files
│   ├── App.jsx           # Main application component
│   ├── App.css           # Global styles and Tailwind config
│   ├── main.jsx          # Application entry point
│   └── index.css         # Base styles
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── README.md            # This file
```

## 🛠️ Built With

- **[React](https://reactjs.org/)** - Frontend framework
- **[Vite](https://vitejs.dev/)** - Build tool and dev server
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[shadcn/ui](https://ui.shadcn.com/)** - UI component library
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop** (1200px+): Full sidebar and grid layout
- **Tablet** (768px-1199px): Responsive grid with collapsible sidebar
- **Mobile** (320px-767px): Mobile-first design with hamburger menu

## 🎨 Customization

### **Adding New Products**
Edit `src/data/sampleData.js` to add new products, artists, creators, or games:

```javascript
// Add new artist
{
  id: 4,
  name: "New Artist",
  category: "artist",
  products: [
    {
      id: 401,
      name: "Product Name",
      type: "t-shirt",
      price: 29.99,
      image: "image-url",
      colors: ["black", "white"],
      sizes: ["S", "M", "L", "XL"],
      description: "Product description"
    }
  ]
}
```

### **Styling**
- Modify `src/App.css` for global styles
- Update Tailwind classes in components for styling changes
- Customize color scheme in `tailwind.config.js`

### **Components**
- All components are modular and reusable
- Props are well-documented in component files
- Easy to extend with additional features

## 🚀 Deployment

### **Build for Production**
```bash
npm run build
```

### **Deploy to Vercel**
```bash
npm install -g vercel
vercel --prod
```

### **Deploy to Netlify**
```bash
npm run build
# Upload dist/ folder to Netlify
```

### **Deploy with Manus**
```bash
# Build the project
npm run build

# Use Manus deployment tools
# Deploy the dist/ folder as a static site
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspiration from modern e-commerce platforms
- Icons provided by [Lucide](https://lucide.dev/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Images from [Unsplash](https://unsplash.com/)

## 📞 Support

If you have any questions or need help with the project:
- Create an issue on GitHub
- Check the documentation
- Review the code comments for implementation details

---

**Built with ❤️ using Manus AI**
