import React, { useState } from 'react';
import { 
  Search, 
  ShoppingCart, 
  User, 
  Heart, 
  Menu, 
  X,
  Bell,
  Settings,
  LogOut
} from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const Header = ({ onMenuToggle, isMobileMenuOpen, onSearch, searchQuery, setSearchQuery }) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [cartItemCount] = useState(3); // Mock cart count
  const [isLoggedIn] = useState(true); // Mock login state

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleUserAction = (action) => {
    console.log('User action:', action);
    setIsUserMenuOpen(false);
    // Handle user actions here
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        
        {/* Left Section: Mobile Menu + Logo */}
        <div className="flex items-center space-x-4">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onMenuToggle}
            className="lg:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/70 rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">AH</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-foreground">ApparelHub</h1>
              <p className="text-xs text-muted-foreground -mt-1">Artist & Creator Merch</p>
            </div>
          </div>
        </div>

        {/* Center Section: Search Bar */}
        <div className="flex-1 max-w-lg mx-4">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products, artists, creators, games..."
              value={searchQuery || ''}
              onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200 text-sm"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery && setSearchQuery('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </form>
        </div>

        {/* Right Section: User Actions */}
        <div className="flex items-center space-x-2">
          
          {/* Wishlist Button */}
          <Button variant="ghost" size="sm" className="relative">
            <Heart className="h-5 w-5" />
            <span className="sr-only">Wishlist</span>
          </Button>

          {/* Shopping Cart */}
          <Button variant="ghost" size="sm" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
            <span className="sr-only">Shopping cart</span>
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="sm" className="relative hidden sm:flex">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 bg-destructive w-2 h-2 rounded-full"></span>
            <span className="sr-only">Notifications</span>
          </Button>

          {/* User Menu */}
          <div className="relative">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={toggleUserMenu}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                <User className="h-4 w-4" />
              </div>
              {isLoggedIn && (
                <span className="hidden md:block text-sm font-medium">John Doe</span>
              )}
            </Button>

            {/* User Dropdown Menu */}
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-lg py-1 z-50">
                {isLoggedIn ? (
                  <>
                    <div className="px-4 py-2 border-b border-border">
                      <p className="text-sm font-medium text-foreground">John Doe</p>
                      <p className="text-xs text-muted-foreground">john@example.com</p>
                    </div>
                    <button
                      onClick={() => handleUserAction('profile')}
                      className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-accent flex items-center space-x-2"
                    >
                      <User className="h-4 w-4" />
                      <span>My Profile</span>
                    </button>
                    <button
                      onClick={() => handleUserAction('orders')}
                      className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-accent flex items-center space-x-2"
                    >
                      <ShoppingCart className="h-4 w-4" />
                      <span>My Orders</span>
                    </button>
                    <button
                      onClick={() => handleUserAction('wishlist')}
                      className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-accent flex items-center space-x-2"
                    >
                      <Heart className="h-4 w-4" />
                      <span>Wishlist</span>
                    </button>
                    <button
                      onClick={() => handleUserAction('settings')}
                      className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-accent flex items-center space-x-2"
                    >
                      <Settings className="h-4 w-4" />
                      <span>Settings</span>
                    </button>
                    <div className="border-t border-border mt-1 pt-1">
                      <button
                        onClick={() => handleUserAction('logout')}
                        className="w-full text-left px-4 py-2 text-sm text-destructive hover:bg-accent flex items-center space-x-2"
                      >
                        <LogOut className="h-4 w-4" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleUserAction('login')}
                      className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-accent"
                    >
                      Sign In
                    </button>
                    <button
                      onClick={() => handleUserAction('register')}
                      className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-accent"
                    >
                      Create Account
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Search Bar (shown when menu is open) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-border p-4">
          <form onSubmit={handleSearch} className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products, artists, creators..."
              value={searchQuery || ''}
              onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-200"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery && setSearchQuery('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </form>
        </div>
      )}

      {/* Overlay for mobile menu */}
      {isUserMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/20" 
          onClick={() => setIsUserMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
