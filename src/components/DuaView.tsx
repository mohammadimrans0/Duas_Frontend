"use client";

import { useEffect } from "react";
import { useDuaStore } from "@/store/useDuaStore";
import { useCategoryStore } from "@/store/useCategoryStore";

export default function DuaView() {
  const subCategoryId = useCategoryStore((state) => state.selectedSubCategory);
  const { duas, loading, fetchDuasBySubCategory } = useDuaStore();

  useEffect(() => {
    if (subCategoryId !== null) {
      fetchDuasBySubCategory(subCategoryId);
    }
  }, [subCategoryId, fetchDuasBySubCategory]);

  if (!subCategoryId) {
    return (
      <div className="flex justify-center items-center h-full text-2xl">
        Please select a subcategory.
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full text-2xl">
        Loading duas...
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-100px)] overflow-y-auto pr-2">
      <h2 className="text-3xl font-semibold mb-4 text-center">Duas</h2>
      <ul className="space-y-4">
        {duas.map((dua) => (
          <li key={dua.id} className="flex flex-col space-y-4 p-4 border rounded shadow-sm">
            <h3 className="font-bold text-lg">{dua.dua_name_en}</h3>
            <p className="mt-1 text-gray-700 whitespace-pre-wrap">{dua.dua_arabic}</p>
            <p className="mt-1 text-gray-700 whitespace-pre-wrap">{dua.translation_en}</p>
            <p className="mt-1 text-gray-700 whitespace-pre-wrap">{dua.translation_bn}</p>
            <p className="mt-1 text-gray-700 whitespace-pre-wrap">{dua.bottom_en}</p>
            <p className="mt-1 text-gray-700 whitespace-pre-wrap">{dua.refference_en}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
