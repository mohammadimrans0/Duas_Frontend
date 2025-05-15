"use client";

import { useEffect } from "react";
import { useCategoryStore } from "@/store/useCategoryStore";

export default function CategoryView() {
  const {
    categories,
    subCategories,
    selectedCategory,
    selectedSubCategory,
    loading,
    loadCategories,
    selectCategory,
    selectSubCategory,
  } = useCategoryStore();

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  return (
    <div className="h-[calc(100vh-100px)] overflow-y-auto pr-2">
      <h2 className="text-3xl font-semibold mb-4 text-center">Categories</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.id}>
            <div
              onClick={() => selectCategory(category.id)}
              className={`cursor-pointer w-full text-left px-4 py-2 rounded ${
                selectedCategory === category.id
                  ? "bg-green-500 text-white"
                  : "bg-gray-100"
              }`}
            >
              <p className="text-xl font-semibold">{category.cat_name_en}</p>
              <span className="flex justify-start items-center gap-x-4 text-sm mt-1">
                <p>{category.no_of_subcat} subcategories</p>
                <p>|</p>
                <p>{category.no_of_dua} duas</p>
              </span>
            </div>

            {selectedCategory === category.id && (
              <div className="mt-2 ml-4">
                {loading ? (
                  <p className="text-sm text-gray-500">Loading subcategories...</p>
                ) : (
                  <select
                    onChange={(e) => selectSubCategory(Number(e.target.value))}
                    value={selectedSubCategory ?? ""}
                    className="w-full mt-2 p-2 border rounded"
                  >
                    <option value="" disabled>
                      Select a subcategory
                    </option>
                    {subCategories.map((sub) => (
                      <option key={sub.id} value={sub.id}>
                        {sub.subcat_name_en}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
