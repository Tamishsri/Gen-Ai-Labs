import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RegionExplore from './components/RegionExplore';
import FoodGuide from './components/FoodGuide';
import CulturalEtiquette from './components/CulturalEtiquette';
import TransportSection from './components/TransportSection';
import SeasonalJapan from './components/SeasonalJapan';
import SakuraOverlay from './components/SakuraOverlay';
import TripDrawer from './components/TripDrawer';
import LanguageCorner from './components/LanguageCorner';
import VideoModal from './components/VideoModal';
import AIStudio from './components/AIStudio';
import { SavedItem } from './types';

function App() {
  // Saved Items State
  const [savedItems, setSavedItems] = useState<SavedItem[]>(() => {
    try {
      const saved = localStorage.getItem('japanTripItems');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isAIStudioOpen, setIsAIStudioOpen] = useState(false);

  // Night Mode State
  const [isNightMode, setIsNightMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark' || 
             (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  // Persist Saved Items
  useEffect(() => {
    localStorage.setItem('japanTripItems', JSON.stringify(savedItems));
  }, [savedItems]);

  // Apply Night Mode
  useEffect(() => {
    if (isNightMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isNightMode]);

  const handleSaveItem = (item: SavedItem) => {
    setSavedItems(prev => {
      if (prev.find(i => i.id === item.id)) {
        return prev.filter(i => i.id !== item.id); // Toggle off
      }
      setIsDrawerOpen(true); // Open drawer on add
      return [...prev, item];
    });
  };

  const handleRemoveItem = (id: string) => {
    setSavedItems(prev => prev.filter(i => i.id !== id));
  };

  const handleUpdateNote = (id: string, note: string) => {
    setSavedItems(prev => prev.map(item => 
      item.id === id ? { ...item, notes: note } : item
    ));
  };

  return (
    <div className="font-sans text-ink-black bg-paper-white dark:bg-night-bg min-h-screen selection:bg-sakura-pink selection:text-ink-black dark:selection:bg-japan-red dark:selection:text-white transition-colors duration-500">
      <SakuraOverlay />
      
      <Navbar 
        toggleTripDrawer={() => setIsDrawerOpen(!isDrawerOpen)} 
        savedCount={savedItems.length}
        isNightMode={isNightMode}
        toggleNightMode={() => setIsNightMode(!isNightMode)}
        openAIStudio={() => setIsAIStudioOpen(true)}
      />

      <TripDrawer 
        isOpen={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)}
        savedItems={savedItems}
        removeItem={handleRemoveItem}
        updateNote={handleUpdateNote}
      />

      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
      
      <AIStudio isOpen={isAIStudioOpen} onClose={() => setIsAIStudioOpen(false)} />
      
      <main>
        {/* Pass video handler to Hero */}
        <Hero onWatchVideo={() => setIsVideoOpen(true)} onExploreClick={() => document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth' })} />
        
        <RegionExplore onSave={handleSaveItem} savedIds={savedItems.map(i => i.id)} />
        <SeasonalJapan />
        <FoodGuide onSave={handleSaveItem} savedIds={savedItems.map(i => i.id)} />
        <LanguageCorner />
        <TransportSection />
        <CulturalEtiquette />
      </main>

      <footer className="bg-ink-black text-white py-16 px-6 dark:border-t dark:border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="font-serif text-2xl mb-2">JAPAN</h2>
            <p className="text-gray-500 text-sm">
              Discover the beauty of the rising sun.
            </p>
          </div>
          
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Travel Japan Concept.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
