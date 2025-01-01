import { NavigationManager } from '@/utils/NavigationManager';
import React from 'react';

const MainView = () => {

  return (
    <main>
      <h1>Project Logs</h1>
      <NavigationManager />

      <details>
      <summary>Anime Updates in 2025</summary>
      <p>Seasonals 2025</p>
      </details><br />

      <details>
      <summary>Manga Updates in 2025 </summary>
      <p>EMPTY</p>
      </details><br />

      <details>
      <summary>Cartoon Updates in 2025 </summary>
      <p>EMPTY</p>
      </details><br />

      <details>
      <summary>Comic Updates in 2025</summary>
      <p>EMPTY</p>
      </details><br />

      <details>
      <summary>Live Action Updates in 2025 </summary>
      <p>EMPTY</p>
      </details><br />

      <details>
      <summary>Game Updates in 2025 </summary>
      <p>Donkey Kong Country Returns</p>
      </details>

    </main >
  );
};

export default MainView;