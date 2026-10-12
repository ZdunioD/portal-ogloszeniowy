function Ogloszenie({ogloszenie}) {
    return(
        <article className="karta">
            <h2>{ogloszenie.nazwa}</h2>
            <p>Cena: {ogloszenie.cena} PLN</p>
            <p>Kategoria: {ogloszenie.kategoria}</p>
            <p>Opis: {ogloszenie.opis}</p>
            <p style={{ color: ogloszenie.dostepny ? "green" : "red" }}>
                {ogloszenie.dostepny ? "Dostępny" : "Niedostępny"}
            </p>
            <button>Zobacz szczegóły</button>
        </article>
    )
}

export default Ogloszenie;