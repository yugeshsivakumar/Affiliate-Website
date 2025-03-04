import React from 'react';

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  selectedCategory, 
  onSelectCategory 
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          className={`
            flex items-center px-4 py-2 rounded-full transition-all duration-300
            ${selectedCategory === category.id 
              ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg neon-glow' 
              : 'glass-effect text-gray-300 hover:text-white hover:border-indigo-500'}
          `}
        >
          <span className="mr-2">{category.icon}</span>
          {category.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;