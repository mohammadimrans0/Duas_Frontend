"use client"

import { useEffect } from "react"
import { useCategoryStore } from "../store/useCategoryStore"

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
  } = useCategoryStore()

  useEffect(() => {
    loadCategories()
  }, [loadCategories])

  return (
    <div className="h-[calc(100vh-100px)] overflow-y-auto pr-2">
      <h2 className="text-3xl font-semibold mb-4 text-center">Categories</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category.id}>
            <div
              onClick={() => selectCategory(category.id)}
              className={`cursor-pointer w-full text-left px-4 py-2 rounded ${
                selectedCategory === category.id ? "bg-green-500 text-white" : "bg-gray-100"
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
              <div className="mt-2 ml-4 space-y-2">
                {loading ? (
                  <p className="text-sm text-gray-500">Loading subcategories...</p>
                ) : (
                  <div className="space-y-2">
                    {subCategories.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() => selectSubCategory(sub.id)}
                        className={`w-full text-left px-3 py-2 rounded text-sm ${
                          selectedSubCategory === sub.id ? "bg-lime-500 text-white" : "bg-gray-50 hover:bg-gray-200 cursor-pointer"
                        }`}
                      >
                        {sub.subcat_name_en}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
