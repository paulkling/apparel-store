import React, { useState } from 'react';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';

const ProductCard = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const handleAddToCart = () => {
    // Add to cart functionality would go here
    console.log('Added to cart:', { 
      ...product, 
      selectedColor, 
      selectedSize 
    });
  };

  const handleQuickView = () => {
    // Quick view functionality would go here
    console.log('Quick view:', product);
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="group bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-2">
          <Button
            size="sm"
            variant="secondary"
            onClick={handleQuickView}
            className="bg-white/90 text-black hover:bg-white"
          >
            <Eye className="h-4 w-4 mr-1" />
            Quick View
          </Button>
        </div>

        {/* Like Button */}
        <button
          onClick={toggleLike}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white transition-colors"
        >
          <Heart 
            className={`h-4 w-4 transition-colors ${
              isLiked ? 'fill-red-500 text-red-500' : 'text-gray-600'
            }`} 
          />
        </button>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
            {product.categoryName}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="mb-2">
          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Price */}
        <div className="mb-3">
          <span className="text-lg font-bold text-foreground">
            ${product.price}
          </span>
        </div>

        {/* Color Selection */}
        <div className="mb-3">
          <p className="text-xs text-muted-foreground mb-2">Color:</p>
          <div className="flex space-x-2">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`w-6 h-6 rounded-full border-2 transition-all ${
                  selectedColor === color 
                    ? 'border-primary scale-110' 
                    : 'border-border hover:border-muted-foreground'
                }`}
                style={{ 
                  backgroundColor: color === 'white' ? '#ffffff' : 
                                 color === 'black' ? '#000000' :
                                 color === 'navy' ? '#1e3a8a' :
                                 color === 'gray' ? '#6b7280' :
                                 color === 'charcoal' ? '#374151' :
                                 color === 'pink' ? '#ec4899' :
                                 color === 'purple' ? '#8b5cf6' :
                                 color === 'blue' ? '#3b82f6' :
                                 color === 'red' ? '#ef4444' :
                                 color === 'green' ? '#10b981' :
                                 color === 'orange' ? '#f97316' :
                                 color === 'neon green' ? '#84cc16' :
                                 color === 'electric blue' ? '#06b6d4' :
                                 color === 'dark gray' ? '#4b5563' :
                                 color === 'dark red' ? '#dc2626' :
                                 color === 'brown' ? '#92400e' :
                                 color === 'burgundy' ? '#991b1b' :
                                 color === 'forest green' ? '#166534' :
                                 color
                }}
                title={color}
              />
            ))}
          </div>
        </div>

        {/* Size Selection */}
        <div className="mb-4">
          <p className="text-xs text-muted-foreground mb-2">Size:</p>
          <div className="flex flex-wrap gap-1">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-2 py-1 text-xs border rounded transition-colors ${
                  selectedSize === size
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border hover:border-muted-foreground'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button 
          onClick={handleAddToCart}
          className="w-full"
          size="sm"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
