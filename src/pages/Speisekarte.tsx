import React from 'react';
import { NavigationManager } from '@/utils/NavigationManager';

const MainView = () => {

  return (
    <main>
      <h1>Cooking Space</h1>
      <NavigationManager />

      {/* Abschnitt für Suppe */}
      <div className="section">
        <details className="abschnitt"><summary className="abschnittname">Suppen</summary>
          <p> Dazu nach Wahl Brot, Croutons, Backerbsen.</p>
          <div className="menu">
            <div className="menu-item">
              <h3>Avocadosuppe</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Biersuppe</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Apfelsuppe</h3>
              <p> Äpfel, Pastinaken</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Blumenkohlsuppe</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Bohnensuppe zb Pasulj</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Borscht (Rote Bete Suppe)</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Brennnesselsuppe</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Brokkolisuppe</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Cesnecka (Knoblauchsuppe)</h3>
              <p> TBA</p>
              <p className="price">€3,00</p>
            </div>
            <div className="menu-item">
              <h3>Cheeseburgersuppe</h3>
              <p> TBA</p>
              <p className="price">€3,00</p>
            </div>
            <div className="menu-item">
              <h3>Chillicheesesuppe</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Currysuppe</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Currywurstsuppe</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Dalithoy (gelbe Linsensuppe)</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Erbsensuppe</h3>
              <p> Erbsen, Minze</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Erdnusssuppe</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Ezogelinsuppe</h3>
              <p> Bulgur, rote Linsen</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Fenchelsuppe</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Gazpacho (kalte Tomatensuppe) / Salmorejo</h3>
              <p> TBA</p>
              <p className="price">€2</p>
            </div>
            <div className="menu-item">
              <h3>Gochujang Gazpacho</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>          <div className="menu-item">
              <h3>Gochujangsuppe</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Gurkensuppe</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Ingwersuppe</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Karottensuppe</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Kartoffelsuppe</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Kesäkeitto</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Kimchisuppe</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Kürbissuppe</h3>
              <p>Kürbis, Knoblauch, Thymian, Kokosmilch, Ingwer, Zimt</p>
              <p className="price">€6,00</p>
            </div>
            <div className="menu-item">
              <h3>Lasagnesuppe</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Lauchsuppe</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Limettensuppe</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Linsensuppe</h3>
              <p> Linsen, Karotten, Stangensellerie, Zwiebel, Gemüsebrühe</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Maissuppe</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Minestrone</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Mulligatawny Suppe</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Nudelsuppe (Ramen)</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>          <div className="menu-item">
              <h3>Maronensuppe</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Paprikasuppe</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Pfeffersuppe</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Pilzsuppe</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Pizzasuppe</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Purée Mongole (Gelbe Erbsensuppe)</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Rosenkohlsuppe</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Rotkohlsuppe</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Rucolasuppe</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Rumfordsuppe</h3>
              <p> Graupen</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Selleriesuppe</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Shchi</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Spargelsuppe</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Spinatsuppe</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Tacosuppe</h3>
              <p>Geröstete Tomaten, Knoblauch</p>
              <p className="price">€5,00</p>
            </div>
            <div className="menu-item">
              <h3>Tomatensuppe</h3>
              <p>Geröstete Tomaten, Knoblauch</p>
              <p className="price">€5,00</p>
            </div>
            <div className="menu-item">
              <h3>Tom Yum Suppe</h3>
              <p>Zitronengras, Galgant, Kaffernlimettenblätter</p>
              <p className="price">€5,00</p>
            </div>
            <div className="menu-item">
              <h3>Vichyssoise</h3>
              <p> Kartoffel, Lauch</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Walnusssuppe</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Zucchinisuppe</h3>
              <p> Zucchini, Gurke, Avocado, Minze, Gemüsebrühe</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Zwiebelsuppe</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
          </div>
        </details>
      </div>

      {/* Abschnitt für Soulfood */}
      <div className="section">
        <details className="abschnitt"><summary className="abschnittname">Soulfood</summary>
          <div className="menu">
            <div className="menu-item">
              <h3>Buddha Bowl</h3>
              <p> TBA</p>
              <p className="price">€5,00</p>
            </div>
            <div className="menu-item">
              <h3>Sommerrollen</h3>
              <p> TBA</p>
              <p className="price">€5,00</p>
            </div>
          </div>
        </details>
      </div>

      {/* Abschnitt für Hauptspeisen */}
      <div className="section">
        <details className="abschnitt"><summary className="abschnittname">Hauptspeisen</summary>
          <div className="menu">
            <div className="menu-item">
              <h3>Arancini</h3>
              <p> Frittierte Reisbällchen</p>
              <p className="price">€5,00</p>
            </div>
            <div className="menu-item">
              <h3>Bami Goreng</h3>
              <p> Bratnudeln mit Chicks</p>
              <p className="price">€5,00</p>
            </div>
            <div className="menu-item">
              <h3>Bulgogi</h3>
              <p> Marinierte Seitanstücke</p>
              <p className="price">€5,00</p>
            </div>
            <div className="menu-item">
              <h3>Chana Masala</h3>
              <p> Indische Gewürze mit Kichererbsen</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Chilli Cheese Pommes</h3>
              <p> Fritten überladen mit Chillicheese Soße & Jalapenos</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Chilli Sin Carne</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Cigkoftem</h3>
              <p> Kalter Bulgurwrap</p>
              <p className="price">€5,00</p>
            </div>
            <div className="menu-item">
              <h3>Daal</h3>
              <p> rote, gelbe oder braune Linsen</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Döner</h3>
              <p> Wahl aus Schnetzel, Tofu, Seitan oder Jackfrucht</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Falafel</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Fellah Köftesi</h3>
              <p> Türkische Bulgurbällchen</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Frühlingsrollen</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Gochujangmix</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Hotdog</h3>
              <p> Klassisch oder Chilli Cheese</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Jambalaya</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Käsesandwhich</h3>
              <p> Wurst, Gouda, Vollkorntoast</p>
              <p> 20xToast a 1€, 16x Wurst a 1,60€, 8x Käse a 3€     134+20(?)+50(?)=</p>
              <p className="price">1 Presstoast für €0,90 mit 204 kcal</p>
            </div>
            <div className="menu-item">
              <h3>Mac and Cheese</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Nuggets</h3>
              <p> Klassisch oder Chilli Cheese oder USA Style</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Nussbraten</h3>
              <p>aaa</p>
              <p className="price">€9,50</p>
            </div>
            <div className="menu-item">
              <h3>Omlette</h3>
              <p> Klassische Zwiebelringe</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Onion Rings</h3>
              <p> Klassische Zwiebelringe</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Orange Tofu</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Pide</h3>
              <p> TBA</p>
              <p className="price">€5,00</p>
            </div>
            <div className="menu-item">
              <h3>Pita</h3>
              <p> Gyros mit Tzaziki und Pommes</p>
              <p className="price">€5,00</p>
            </div>
            <div className="menu-item">
              <h3>Poutine</h3>
              <p> Champignon oder Tijuana Style</p>
              <p className="price">€5,00</p>
            </div>
            <div className="menu-item">
              <h3>Quesadilla</h3>
              <p> TBA</p>
              <p className="price">€5,00</p>
            </div>
            <div className="menu-item">
              <h3>Ratatouille</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Schnitzel</h3>
              <p>Hausgemachter Seitan</p>
              <p className="price">€12,00</p>
            </div>
            <div className="menu-item">
              <h3>Spaghetti Bolognese</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Sushi</h3>
              <p> TBA</p>
              <p className="price">€5,00</p>
            </div>
            <div className="menu-item">
              <h3>Süßsauer Tofu</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Tacos</h3>
              <p> Blumenkohl mit Kraut</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Teriyakimix</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
          </div>
        </details>
      </div>

      {/* Abschnitt für Dessert */}
      <div className="section">
        <details className="abschnitt"><summary className="abschnittname">Dessert</summary>
          <div className="menu">
            <div className="menu-item">
              <h3>Apfelstrudel</h3>
              <p>Serviert mit Schlagsahne und Zimt</p>
              <p className="price">€5,50</p>
            </div>
            <div className="menu-item">
              <h3>Bananensuppe</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Bilo-bilo & Binignit</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Hagebuttensuppe</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Mandelsuppe</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Pfannkuchen</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Popcorn</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Pudding</h3>
              <p> Wackelnd oder Classic</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Sauerkirschsuppe</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Schokoladenkuchen</h3>
              <p>Frisch gebacken, mit einer Portion Vanilleeis</p>
              <p className="price">€4,50</p>
            </div>
            <div className="menu-item">
              <h3>Schwarze Sesamsuppe</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Talbina</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
          </div>
        </details>
      </div>

      {/* Abschnitt für Soße */}
      <div className="section">
        <details className="abschnitt"><summary className="abschnittname">Soßen</summary>
          <div className="menu">
            <div className="menu-item">
              <h3>Avocadosoße</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Bratensoße</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Erdnusssoße</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Ranch Soße</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Sesamsoße</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Süßsauersoße</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Sweet Chilli Soße</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Teriyakisoße</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
          </div>
        </details>
      </div>


     

      {/* Abschnitt für Burger & Pizza */}
      <div className="section">
        <details className="abschnitt"><summary className="abschnittname">Burger, Wraps & Pizza</summary>
          <div className="menu">
            <div className="menu-item">
              <h3>Blechpizza</h3>
              <p> Fertigteigpizza mit Zwiebeln, Mais, Oliven, Champignons, Artischocken</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Barbeque Burger</h3>
              <p> Optional mit Onion Rings</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Burrito</h3>
              <p> Mit Guacamole</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Classic Burger</h3>
              <p> Mit Burgersoße, Gürckchen & Zwiebeln</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Chick Burger</h3>
              <p> Ahorn-Senf Soße mit Salat & Tomate</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Texmex Wrap</h3>
              <p> Rote Bohnen, Mais, Salsa</p>
              <p className="price">€2,00</p>
            </div>
          </div>
        </details>
      </div>

      {/* Abschnitt für Beilagen */}
      <div className="section">
        <details className="abschnitt"><summary className="abschnittname">Beilagen</summary>
          <div className="menu">
            <div className="menu-item">
              <h3>Börek</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Bruschetta</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Focaccia</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Manakish</h3>
              <p> Mit Zatar</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Naan</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
            <div className="menu-item">
              <h3>Pizzabrötchen</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
          </div>
        </details>
      </div>

      {/* Abschnitt für TBA */}
      <div className="section">
        <details className="abschnitt"><summary className="abschnittname">TBA</summary>
          <div className="menu">
            <div className="menu-item">
              <h3>Bananensuppe</h3>
              <p> TBA</p>
              <p className="price">€2,00</p>
            </div>
          </div>
        </details>
      </div>

    </main>
  );
};

export default MainView;
