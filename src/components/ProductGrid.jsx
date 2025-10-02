import React, { useState, useMemo } from 'react';
import { Filter, Grid, List, SortAsc } from 'lucide-react';
import { Button } from '@/components/ui/button.jsx';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, selectedCategory, searchQuery }) => {
  const [sortBy, setSortBy] = useState('name');
  const [filterType, setFilterType] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  // Get unique product types for filtering
  const productTypes = useMemo(() => {
    const types = [...new Set(products.map(product => product.type))];
    return types;
  }, [products]);

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by product type
    if (filterType !== 'all') {
      filtered = filtered.filter(product => product.type === filterType);
    }

    // Filter by price range
    if (priceRange !== 'all') {
      switch (priceRange) {
        case 'under-25':
          filtered = filtered.filter(product => product.price < 25);
          break;
        case '25-40':
          filtered = filtered.filter(product => product.price >= 25 && product.price <= 40);
          break;
        case 'over-40':
          filtered = filtered.filter(product => product.price > 40);
          break;
      }
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'newest':
          return b.id - a.id; // Assuming higher ID means newer
        default:
          return 0;
      }
    });

    return filtered;
  }, [products, filterType, priceRange, sortBy]);

  const getCategoryTitle = () => {
    if (searchQuery && searchQuery.trim()) {
      return `Search Results for "${searchQuery}"`;
    }
    if (!selectedCategory.name) {
      return `All ${selectedCategory.type.charAt(0).toUpperCase() + selectedCategory.type.slice(1)}s`;
    }
    return selectedCategory.name;
  };

  const getCategorySubtitle = () => {
    const total = products.length;
    const filtered = filteredAndSortedProducts.length;
    
    if (total === filtered) {
      return `${total} products`;
    }
    return `${filtered} of ${total} products`;
  };

  return (
    <div className="flex-1 p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">
          {getCategoryTitle()}
        </h1>
        <p className="text-muted-foreground">
          {getCategorySubtitle()}
        </p>
      </div>

      {/* Filters and Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 p-4 bg-muted/50 rounded-lg">
        <div className="flex flex-wrap gap-4">
          {/* Product Type Filter */}
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-3 py-1 border border-border rounded-md bg-background text-foreground text-sm"
            >
              <option value="all">All Types</option>
              {productTypes.map(type => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ')}
                </option>
              ))}
            </select>
          </div>

          {/* Price Range Filter */}
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Price:</span>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="px-3 py-1 border border-border rounded-md bg-background text-foreground text-sm"
            >
              <option value="all">All Prices</option>
              <option value="under-25">Under $25</option>
              <option value="25-40">$25 - $40</option>
              <option value="over-40">Over $40</option>
            </select>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          {/* Sort Options */}
          <div className="flex items-center space-x-2">
            <SortAsc className="h-4 w-4 text-muted-foreground" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-1 border border-border rounded-md bg-background text-foreground text-sm"
            >
              <option value="name">Name A-Z</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest First</option>
            </select>
          </div>

          {/* View Mode Toggle */}
          <div className="flex border border-border rounded-md">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('grid')}
              className="rounded-r-none"
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('list')}
              className="rounded-l-none"
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Products Display */}
      {filteredAndSortedProducts.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-muted-foreground mb-4">
            <Filter className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p className="text-lg">No products found</p>
            <p className="text-sm">Try adjusting your filters or browse other categories</p>
          </div>
          <Button 
            onClick={() => {
              setFilterType('all');
              setPriceRange('all');
            }}
            variant="outline"
          >
            Clear Filters
          </Button>
        </div>
      ) : (
        <div className={
          viewMode === 'grid' 
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            : "space-y-4"
        }>
          {filteredAndSortedProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product}
            />
          ))}
        </div>
      )}

      {/* Load More Button (for future pagination) */}
      {filteredAndSortedProducts.length > 0 && (
        <div className="text-center mt-8">
          <Button variant="outline" size="lg">
            Load More Products
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
