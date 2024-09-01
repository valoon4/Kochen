import React from 'react';
import { PostManager } from '../utils/PostManager';
import { NavigationManager } from '../utils/NavigationManager';

const MainView = () => {

  return (
    <main>
      <h1>Cooking Space</h1>
      <NavigationManager />
      <PostManager />
    </main>
  );
};

export default MainView;