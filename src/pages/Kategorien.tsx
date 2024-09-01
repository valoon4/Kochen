import React from 'react';
import { PostManager } from '../utils/PostManager';
import { KategorienManager } from '../utils/KategorienManager';
import { NavigationManager } from '@/utils/NavigationManager';

const MainView = () => {

  return (
    <main>
      <h1>Cooking Space</h1>
      <NavigationManager />
      <KategorienManager />
    </main>
  );
};

export default MainView;