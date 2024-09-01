import React from 'react';
import { NavigationManager } from '@/utils/NavigationManager';

const MainView = () => {
  const tilesData = [
    { title: 'Saft & Schorle', details: ["Apfel", "Ananas", "Aprikose", "Birne", "Blaubeere", "Blutorange",
        "Cranberry", "Grapefruit", "Guave", "Holunder", "Johannisbeere", "Kirsche", "Mango",
        "Maracuja", "Orange", "Papaya", "Pfirsich"]},


    { title: 'Eistee', details: ["Pfanner"] },
    
    { title: 'Tee', details: ["Minze", "Kakaochilli"] },
    
    { title: 'Smoothie', details: ["Grün", "Gelb"] },
    
    { title: 'Süßes', details: ["Kakao"] },
    
    { title: 'Softdrink', details: ["Teinacher"] },
    { title: 'Infused Water', details: ["Minze", "Rosmarin", "Zitrone" ] },
    { title: 'Bubbletea', details: ["Drachenfrucht", "Taro"] },
    { title: 'Alkohol', details: ["Bier", "Vodka"] },
  ];

  return (
    <main>
      <h1>Cooking Space</h1>
      <NavigationManager />
      <div style={styles.tilesContainer}>
        {tilesData.map((tile, index) => (
          <div key={index} style={styles.tile}>
            <h2 style={styles.title}>{tile.title}</h2>
            <details>
              <summary>Auswahl</summary>
              <ul style={styles.detailsList}>
                {tile.details.map((detail, detailIndex) => (
                  <li key={detailIndex} style={styles.detailItem}>{detail}</li>
                ))}
              </ul>
            </details>
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
  detailsList: {
    paddingLeft: '20px',
    listStyleType: 'disc', // Punkteliste
    margin: 0, // Entferne den Standard-Margin
    padding: 0, // Entferne den Standard-Padding
  },
  detailItem: {
    marginBottom: '8px', // Abstand zwischen Detail-Elementen
  }
};

export default MainView;
