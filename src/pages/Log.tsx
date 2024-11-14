import { NavigationManager } from '@/utils/NavigationManager';
import React from 'react';

const MainView = () => {

  return (
    <main>
      <h1>Project Logs</h1>
      <NavigationManager />

      <details>
      <summary>Anime Updates for Version</summary>
      <p>EMPTY</p>
      </details><br />

      <details>
      <summary>Manga Updates for Version </summary>
      <p>EMPTY</p>
      </details><br />

      <details>
      <summary>Cartoon Updates for Version </summary>
      <p>EMPTY</p>
      </details><br />

      <details>
      <summary>Comic Updates for Version 13.11</summary>
      <p>BRZRKR 04</p>
      </details><br />

      <details>
      <summary>Live Action Updates for Version </summary>
      <p>EMPTY</p>
      </details><br />

      <details>
      <summary>Game Updates for Version </summary>
      <p>EMPTY</p>
      </details>

    </main >
  );
};

export default MainView;