import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Define the pantry item interface
export interface PantryItem {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  category: string;
  expirationDate?: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

// Define the state interface
interface PantryState {
  items: PantryItem[];
  loading: boolean;
  error: string | null;
}

// Define the action types
type PantryAction =
  | { type: 'ADD_ITEM'; payload: PantryItem }
  | { type: 'UPDATE_ITEM'; payload: PantryItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'SET_ITEMS'; payload: PantryItem[] }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null };

// Initial state
const initialState: PantryState = {
  items: [],
  loading: false,
  error: null,
};

// Create context
const PantryContext = createContext<{
  state: PantryState;
  addItem: (item: Omit<PantryItem, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateItem: (item: PantryItem) => void;
  removeItem: (id: string) => void;
} | undefined>(undefined);

// Reducer function
function pantryReducer(state: PantryState, action: PantryAction): PantryState {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'UPDATE_ITEM':
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case 'SET_ITEMS':
      return {
        ...state,
        items: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}

// Provider component
export function PantryProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(pantryReducer, initialState);

  // Load items from localStorage on initial render
  useEffect(() => {
    const storedItems = localStorage.getItem('pantryItems');
    if (storedItems) {
      try {
        const parsedItems = JSON.parse(storedItems);
        dispatch({ type: 'SET_ITEMS', payload: parsedItems });
      } catch (error) {
        console.error('Failed to parse stored pantry items:', error);
        dispatch({ type: 'SET_ERROR', payload: 'Failed to load saved pantry items' });
      }
    }
  }, []);

  // Save items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('pantryItems', JSON.stringify(state.items));
  }, [state.items]);

  // Action functions
  const addItem = (item: Omit<PantryItem, 'id' | 'createdAt' | 'updatedAt'>) => {
    const now = new Date().toISOString();
    const newItem: PantryItem = {
      ...item,
      id: `item_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      tags: item.tags || [],
      createdAt: now,
      updatedAt: now,
    };
    dispatch({ type: 'ADD_ITEM', payload: newItem });
  };

  const updateItem = (item: PantryItem) => {
    const updatedItem = {
      ...item,
      updatedAt: new Date().toISOString(),
    };
    dispatch({ type: 'UPDATE_ITEM', payload: updatedItem });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  return (
    <PantryContext.Provider value={{ state, addItem, updateItem, removeItem }}>
      {children}
    </PantryContext.Provider>
  );
}

// Custom hook to use the pantry context
export function usePantry() {
  const context = useContext(PantryContext);
  if (context === undefined) {
    throw new Error('usePantry must be used within a PantryProvider');
  }
  return context;
}