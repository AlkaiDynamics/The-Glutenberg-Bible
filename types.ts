
export enum ViewState {
  HOME = 'HOME',
  RECIPES = 'RECIPES',
  WISDOM = 'WISDOM',
  SCRIBE = 'SCRIBE',
}

export interface Recipe {
  id: string;
  title: string;
  quote?: string;
  description: string;
  category: 'quick' | 'classic' | 'flex' | 'dessert' | 'snack' | 'bread' | 'international';
  difficulty: 'Easy' | 'Medium' | 'Advanced' | 'Flex Zone';
  time: string;
  servings: string;
  ingredients: string[];
  instructions: string[];
  nutrition?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    fiber: number;
  };
  tags: string[];
  imageUrl?: string;
  imageSeed?: string; // For procedural art generation
  story?: string;
}

export interface GrainInfo {
  name: string;
  title: string;
  description: string;
  benefits: string[];
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isRecipe?: boolean;
}

export interface MarginaliaItem {
  id: string;
  type: 'note' | 'illustration';
  content: string;
  color?: string;
}

export interface Chapter {
  title: string;
  subtitle: string;
  content: string;
  recipe?: Recipe;
  marginalia?: MarginaliaItem[];
}
