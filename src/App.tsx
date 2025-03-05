import React, { useState } from 'react';
import { BookOpen, Smartphone, MonitorSmartphone, Pencil, ExternalLink } from 'lucide-react';
import { Toaster } from 'react-hot-toast';
import ProductCard from './components/ProductCard';
import CategoryFilter from './components/CategoryFilter';
import Header from './components/Header';
import Footer from './components/Footer';
import { products } from './data/products';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Products', icon: <ExternalLink size={20} /> },
    { id: 'books', name: 'Books', icon: <BookOpen size={20} /> },
    { id: 'gadgets', name: 'Gadgets', icon: <Smartphone size={20} /> },
    { id: 'software', name: 'Software', icon: <MonitorSmartphone size={20} /> },
    { id: 'stationery', name: 'Stationery', icon: <Pencil size={20} /> },
    { id: 'others', name: 'Others', icon: <ExternalLink size={20} /> }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="fixed inset-0 bg-gradient-radial from-indigo-900/10 to-transparent pointer-events-none" aria-hidden="true"></div>
      <Toaster position="top-center" />
      
      <Header />
      
      <main className="flex-grow container mx-auto px-8 py-8 relative z-10">
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            My Product Recommendations
          </h1>
          <p className="text-center text-gray-400 max-w-2xl mx-auto">
            Discover my personally tested and reviewed products across various categories. 
            Each recommendation comes with my honest feedback and experience.
          </p>
        </section>

        <CategoryFilter 
          categories={categories} 
          selectedCategory={selectedCategory} 
          onSelectCategory={setSelectedCategory} 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App