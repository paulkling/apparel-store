import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Palette, Users, Gamepad2 } from 'lucide-react';
import { sampleData } from '../data/sampleData';

const Sidebar = ({ selectedCategory, onCategorySelect, className = "" }) => {
  const [expandedSections, setExpandedSections] = useState({
    artists: true,
    creators: false,
    games: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleCategoryClick = (categoryType, categoryName = null) => {
    onCategorySelect(categoryType, categoryName);
  };

  const isSelected = (categoryType, categoryName = null) => {
    return selectedCategory.type === categoryType && selectedCategory.name === categoryName;
  };

  const CategorySection = ({ title, icon: Icon, items, sectionKey, categoryType }) => (
    <div className="mb-4">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="flex items-center justify-between w-full p-3 text-left hover:bg-accent rounded-lg transition-colors group"
      >
        <div className="flex items-center space-x-2">
          <Icon className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
          <span className="font-medium text-foreground group-hover:text-foreground">{title}</span>
          <span className="text-sm text-muted-foreground">({items.length})</span>
        </div>
        {expandedSections[sectionKey] ? (
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        ) : (
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
        )}
      </button>
      
      {expandedSections[sectionKey] && (
        <div className="mt-2 space-y-1">
          <button
            onClick={() => handleCategoryClick(categoryType)}
            className={`w-full text-left p-2 pl-8 rounded-md text-sm transition-colors ${
              isSelected(categoryType) 
                ? 'bg-primary text-primary-foreground font-medium' 
                : 'hover:bg-accent text-muted-foreground hover:text-foreground'
            }`}
          >
            All {title}
          </button>
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => handleCategoryClick(categoryType, item.name)}
              className={`w-full text-left p-2 pl-8 rounded-md text-sm transition-colors ${
                isSelected(categoryType, item.name)
                  ? 'bg-primary text-primary-foreground font-medium'
                  : 'hover:bg-accent text-muted-foreground hover:text-foreground'
              }`}
            >
              {item.name}
              <span className="ml-2 text-xs opacity-70">({item.products.length})</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className={`bg-card border-r border-border h-full overflow-y-auto ${className}`}>
      <div className="p-4">
        <h2 className="text-lg font-semibold text-foreground mb-4">Categories</h2>
        
        <CategorySection
          title="Artists"
          icon={Palette}
          items={sampleData.artists}
          sectionKey="artists"
          categoryType="artist"
        />
        
        <CategorySection
          title="Creators"
          icon={Users}
          items={sampleData.creators}
          sectionKey="creators"
          categoryType="creator"
        />
        
        <CategorySection
          title="Games"
          icon={Gamepad2}
          items={sampleData.games}
          sectionKey="games"
          categoryType="game"
        />
      </div>
    </div>
  );
};

export default Sidebar;
