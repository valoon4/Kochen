import { NavigationManager } from '@/utils/NavigationManager';
import React from 'react';
import path from 'path';
import fs from 'fs';

// Definiere den Typ für eine Anime-Serie
interface AnimeSeries {
  title: string;
  cover: string;
  description: string;
  season: string;
  rang: string;
  folgen: number;
  year: number;
}

// Definiere den Typ für die Props, die an MainView übergeben werden
interface MainViewProps {
  animeseries: AnimeSeries[];
}

// getStaticProps lädt die Serien-Daten und gibt sie als Props zurück
export async function getStaticProps() {
  try {
    const filePath = path.join(process.cwd(), 'src', 'seasons', '1963.json');
    const animeseries: AnimeSeries[] = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    // Überprüfen, ob die Daten korrekt geladen wurden
    if (!animeseries || animeseries.length === 0) {
      throw new Error('Keine Serien-Daten gefunden.');
    }

    return { props: { animeseries } };
  } catch (error) {
    console.error("Fehler beim Laden der Daten:", error);
    return { props: { animeseries: [] } }; // Rückgabe einer leeren Liste bei Fehler
  }
}

// MainView erwartet die Props mit den Typen, die wir definiert haben
const MainView: React.FC<MainViewProps> = ({ animeseries }) => {
  if (!animeseries || animeseries.length === 0) {
    return <p>Keine Serien verfügbar.</p>;
  }

  return (
    <main>
      <h1>Anime 1963</h1>
      <NavigationManager />

      <div className="gallery">
        {animeseries.map((anime, index) => (
          <div key={index} className="anime-card">
            <div className="image-container">
              <img src={anime.cover} alt={anime.title} />
            </div>
            <h3>{anime.title}</h3>
            <p>{anime.year} {anime.season}, {anime.folgen} Folgen</p>
            <p>{anime.description}</p>
            <span className="rang">{anime.rang}</span> 
          </div>
        ))}
      </div>

      <style jsx>{`
        .gallery {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-top: 20px;
        }
        .anime-card {
          border: 1px solid #ccc;
          padding: 16px;
          text-align: center;
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
        }
        .image-container {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 350px;
          height: 500px;
          overflow: hidden;
          position: relative;
        }
        .anime-card img {
          width: 100%;
          height: 100%;
          object-fit: fill; /* Bild bleibt zentriert, ohne verzerrt zu werden */
        }
        .anime-card h3 {
          margin: 8px 0;
        }
        .anime-card p {
          font-size: 14px;
        }
        .rang {
          position: absolute;
          top: 45%;
          left: 88%;
          margin-left: 10px;
          transform: translateY(-50%);
          font-size: 36px;
          font-weight: bold;
          color: gold;
        }
      `}</style>
    </main>
  );
};

export default MainView;
