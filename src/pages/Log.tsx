import { NavigationManager } from '@/utils/NavigationManager';
import React from 'react';

const MainView = () => {

  return (
    <main>
      <h1>Project Logs</h1>
      <NavigationManager />

      <h3>Anime: </h3>
      <details>
      <summary>Anime Updates for Version</summary>
      <p>EMPTY</p>
      </details>

      <h3>Manga: </h3>
      <details>
      <summary>Manga Updates for Version </summary>
      <p>EMPTY</p>
      </details>

      <details>
      <summary>Cartoon Updates for Version </summary>
      <p>EMPTY</p>
      </details>

      <details>
      <summary>Comic Updates for Version 13.11</summary>
      <p>BRZRKR 04</p>
      </details>

      <h3>Live Action: </h3>
      <details>
      <summary>Live Action Updates for Version </summary>
      <p>EMPTY</p>
      </details>

      <h3>Game: </h3>
      <details>
      <summary>Game Updates for Version </summary>
      <p>EMPTY</p>
      </details>

    </main >
  );
};

export default MainView;