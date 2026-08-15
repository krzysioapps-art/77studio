
import styles from "./studio.module.css";

const team = [
    {
        name: "Paweł Naduk",
        role: "prezes zarządu, architekt",
        image:
            "https://77studio.pl/wp-content/uploads/2025/05/PAWELmale.jpg",
    },
    {
        name: "Agnieszka Dziewięcka",
        role: "architekt",
        image:
            "https://77studio.pl/wp-content/uploads/2025/04/AGNIESZKAmale.jpg",
    },
    {
        name: "Wojciech Lipka",
        role: "architekt",
        image:
            "https://77studio.pl/wp-content/uploads/2025/03/WOJTEKmale.jpg",
    },
    {
        name: "Klaudia Zyza",
        role: "architekt",
        image:
            "https://77studio.pl/wp-content/uploads/2025/02/KLAUDIAmale.jpg",
    },
    {
        name: "Natalia Nowicka",
        role: "architekt",
        image:
            "https://77studio.pl/wp-content/uploads/2025/01/NATALIAmale.jpg",
    },
    {
        name: "Oleh Kozbur",
        role: "architekt",
        image:
            "https://77studio.pl/wp-content/uploads/2024/12/OLEHmale.jpg",
    },
    {
        name: "Agnieszka Osiejewska-Naduk",
        role: "architekt",
        image:
            "https://77studio.pl/wp-content/uploads/2024/11/AGA_male.jpg",
    },
    {
        name: "Maciej Cycling",
        role: "architekt",
        image:
            "https://77studio.pl/wp-content/uploads/2023/07/MACIEJ-CYCLING-architekt-male.jpg",
    },
    {
        name: "Gustaw Dziewięcki",
        role: "architekt",
        image:
            "https://77studio.pl/wp-content/uploads/2026/07/GUSTAW-DZIEWIECKI-architekt-male.jpg",
    },
    {
        name: "Tomek Parchański",
        role: "architekt",
        image:
            "https://77studio.pl/wp-content/uploads/2023/07/TOMEK-PARCHANSKI-architekt-male.jpg",
    },
];

export default function StudioPage() {
    return (
        <>

            <main className={styles.page}>

                {/* ================================
                    HERO
                ================================= */}

                <section className={styles.hero}>
                    <div className={styles.heroText}>
                        <p>
                            od 1999
                        </p>

                        <h1>
                            Budujemy nową
                            <br />
                            jakość w istniejącym
                            <br />
                            otoczeniu.
                        </h1>
                    </div>
                </section>


                {/* ================================
                    COVER
                ================================= */}

                <figure className={styles.cover}>
                    <img
                        src="https://77studio.pl/wp-content/uploads/2025/04/05-5.jpg"
                        alt="Projekt 77STUDIO architektury w Płocku"
                    />
                </figure>


                {/* ================================
                    INTRODUCTION
                ================================= */}

                <section className={styles.introduction}>
                    <p className={styles.introductionLead}>
                        Od początku swojej działalności
                        kierujemy się kilkoma prostymi
                        zasadami, które wyznaczają
                        kierunki naszych projektów.
                    </p>

                    <div className={styles.introductionBody}>
                        <p>
                            Uważamy, że architektura jest
                            sztuką kontekstu – uzupełniania,
                            budowania nowej jakości
                            w istniejącym otoczeniu.
                        </p>

                        <p>
                            Dlatego według nas dobrze
                            zaprojektowany budynek musi
                            uwzględniać zastane uwarunkowania
                            historyczne, przyrodnicze
                            i kulturowe.
                        </p>
                    </div>
                </section>


                {/* ================================
                    MATERIAŁ / CZAS
                ================================= */}

                <section className={styles.material}>
                    <div className={styles.materialQuote}>
                        <p>
                            Projektowane przez nas obiekty
                            będą współtworzyć krajobraz
                            przez kolejne dziesięciolecia.
                        </p>
                    </div>

                    <div className={styles.materialText}>
                        <p>
                            Dlatego zwracamy szczególną
                            uwagę na jakość stosowanych
                            materiałów, ich pochodzenie
                            oraz zachowanie się w czasie.
                        </p>

                        <p>
                            Architektura nie kończy się
                            w momencie ukończenia budynku.
                            To, jak będzie wyglądał
                            i funkcjonował za kilka,
                            kilkanaście czy kilkadziesiąt
                            lat, jest częścią projektu.
                        </p>
                    </div>
                </section>


                {/* ================================
                    CZŁOWIEK
                ================================= */}

                <section className={styles.people}>
                    <div className={styles.peopleText}>
                        <p className={styles.peopleLead}>
                            Projektujemy dla ludzi.
                        </p>

                        <p>
                            Tworzymy środowisko do życia –
                            wypoczynku, pracy czy rekreacji –
                            w pełnej symbiozie z otoczeniem.
                        </p>

                        <p>
                            To nie wizualizacja projektu
                            czy udoskonalone zdjęcie jest
                            naszym celem, lecz pozytywne,
                            długotrwałe emocje wynikające
                            z harmonijnej relacji człowiek –
                            otoczenie, w którym przebywa.
                        </p>

                        <p>
                            Priorytetami naszych poszukiwań
                            są zbliżenie przestrzeni wnętrz
                            i przyrody, kształtowanie i gra
                            światłem, a także szczera troska
                            o zachowanie skali ludzkiej
                            w każdym aspekcie projektu.
                        </p>
                    </div>
                </section>


                {/* ================================
                    ODPOWIEDZIALNOŚĆ
                ================================= */}

                <section className={styles.responsibility}>
                    <div className={styles.responsibilityStatement}>
                        Działamy
                        <br />
                        odpowiedzialnie.
                    </div>

                    <div className={styles.responsibilityBody}>
                        <p>
                            Ponad dwadzieścia lat doświadczeń
                            na rynku pozwala nam podejmować
                            dojrzałe i świadome decyzje.
                        </p>

                        <p>
                            Odpowiedzialność towarzyszy nam
                            przez cały proces twórczy i odnosi
                            się zarówno do klienta i środków
                            przez niego inwestowanych,
                            jak również do klimatu oraz
                            wartości humanistycznych.
                        </p>

                        <p>
                            Wiemy, że decyzje projektowe
                            przekładają się na realne wydatki
                            na placu budowy. Skrupulatnie
                            analizujemy koszty realizacji,
                            aby potrafić skutecznie nimi
                            zarządzać.
                        </p>

                        <p>
                            Świadomi zmian klimatycznych
                            kierujemy się zasadami
                            zrównoważonego rozwoju.
                            Stosujemy projektowe rozwiązania
                            pasywne, lokalne, naturalne
                            materiały oraz rozwiązania
                            techniczne przyjazne środowisku.
                        </p>
                    </div>
                </section>


                {/* ================================
                    ZAKOŃCZENIE
                ================================= */}

                <section className={styles.finalThought}>
                    <p>
                        Architektura wpływa na człowieka.
                    </p>

                    <p>
                        Oddziałuje, kształtuje,
                        motywuje, koi.
                    </p>

                    <strong>
                        Wierzymy, że dzięki lepszej
                        architekturze wszyscy stajemy się
                        lepsi.
                    </strong>
                </section>


                {/* ================================
                    ZESPÓŁ
                ================================= */}

                <section className={styles.team}>
                    <div className={styles.teamHeader}>
                        <h2>
                            Zespół
                        </h2>

                        <p>
                            77STUDIO architektury
                        </p>
                    </div>

                    <div className={styles.teamGrid}>
                        {team.map((person) => (
                            <article
                                key={person.name}
                                className={styles.person}
                            >
                                <div className={styles.personImage}>
                                    <img
                                        src={person.image}
                                        alt={person.name}
                                        loading="lazy"
                                    />
                                </div>

                                <div className={styles.personInfo}>
                                    <strong>
                                        {person.name}
                                    </strong>

                                    <span>
                                        {person.role}
                                    </span>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>

            </main>
        </>
    );
}