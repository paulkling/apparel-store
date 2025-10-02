// Sample data for the apparel store
export const sampleData = {
  artists: [
    {
      id: 1,
      name: "Luna Starlight",
      category: "artist",
      products: [
        {
          id: 101,
          name: "Cosmic Dreams T-Shirt",
          type: "t-shirt",
          price: 29.99,
          image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
          colors: ["black", "navy", "purple"],
          sizes: ["S", "M", "L", "XL", "XXL"],
          description: "Beautiful cosmic-themed design featuring stars and galaxies"
        },
        {
          id: 102,
          name: "Starlight Hoodie",
          type: "hoodie",
          price: 49.99,
          image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
          colors: ["black", "gray", "white"],
          sizes: ["S", "M", "L", "XL", "XXL"],
          description: "Cozy hoodie with Luna's signature starlight pattern"
        },
        {
          id: 103,
          name: "Galaxy Tote Bag",
          type: "bag",
          price: 24.99,
          image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
          colors: ["black", "navy"],
          sizes: ["One Size"],
          description: "Spacious tote bag perfect for everyday use"
        }
      ]
    },
    {
      id: 2,
      name: "Neon Pulse",
      category: "artist",
      products: [
        {
          id: 201,
          name: "Electric Vibes T-Shirt",
          type: "t-shirt",
          price: 27.99,
          image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=400&fit=crop",
          colors: ["black", "neon green", "electric blue"],
          sizes: ["S", "M", "L", "XL"],
          description: "Vibrant neon design that glows under blacklight"
        },
        {
          id: 202,
          name: "Cyberpunk Sweatshirt",
          type: "sweatshirt",
          price: 44.99,
          image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop",
          colors: ["black", "dark gray"],
          sizes: ["S", "M", "L", "XL", "XXL"],
          description: "Futuristic design inspired by cyberpunk aesthetics"
        }
      ]
    },
    {
      id: 3,
      name: "Retro Wave",
      category: "artist",
      products: [
        {
          id: 301,
          name: "80s Sunset T-Shirt",
          type: "t-shirt",
          price: 26.99,
          image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop",
          colors: ["pink", "purple", "orange"],
          sizes: ["S", "M", "L", "XL"],
          description: "Nostalgic 80s-inspired sunset design"
        }
      ]
    }
  ],
  creators: [
    {
      id: 4,
      name: "TechGuru Mike",
      category: "creator",
      products: [
        {
          id: 401,
          name: "Code Life T-Shirt",
          type: "t-shirt",
          price: 28.99,
          image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop",
          colors: ["black", "navy", "gray"],
          sizes: ["S", "M", "L", "XL", "XXL"],
          description: "Perfect for developers and tech enthusiasts"
        },
        {
          id: 402,
          name: "Binary Dreams Hoodie",
          type: "hoodie",
          price: 52.99,
          image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
          colors: ["black", "charcoal"],
          sizes: ["S", "M", "L", "XL", "XXL"],
          description: "Comfortable hoodie with binary code pattern"
        },
        {
          id: 403,
          name: "Developer Laptop Bag",
          type: "bag",
          price: 39.99,
          image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
          colors: ["black", "gray"],
          sizes: ["One Size"],
          description: "Durable laptop bag for the modern developer"
        }
      ]
    },
    {
      id: 5,
      name: "Fitness Queen Sarah",
      category: "creator",
      products: [
        {
          id: 501,
          name: "Strong & Beautiful Tank",
          type: "tank-top",
          price: 22.99,
          image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
          colors: ["pink", "white", "black"],
          sizes: ["XS", "S", "M", "L", "XL"],
          description: "Motivational fitness apparel for strong women"
        },
        {
          id: 502,
          name: "Workout Warrior Sweatshirt",
          type: "sweatshirt",
          price: 42.99,
          image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop",
          colors: ["gray", "pink", "black"],
          sizes: ["XS", "S", "M", "L", "XL"],
          description: "Comfortable sweatshirt for pre and post workout"
        }
      ]
    }
  ],
  games: [
    {
      id: 6,
      name: "Pixel Quest",
      category: "game",
      products: [
        {
          id: 601,
          name: "Hero's Journey T-Shirt",
          type: "t-shirt",
          price: 31.99,
          image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop",
          colors: ["black", "blue", "red"],
          sizes: ["S", "M", "L", "XL", "XXL"],
          description: "Official Pixel Quest merchandise featuring the main character"
        },
        {
          id: 602,
          name: "Boss Battle Hoodie",
          type: "hoodie",
          price: 54.99,
          image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop",
          colors: ["black", "dark red"],
          sizes: ["S", "M", "L", "XL", "XXL"],
          description: "Epic hoodie featuring the final boss design"
        },
        {
          id: 603,
          name: "Inventory Backpack",
          type: "bag",
          price: 45.99,
          image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
          colors: ["brown", "black"],
          sizes: ["One Size"],
          description: "Real-life inventory bag inspired by the game"
        }
      ]
    },
    {
      id: 7,
      name: "Space Odyssey",
      category: "game",
      products: [
        {
          id: 701,
          name: "Galactic Explorer T-Shirt",
          type: "t-shirt",
          price: 29.99,
          image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=400&fit=crop",
          colors: ["navy", "black", "white"],
          sizes: ["S", "M", "L", "XL"],
          description: "Explore the galaxy with this official game merchandise"
        },
        {
          id: 702,
          name: "Starship Crew Sweatshirt",
          type: "sweatshirt",
          price: 47.99,
          image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop",
          colors: ["navy", "gray"],
          sizes: ["S", "M", "L", "XL", "XXL"],
          description: "Join the starship crew with this comfortable sweatshirt"
        }
      ]
    },
    {
      id: 8,
      name: "Fantasy Realms",
      category: "game",
      products: [
        {
          id: 801,
          name: "Dragon Slayer T-Shirt",
          type: "t-shirt",
          price: 33.99,
          image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
          colors: ["black", "burgundy", "forest green"],
          sizes: ["S", "M", "L", "XL", "XXL"],
          description: "Epic fantasy design featuring dragons and warriors"
        }
      ]
    }
  ]
};

// Helper function to get all products from all categories
export const getAllProducts = () => {
  const allProducts = [];
  
  sampleData.artists.forEach(artist => {
    artist.products.forEach(product => {
      allProducts.push({
        ...product,
        categoryType: 'artist',
        categoryName: artist.name
      });
    });
  });
  
  sampleData.creators.forEach(creator => {
    creator.products.forEach(product => {
      allProducts.push({
        ...product,
        categoryType: 'creator',
        categoryName: creator.name
      });
    });
  });
  
  sampleData.games.forEach(game => {
    game.products.forEach(product => {
      allProducts.push({
        ...product,
        categoryType: 'game',
        categoryName: game.name
      });
    });
  });
  
  return allProducts;
};

// Helper function to get products by category and name
export const getProductsByCategory = (categoryType, categoryName = null) => {
  if (!categoryName) {
    // Return all products for the category type
    return getAllProducts().filter(product => product.categoryType === categoryType);
  }
  
  // Return products for specific category name
  const category = sampleData[categoryType + 's'].find(cat => cat.name === categoryName);
  if (!category) return [];
  
  return category.products.map(product => ({
    ...product,
    categoryType,
    categoryName: category.name
  }));
};
