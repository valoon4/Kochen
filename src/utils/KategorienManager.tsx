import React, { useState } from 'react';
import CategoryView from '../displayers/CategoryView';
import PaginationView from '../displayers/PaginationView';
import { loadCategories } from './Controller';
import { CategoryResponse } from '../interfaces/InterfaceCollection';
import createResource from './Controller';

const catResource = createResource<CategoryResponse[]>(loadCategories);

export function KategorienManager() {
  const catData = catResource.read();
  const [currentPage, setCurrentPage] = useState(1);
  const categoriesPerPage = 3; // Anzahl der Kategorien pro Seite

  if (!catData) {
    return null;
  }

  // Berechne die Indizes für die aktuelle Seite
  const startIndex = (currentPage - 1) * categoriesPerPage;
  const endIndex = startIndex + categoriesPerPage;
  const totalPages = Math.ceil(catData.length / categoriesPerPage);
  const currentPageCategories = catData.slice(startIndex, endIndex);

  return (
    <div>
      <CategoryView kategorien={currentPageCategories} />
      <PaginationView 
        totalPages={totalPages} 
        currentPage={currentPage} 
        onPageChange={setCurrentPage} 
      />
    </div>
  );
}
