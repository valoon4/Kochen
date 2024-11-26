import React from 'react';
import { NavigationManager } from '@/utils/NavigationManager';

const MainView = () => {
  return (
    <main>
      <h1>Cooking Space</h1>
      <NavigationManager />

      {/* Abschnitt für Suppe */}
      <div className="section">
        <h2 className="abschnitt">Suppe</h2>
        <div className="menu">
          <div className="menu-item">
            <h3>Tomatensuppe</h3>
            <p>Frische Tomaten, Basilikum und ein Hauch von Knoblauch</p>
            <p className="price">€5,00</p>
          </div>
          <div className="menu-item">
            <h3>Kürbiscremesuppe</h3>
            <p>Würzige Kürbissuppe mit Ingwer und Kokosmilch</p>
            <p className="price">€6,00</p>
          </div>
        </div>
      </div>

      {/* Abschnitt für Hauptspeisen */}
      <div className="section">
        <h2 className="abschnitt">Hauptspeisen</h2>
        <div className="menu">
          <div className="menu-item">
            <h3>Pizza Margherita</h3>
            <p>Frische Tomaten, Mozzarella, Basilikum, Olivenöl</p>
            <p className="price">€9,50</p>
          </div>
          <div className="menu-item">
            <h3>Spaghetti Bolognese</h3>
            <p>Hausgemachte Tomatensauce mit Rinderhackfleisch</p>
            <p className="price">€12,00</p>
          </div>
          <div className="menu-item">
            <h3>Caesar Salat</h3>
            <p>Frischer Salat, Hähnchenbrust, Caesar-Dressing, Croutons</p>
            <p className="price">€8,00</p>
          </div>
          <div className="menu-item">
            <h3>Vegetarische Lasagne</h3>
            <p>Auberginen, Zucchini, Tomaten und Ricotta</p>
            <p className="price">€10,50</p>
          </div>
        </div>
      </div>

      {/* Abschnitt für Dessert */}
      <div className="section">
        <h2 className="abschnitt">Dessert</h2>
        <div className="menu">
          <div className="menu-item">
            <h3>Schokoladenkuchen</h3>
            <p>Frisch gebacken, mit einer Portion Vanilleeis</p>
            <p className="price">€4,50</p>
          </div>
          <div className="menu-item">
            <h3>Apfelstrudel</h3>
            <p>Serviert mit Schlagsahne und Zimt</p>
            <p className="price">€5,50</p>
          </div>
        </div>
      </div>

    </main>
  );
};

export default MainView;
