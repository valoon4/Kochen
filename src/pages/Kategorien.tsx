import React from 'react';
import { KategorienManager } from '../utils/KategorienManager';
import { NavigationManager } from '../utils/NavigationManager';

const CategoryView = () => {

  return (
    <main>
      <h1>Kategorien</h1>
      <NavigationManager />
      <KategorienManager />
    </main>
  );
};

export default CategoryView;