import styles from "./kontakt.module.css";

export default function KontaktPage() {
  return (
    <main className={styles.page}>
      <section className={styles.intro}>
        <p className={styles.year}>
          77STUDIO
        </p>

        <h1>
          Porozmawiajmy
          <br />
          o architekturze.
        </h1>
      </section>

      <section className={styles.contact}>
        <div className={styles.address}>
          <p className={styles.label}>
            Pracownia
          </p>

          <address>
            <strong>
              77STUDIO architektury
              <br />
              sp. z o.o.
            </strong>

            <span>
              ul. Kapitulna 2/6
              <br />
              00-252 Warszawa
            </span>
          </address>
        </div>

        <div className={styles.details}>
          <a
            href="mailto:biuro@77studio.pl"
            className={styles.email}
          >
            biuro@77studio.pl
          </a>

          <a
            href="tel:+48226434245"
            className={styles.phone}
          >
            +48 22 643 42 45
          </a>

          <div className={styles.social}>
            <a
              href="#"
              aria-label="Facebook"
            >
              Facebook
            </a>

            <a
              href="#"
              aria-label="Instagram"
            >
              Instagram
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <section className={styles.location}>
        <div className={styles.locationHeader}>
          <span>
            Lokalizacja
          </span>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Kapitulna+2%2F6%2C+Warszawa"
            target="_blank"
            rel="noreferrer"
          >
            Otwórz w mapach
          </a>
        </div>

        <div className={styles.map}>
          <svg
            viewBox="0 0 1200 500"
            role="img"
            aria-label="Mapa lokalizacji 77STUDIO przy ulicy Kapitulnej 2/6 w Warszawie"
          >
            {/* delikatna siatka orientacyjna */}

            <g className={styles.gridLines}>
              <line
                x1="0"
                y1="100"
                x2="1200"
                y2="100"
              />

              <line
                x1="0"
                y1="250"
                x2="1200"
                y2="250"
              />

              <line
                x1="0"
                y1="400"
                x2="1200"
                y2="400"
              />

              <line
                x1="180"
                y1="0"
                x2="180"
                y2="500"
              />

              <line
                x1="540"
                y1="0"
                x2="540"
                y2="500"
              />

              <line
                x1="900"
                y1="0"
                x2="900"
                y2="500"
              />
            </g>

            {/* główne ulice */}

            <g className={styles.mainStreets}>
              <path d="M80 75 L1120 75" />
              <path d="M80 390 L1130 390" />
              <path d="M710 20 L710 470" />
            </g>

            {/* poboczne ulice */}

            <g className={styles.sideStreets}>
              <path d="M260 0 L340 500" />
              <path d="M440 0 L490 500" />
              <path d="M820 0 L780 500" />
              <path d="M1030 0 L960 500" />

              <path d="M0 175 L1200 215" />
              <path d="M0 315 L1200 280" />
            </g>

            {/* nazwy ulic */}

            <g className={styles.streetLabels}>
              <text
                x="610"
                y="62"
              >
                MIODOWA
              </text>

              <text
                x="570"
                y="378"
              >
                PODWALE
              </text>

              <text
                x="735"
                y="250"
                transform="rotate(90 735 250)"
              >
                KAPITULNA
              </text>
            </g>

            {/* lokalizacja */}

            <g className={styles.locationMarker}>
              <line
                x1="710"
                y1="220"
                x2="710"
                y2="315"
              />

              <line
                x1="665"
                y1="267"
                x2="755"
                y2="267"
              />

              <circle
                cx="710"
                cy="267"
                r="5"
              />
            </g>

            {/* opis punktu */}

            <g className={styles.locationLabel}>
              <text
                x="770"
                y="258"
              >
                77STUDIO
              </text>

              <text
                x="770"
                y="276"
              >
                KAPITULNA 2/6
              </text>
            </g>

            <text
              className={styles.district}
              x="70"
              y="455"
            >
              STARE MIASTO
            </text>
          </svg>
        </div>
      </section>
    </main>
  );
}