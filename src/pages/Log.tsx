import React from 'react';
import { NavigationManager } from '@/utils/NavigationManager';

const MainView = () => {
  const tilesData = [
    { title: 'Anime', color: '#90EE90' }, // hellgrün
    { title: 'Cartoons', color: '#FFA500' }, // orange
    { title: 'Live Action', color: '#D2B48C' }, // hellbraun
    { title: 'Manga', color: '#228B22' }, // mittelgrün
    { title: 'Synchro', color: '#FFFFFF' }, // default weiß
    { title: 'Musik', color: '#00008B' }, // dunkelblau
    { title: 'Kochen', color: '#800080' }, // lila
    { title: 'Japanisch', color: '#8B0000' }, // rot
    { title: 'Fitness', color: '#ADD8E6' }, // hellblau
    { title: 'Bücher', color: '#FFC0CB' }, // pink
    { title: 'Skills', color: '#FFC0CB' }, // pink
    { title: 'Story', color: '#FFC0CB' }, // pink
  ];

  return (
    <main>
      <h1>Research</h1>
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
