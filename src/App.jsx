import { useState } from 'react';
import Ogloszenie from "./components/Ogloszenie";
import './App.css';

const ogloszenia = [
  { id: 1, nazwa: "laptop Dell", cena: 3500, dostepny: true, kategoria: "komputer", opis: "Wydajny laptop biurowy" },
  { id: 2, nazwa: "Mysz bezprzewodowa", cena: 150, dostepny: true, kategoria: "akcesoria", opis: "Ergonomiczna mysz bezprzewodowa" },
  { id: 3, nazwa: "Monitor 27' cali", cena: 1500, dostepny: true, kategoria: "monitory", opis: "Monitor 27 cali" },
  { id: 4, nazwa: "podkladka pod mysz", cena: 35, dostepny: false, kategoria: "akcesoria", opis: "Antypoślizgowa podkładka gumowa" },
  { id: 5, nazwa: "Klawiatura mechaniczna RGB", cena: 450, dostepny: true, kategoria: "akcesoria", opis: "Klawiatura mechaniczna RGB" },
  { id: 6, nazwa: "Słuchawki bezprzewodowe", cena: 300, dostepny: false, kategoria: "audio", opis: "Słuchawki z mikrofonem" },
  { id: 7, nazwa: "Dysk SSD 1TB NVMe", cena: 400, dostepny: true, kategoria: "komponenty", opis: "Szybki dysk SSD" },
  { id: 8, nazwa: "Karta graficzna RTX 4060", cena: 1600, dostepny: true, kategoria: "komponenty", opis: "Wydajna karta graficzna" }
];

function App() {
  const [count, setCount] = useState(0)

  return (
   <main>
    <h1>Portal ogłoszeniowy</h1>
    <p>Kupuj i sprzedawaj</p>
    <p>Liczba wszystkich ogłoszeń: <strong>{ogloszenia.length}</strong></p>

    <div className="lista-ogloszen">
      {ogloszenia.map((ogloszenie)=>(
        <Ogloszenie key={ogloszenie.id} ogloszenie={ogloszenie}/>
      ))}
    </div>
   </main>
  );
}

export default App;