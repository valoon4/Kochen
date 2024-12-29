import React from 'react';
import { NavigationManager } from '@/utils/NavigationManager';

const MainView = () => {
  const tilesData = [
    { title: 'Anime' },
    { title: 'Brettspiele' },
    { title: 'Cartoons' },
    { title: 'Comics' },
    { title: 'Finanzen' },
    { title: 'Fitness' },
    { title: 'Games' },
    { title: 'Haushalt' },
    { title: 'Japanisch' },
    { title: 'Kochen' },
    { title: 'Live Action' },
    { title: 'Manga' },
    { title: 'Musik' },
    { title: 'Nostalgie Pics & Vids' },
    { title: 'Story' },
    { title: 'Videogame' },
    { title: 'Work' },
    { title: 'Zeichnen' },
  ];

  return (
    <main>
      <h1>Cooking Space</h1>
      <NavigationManager />
      <div style={styles.tilesContainer}>
        {tilesData.map((tile, index) => (
          <div key={index} style={styles.tile}>
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
    backgroundColor: '#f9f9f9',
    display: 'flex',
    flexDirection: 'column', // Details untereinander anzeigen
  },
  title: {
    marginTop: 0,
  },
};

export default MainView;
