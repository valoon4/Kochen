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
  const [searchTerm, setSearchTerm] = useState('');
  const categoriesPerPage = 3;

  if (!catData) {
    return null;
  }

  // Filtere die Kategorien basierend auf dem Suchbegriff
  const filteredCategories = catData.filter(category =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Berechne die Indizes für die aktuelle Seite
  const startIndex = (currentPage - 1) * categoriesPerPage;
  const endIndex = startIndex + categoriesPerPage;
  const totalPages = Math.ceil(filteredCategories.length / categoriesPerPage);
  const currentPageCategories = filteredCategories.slice(startIndex, endIndex);

  return (
    <div>
      <input
        type="text"
        placeholder="Nach Kategorie suchen..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1); // Zurück zur ersten Seite, wenn die Suche geändert wird
        }}
      />
      <CategoryView kategorien={currentPageCategories} />
      <PaginationView 
        totalPages={totalPages} 
        currentPage={currentPage} 
        onPageChange={setCurrentPage} 
      />
    </div>
  );
}
