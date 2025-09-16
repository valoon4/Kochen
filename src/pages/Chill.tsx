import React from 'react';
import { NavigationManager } from '@/utils/NavigationManager';

const MainView = () => {
  const tilesData = [
    { title: 'Anime', color: '#90EE90' }, // hellgrün
    { title: 'Cartoon', color: '#FFA500' }, // orange
    { title: 'Live Action', color: '#D2B48C' }, // hellbraun
    { title: 'Manga', color: '#228B22' }, // mittelgrün
    { title: 'Comics', color: '#A52A2A' }, // rot
    { title: 'Games', color: '#000000' }, // schwarz
    { title: 'Musik', color: '#00008B' }, // dunkelblau
    { title: 'Bücher', color: '#FFC0CB' }, // silber
  ];

  return (
    <main>
      <h1><a href="/Chilling.html">Chill</a></h1>
      <NavigationManager />
      <div style={styles.tilesContainer}>
        {tilesData.map((tile, index) => (
          <div
            key={index}
            style={{ ...styles.tile, backgroundColor: tile.color }}
          >
            <h2 style={styles.title}>{tile.title}</h2>
          </div>
        ))}
      </div>
    </main>
  );
};

// Inline-Stile
const styles: { [key: string]: React.CSSProperties } = {
  tilesContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)', // 3 Spalten, jede 1fr (flexible Breite)
    gap: '16px', // Abstand zwischen den Kacheln
    marginTop: '20px',
  },
  tile: {
    border: '1px solid #ddd',
    padding: '16px',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column', // Details untereinander anzeigen
    color: '#fff', // Schriftfarbe für Kontrast
  },
  title: {
    marginTop: 0,
  },
};

export default MainView;
