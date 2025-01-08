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
      <p>Shigatsu wa Kimi no Uso</p>
      <p>Sanda</p>
      <p>DRCL - Midnight Children</p>
      <p>Watashi no Musuko ga Isekai Tensei Shitappoi</p>
      <p>Onee Shikkaku - Kedamono ni Hyouhen shita Gozen Sanji</p>
      <p>Kyousei Kekkon - Gaten Nikushoku Danshi x Intelli Soushoku Joshi</p>
      <p>Sanda</p>
      </details><br />

      <details>
      <summary>Cartoon Updates in 2025 </summary>
      <p>EMPTY</p>
      </details><br />

      <details>
      <summary>Comic Updates in 2025</summary>
      <p>Anne Bonny - Die Wölfin der Karibik</p>
      <p>Beate & Serge Klarsfeld - Die Nazijäger</p>
      <p>Charlie Chaplin - Die Comic-Biografie</p>
      <p>Colt & Coal</p>
      <p>Die zwei Leben von Balduin</p>
      <p>Ducks - Zwei Jahre in den Ölsanden</p>
      <p>Gebrandmarkt</p>
      <p>Historische Persönlichkeiten</p>
      <p>Hit Girl</p>
      <p>Hoka Hey!</p>
      <p>Kick Ass - Frauenpower</p>
      <p>Kriege und Drachen</p>
      <p>Western Love</p>
      <p>Die Ritter von Heliopolis Band 04</p>
      <p>Kick Ass Band 05 (Kick Ass 3)</p>
      <p>Mythen der Antike Band 13 & 14</p>
      <p>Star Wars Special Band 101 - 120</p>
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