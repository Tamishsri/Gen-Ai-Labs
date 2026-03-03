export interface Region {
  id: string;
  name: string;
  japaneseName: string;
  description: string;
  image: string;
  highlights: string[];
  hiddenGems: string[];
  bestSeason: string;
  coordinates: { x: number; y: number }; // Percentage position on the map
}

export interface FoodItem {
  name: string;
  japaneseName: string;
  description: string;
  category: 'Dish' | 'Street Food' | 'Experience';
  priceRange: string;
}

export interface EtiquetteRule {
  title: string;
  description: string;
  type: 'do' | 'dont';
  iconName: string;
}

export interface Season {
  name: string;
  months: string;
  description: string;
  activity: string;
  color: string;
}

export interface Phrase {
  japanese: string;
  pronunciation: string;
  english: string;
  category: string;
}

export interface SavedItem {
  id: string;
  name: string;
  type: 'place' | 'food' | 'experience';
  image?: string;
  notes?: string;
}

export interface ChecklistItem {
  id: string;
  label: string;
  category: 'Food' | 'Experience';
}
