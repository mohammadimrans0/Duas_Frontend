import { create } from "zustand";
import { Dua } from "@/types";

interface DuaState {
  duas: Dua[];
  loading: boolean;
  fetchDuasBySubCategory: (subcatId: number) => Promise<void>;
}

export const useDuaStore = create<DuaState>((set) => ({
  duas: [],
  loading: false,

  fetchDuasBySubCategory: async (subcatId: number) => {
    set({ loading: true });
    try {
      const res = await fetch(
        `https://duas-backend.onrender.com/api/subcategories/${subcatId}/duas`
      );
      const data: Dua[] = await res.json();
      set({ duas: data, loading: false });
    } catch (error) {
      console.error("Failed to fetch duas", error);
      set({ duas: [], loading: false });
    }
  },
}));