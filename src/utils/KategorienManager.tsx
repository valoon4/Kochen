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
  const [sortBy, setSortBy] = useState('nameAscending'); // Sortierkriterium
  const categoriesPerPage = 3;

  if (!catData) {
    return null;
  }

  // Filtere die Kategorien basierend auf dem Suchbegriff
  const filteredCategories = catData.filter(category =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sortiere die Kategorien basierend auf dem Sortierkriterium
  const sortedCategories = filteredCategories.slice().sort((a, b) => {
    switch (sortBy) {
      case 'nameAscending':
        return a.title.localeCompare(b.title);
      case 'nameDescending':
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });

  // Berechne die Indizes für die aktuelle Seite
  const startIndex = (currentPage - 1) * categoriesPerPage;
  const endIndex = startIndex + categoriesPerPage;
  const totalPages = Math.ceil(sortedCategories.length / categoriesPerPage);
  const currentPageCategories = sortedCategories.slice(startIndex, endIndex);

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
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="nameAscending">Sortieren nach Namen (A-Z)</option>
        <option value="nameDescending">Sortieren nach Namen (Z-A)</option>
      </select>
      <CategoryView kategorien={currentPageCategories} />
      <PaginationView 
        totalPages={totalPages} 
        currentPage={currentPage} 
        onPageChange={setCurrentPage} 
      />
    </div>
  );
}
