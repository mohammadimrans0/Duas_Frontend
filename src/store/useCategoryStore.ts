import { create } from "zustand";
import { Category, SubCategory } from "@/types";

interface CategoryState {
  categories: Category[];
  subCategories: SubCategory[];
  selectedCategory: number | null;
  selectedSubCategory: number | null;
  loading: boolean;

  loadCategories: () => Promise<void>;
  selectCategory: (id: number) => Promise<void>;
  selectSubCategory: (id: number) => void;
}

export const useCategoryStore = create<CategoryState>((set) => ({
  categories: [],
  subCategories: [],
  selectedCategory: null,
  selectedSubCategory: null,
  loading: false,

  loadCategories: async () => {
    try {
      const res = await fetch("https://duas-backend.onrender.com/api/categories");
      const data: Category[] = await res.json();
      set({ categories: data });
    } catch (error) {
      console.error("Failed to fetch categories", error);
    }
  },

  selectCategory: async (id: number) => {
    set({ selectedCategory: id, loading: true, selectedSubCategory: null });
    try {
      const res = await fetch(`https://duas-backend.onrender.com/api/categories/${id}/subcategories`);
      const data: SubCategory[] = await res.json();
      set({ subCategories: data, loading: false });
    } catch (error) {
      console.error("Failed to fetch subcategories", error);
      set({ subCategories: [], loading: false });
    }
  },

  selectSubCategory: (id: number) => {
    set({ selectedSubCategory: id });
  },
}));
