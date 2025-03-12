import React from 'react';
import { NavigationManager } from '@/utils/NavigationManager';

const MainView = () => {
  const tilesData = [
    { title: 'Saft & Schorle', details: ["Apfel", "Ananas", "Aprikose", "Birne", "Blaubeere", "Blutorange",
        "Cranberry", "Grapefruit", "Guave", "Holunder", "Johannisbeere", "Kirsche", "Mango",
        "Maracuja", "Orange", "Papaya", "Pfirsich"]},

    { title: 'Eistee', details: ["Pfanner"] },
    
    { title: 'Tee', details: ["Minze", "Kakaochilli"] },
    
    { title: 'Smoothie', details: [
      "Tropical: Je 1 Kiwi, Banane, 1TL Limettensaft, 100g Ananas, 200ml Kokoswasser",
      "Purple Princess: 40g Blaubeeren (1 Teil) zu 12x Vanilleeis und 3-6x Milch",
      "Gelb"
    ]},
    
    { title: 'Süßes', details: ["Kakao", "Milchshake"] },
    
    { title: 'Softdrink', details: [{ name: "Ramune", link: "/rezept/Ramune" }] },
    { title: 'Infused Water', details: [{ name: "Minze", link: "/home/Minze" }, { name: "Rosmarin", link: "/home/Rosmarin" }, { name: "Zitrone", link: "/home/Zitrone" }] },
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
            <ul style={styles.detailsList}>
              {tile.details.map((detail, detailIndex) => (
                <li key={detailIndex} style={styles.detailItem}>
                  {typeof detail === "string" ? (
                    detail
                  ) : (
                    <a href={detail.link} style={styles.link}>{detail.name}</a>
                  )}
                </li>
              ))}
            </ul>
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
    gridTemplateColumns: 'repeat(3, 1fr)', 
    gap: '16px',
    marginTop: '20px',
  },
  tile: {
    border: '1px solid #ddd',
    padding: '16px',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '200px', // Maximale Höhe der Kachel
    maxWidth: '250px', // Maximale Breite der Kachel
    overflow: 'auto', // Scrollbar bei Überlauf
  },
  title: {
    marginTop: 0,
  },
  detailsList: {
    paddingLeft: '20px',
    listStyleType: 'disc',
    margin: 0,
    padding: 0,
  },
  detailItem: {
    marginBottom: '8px',
  },
  link: {
    color: 'blue',
    textDecoration: 'underline',
  }
};



export default MainView;
