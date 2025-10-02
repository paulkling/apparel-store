import React, { useState, useMemo } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ProductGrid from './components/ProductGrid';
import { getAllProducts, getProductsByCategory } from './data/sampleData';

function App() {
  const [selectedCategory, setSelectedCategory] = useState({
    type: 'artist',
    name: null
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Get products based on selected category and search
  const products = useMemo(() => {
    let categoryProducts;
    
    if (selectedCategory.name) {
      categoryProducts = getProductsByCategory(selectedCategory.type, selectedCategory.name);
    } else {
      categoryProducts = getProductsByCategory(selectedCategory.type);
    }

    // Filter by search query if present
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      categoryProducts = categoryProducts.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.categoryName.toLowerCase().includes(query) ||
        product.type.toLowerCase().includes(query)
      );
    }

    return categoryProducts;
  }, [selectedCategory, searchQuery]);

  const handleCategorySelect = (categoryType, categoryName = null) => {
    setSelectedCategory({
      type: categoryType,
      name: categoryName
    });
    // Close mobile menu when category is selected
    setIsMobileMenuOpen(false);
  };

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    // If searching, show all products across categories
    if (query.trim()) {
      // You could optionally switch to show all categories when searching
      // setSelectedCategory({ type: 'all', name: null });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header 
        onMenuToggle={handleMenuToggle}
        isMobileMenuOpen={isMobileMenuOpen}
        onSearch={handleSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Content */}
      <div className="flex relative">
        {/* Sidebar */}
        <div className={`
          fixed lg:static inset-y-0 left-0 z-40 w-80 lg:w-1/4 xl:w-1/5 
          transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          lg:block
        `}>
          <Sidebar
            selectedCategory={selectedCategory}
            onCategorySelect={handleCategorySelect}
            className="h-[calc(100vh-73px)]" // Subtract header height
          />
        </div>

        {/* Mobile Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 z-30 bg-black/50 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Main Product Area */}
        <div className="flex-1 lg:w-3/4 xl:w-4/5 min-h-[calc(100vh-73px)]">
          <ProductGrid 
            products={products}
            selectedCategory={selectedCategory}
            searchQuery={searchQuery}
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">AH</span>
                </div>
                <span className="font-bold text-foreground">ApparelHub</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your destination for unique artist, creator, and gaming merchandise.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-3">Shop</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Artists</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Creators</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Games</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">New Arrivals</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-3">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Returns</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-3">Connect</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Newsletter</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Social Media</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 ApparelHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
