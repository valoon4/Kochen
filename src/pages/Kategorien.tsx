import React from 'react';
import { PostManager } from '../utils/PostManager';
import { KategorienManager } from '../utils/KategorienManager';

const MainView = () => {

  return (
    <main>
      <h1>Cooking Space</h1>
      <KategorienManager />
    </main>
  );
};

export default MainView;