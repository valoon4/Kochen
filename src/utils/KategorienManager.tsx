import React from 'react';
import CategoryView from '../displayers/CategoryView';
import { loadCategories } from './Controller';
import { CategoryResponse } from '../interfaces/InterfaceCollection';
import createResource from './Controller';

const catResource = createResource<CategoryResponse[]>(loadCategories);

export function KategorienManager() {
  const catData = catResource.read();
  if (!catData) {
    return null;
  }
  return (
    <div>
      <CategoryView kategorien={catData} />
    </div>
  );
}