import { NavigationManager } from '@/utils/NavigationManager';
import React from 'react';

const MainView = () => {

  return (
    <main>
      <h1>Cooking Space</h1>
      <NavigationManager />
      <p>

        Hallo zusammen!

        Hier sammle ich vegane Rezepte aus aller Welt,

        es ist mein eigenes kleines Kochbuch.

        Fragen, Anregungen? Mail an: longusdingus@protonmail.com
      </p>
    </main>
  );
};

export default MainView;