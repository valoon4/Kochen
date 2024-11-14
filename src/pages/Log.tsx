import { NavigationManager } from '@/utils/NavigationManager';
import React from 'react';

const MainView = () => {

  return (
    <main>
      <h1>Project Logs</h1>
      <NavigationManager />

      <h3>Anime: </h3>
      <details>
      <summary>Comic Updates</summary>
      <p>EMPTY</p>
      </details>

      <h3>Manga: </h3>
      <details>
      <summary>Comic Updates</summary>
      <p>EMPTY</p>
      </details>

      <h3>Cartoon: </h3>
      <details>
      <summary>Comic Updates</summary>
      <p>EMPTY</p>
      </details>

      <h3>Comic: Version 13.11 </h3>
      <details>
      <summary>Comic Updates</summary>
      <p>BRZRKR 04</p>
      </details>

      <h3>Live Action: </h3>
      <details>
      <summary>Comic Updates</summary>
      <p>EMPTY</p>
      </details>

      <h3>Game: </h3>
      <details>
      <summary>Comic Updates</summary>
      <p>EMPTY</p>
      </details>

    </main >
  );
};

export default MainView;