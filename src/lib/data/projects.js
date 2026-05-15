export const info = {
    name: "Gabriele Romano",
    school: "Istituto Internazionale Edoardo Agnelli",
    examYear: "2025 / 2026",
    class: "5ª Informatica",
};

export const years = [
    {
        id: 1,
        ordinal: "01",
        label: "Primo Anno",
        period: "2021 — 2022",
        theme: "Le fondamenta della democrazia",
        projects: [
            {
                id: "1-a",
                title: "La Costituzione Italiana",
                category: "Diritto costituzionale",
                description: "Studio dei principi fondamentali della Costituzione della Repubblica Italiana: nascita, struttura e valori portanti dell'ordinamento democratico.",
                topics: ["Principi fondamentali", "Diritti e doveri", "Assemblea Costituente", "Storia repubblicana"],
                image: "/images/costituzione.jpg",
                materials: [
                    {
                        type: "png",
                        title: "Presentazione — I principi fondamentali",
                        file: "/materials/1-a/la_costituzione_italiana.drawio.png",
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        ordinal: "02",
        label: "Secondo Anno",
        period: "2022 — 2023",
        theme: "Legalità e mafia",
        projects: [
            {
                id: "2-a",
                title: "Agende Rosse",
                category: "Legalità e Antimafia",
                description: "Percorso sulla cultura della legalità: storia e contrasto alla criminalità organizzata, il coraggio dei testimoni di giustizia e il ruolo della scuola.",
                topics: ["Criminalità organizzata", "Testimoni di giustizia", "Falcone e Borsellino", "Educazione alla legalità"],
                image: "/images/agende-rosse.jpg",
            },
        ],
    },
    {
        id: 3,
        ordinal: "03",
        label: "Terzo Anno",
        period: "2023 — 2024",
        theme: "Testimonianze di mafia e realizzazione di progetti",
        projects: [
            {
                id: "3-a",
                title: "Calcolo del Codice Fiscale",
                category: "Informatica Applicata",
                description: "Realizzazione di un programma in C in grado di calcolare il codice fiscale a partire dai dati anagrafici dell'utente.",
                topics: ["Codice fiscale", "Linguaggio C"],
                image: "/images/codice-fiscale.jpg",
                materials: [
                    {
                        type: "progetto",
                        title: "Calcolo del codice fiscale in C",
                        file: "/materials/3-a/presentazione.pdf",
                    },
                    {
                        type: "link",
                        title: "Calcolo del codice fiscale in javascript",
                        file: "/materials/3-a/approfondimento.pdf",
                    },
                ],
            },
            {
                id: "3-b",
                title: "La Mattanza",
                category: "Legalità e Antimafia",
                description: "Lettura e analisi de 'La mattanza' di Carlo Lucarelli: la narrativa come strumento di indagine civile sulla criminalità organizzata e sulla memoria delle vittime di mafia.",
                topics: ["Criminalità organizzata", "Memoria delle vittime di mafia"],
                image: "/images/mattanza.jpg",
                materials: [
                    {
                        type: "pdf",
                        title: "Approfondimento scritto",
                        file: "/materials/3-b/la_mattanza_carlo_lucarelli.pdf",
                    },
                ],
            },
        ],
    },
    {
        id: 4,
        ordinal: "04",
        label: "Quarto Anno",
        period: "2024 — 2025",
        theme: "Patente",
        projects: [
            {
                id: "4-a",
                title: "Quiz della Patente",
                category: "Informatica Applicata",
                description: "Realizzazione di un'applicazione per la simulazione del quiz della patente di guida in Python con interfaccia grafica.",
                topics: ["Patente B", "Python", "TKinter", "Interfaccia grafica"],
                image: "/images/quiz-patente.jpg",
                materials: [
                    {
                        type: "slides",
                        title: "Presentazione — I principi fondamentali",
                        file: "/materials/1-a/presentazione.pdf",
                        date: "Ottobre 2021",
                    },
                    {
                        type: "doc",
                        title: "Approfondimento scritto",
                        file: "/materials/1-a/approfondimento.pdf",
                        date: "Novembre 2021",
                    },
                ],
            },
        ],
    },
    {
        id: 5,
        ordinal: "05",
        label: "Quinto Anno",
        period: "2025 — 2026",
        theme: "Prigionia e libertà",
        projects: [
            {
                id: "5-a",
                title: "La prigione domestica",
                category: "Violenza di Genere",
                description: "Analisi statistica della violenza di genere in Italia: dati, tendenze e strumenti legislativi di contrasto con focus sul Codice Rosso.",
                topics: ["Analisi dati", "Codice Rosso", "1522", "Strumenti digitali"],
                image: "/images/prigione-domestica.jpg",
                materials: [
                    {
                        type: "slides",
                        title: "Presentazione — I principi fondamentali",
                        file: "/materials/1-a/presentazione.pdf",
                        date: "Ottobre 2021",
                    },
                    {
                        type: "doc",
                        title: "Approfondimento scritto",
                        file: "/materials/1-a/approfondimento.pdf",
                        date: "Novembre 2021",
                    },
                ],
            },
            {
                id: "5-b",
                title: "Progetto 1522",
                category: "Violenza di Genere",
                description: "Realizzazione di un sito web dedicato alla sensibilizzazione sulla violenza di genere, con riferimento al numero antiviolenza 1522.",
                topics: ["Sviluppo web", "Sensibilizzazione", "1522", "Comunicazione digitale"],
                image: "/images/progetto-1522.jpg",
                materials: [
                    {
                        type: "slides",
                        title: "Presentazione — I principi fondamentali",
                        file: "/materials/1-a/presentazione.pdf",
                        date: "Ottobre 2021",
                    },
                    {
                        type: "doc",
                        title: "Approfondimento scritto",
                        file: "/materials/1-a/approfondimento.pdf",
                        date: "Novembre 2021",
                    },
                ],
            },
            {
                id: "5-c",
                title: "Incontro con Roberto Saviano",
                category: "Legalità e Letteratura",
                description: "Incontro con Roberto Saviano a partire dal libro \"L'amore mio non muore\": riflessione sul coraggio civile, la narrativa come strumento di denuncia e il prezzo personale della lotta alla criminalità.",
                topics: ["Roberto Saviano", "Narrativa civile", "Denuncia sociale", "Coraggio civile"],
                image: "/images/saviano.jpg",
            },
            {
                id: "5-d",
                title: "Memoria e Shoah",
                category: "Memoria Storica",
                description: "Il dovere della memoria collettiva: studio della Shoah, delle leggi razziali in Italia e del percorso di costruzione di una coscienza civile europea post-bellica.",
                topics: ["Shoah", "Leggi razziali", "Giorno della Memoria", "Diritti umani"],
                image: "/images/shoah.jpg",
                group: "Memoria e Shoah",
                materials: [
                    {
                        type: "slides",
                        title: "Presentazione — I principi fondamentali",
                        file: "/materials/1-a/presentazione.pdf",
                        date: "Ottobre 2021",
                    },
                    {
                        type: "doc",
                        title: "Approfondimento scritto",
                        file: "/materials/1-a/approfondimento.pdf",
                        date: "Novembre 2021",
                    },
                ],
            },
            {
                id: "5-e",
                title: "Primo Levi e la zona grigia",
                category: "Memoria Storica",
                description: "La prigionia del lager attraverso la testimonianza di Primo Levi: il concetto di zona grigia come spazio morale ambiguo e il senso di vergogna del sopravvissuto.",
                topics: ["Zona grigia", "Vergogna del sopravvissuto", "Se questo è un uomo", "Testimonianza"],
                image: "/images/primo-levi.jpg",
                group: "Memoria e Shoah",
                materials: [
                    {
                        type: "slides",
                        title: "Presentazione — I principi fondamentali",
                        file: "/materials/1-a/presentazione.pdf",
                        date: "Ottobre 2021",
                    },
                    {
                        type: "doc",
                        title: "Approfondimento scritto",
                        file: "/materials/1-a/approfondimento.pdf",
                        date: "Novembre 2021",
                    },
                ],
            },
            {
                id: "5-f",
                title: "Le altre operazioni naziste",
                category: "Memoria Storica",
                description: "Le operazioni naziste meno conosciute: l'Aktion T4, il programma di sterminio dei disabili, e il Lebensborn, il progetto di riproduzione della razza ariana.",
                topics: ["Aktion T4", "Lebensborn", "Eugenetica nazista", "Crimini contro l'umanità"],
                image: "/images/operazioni-naziste.jpg",
                group: "Memoria e Shoah",
                materials: [
                    {
                        type: "slides",
                        title: "Presentazione — I principi fondamentali",
                        file: "/materials/1-a/presentazione.pdf",
                        date: "Ottobre 2021",
                    },
                    {
                        type: "doc",
                        title: "Approfondimento scritto",
                        file: "/materials/1-a/approfondimento.pdf",
                        date: "Novembre 2021",
                    },
                ],
            },
            {
                id: "5-g",
                title: "La Costituzione e i suoi principi fondamentali",
                category: "Diritto Costituzionale",
                description: "Studio approfondito dei principi fondamentali della Costituzione della Repubblica Italiana: nascita, struttura e valori portanti dell'ordinamento democratico.",
                topics: ["Principi fondamentali", "Diritti e doveri", "Assemblea Costituente", "Storia repubblicana"],
                image: "/images/costituzione.jpg",
                materials: [
                    {
                        type: "slides",
                        title: "Presentazione — I principi fondamentali",
                        file: "/materials/1-a/presentazione.pdf",
                        date: "Ottobre 2021",
                    },
                    {
                        type: "doc",
                        title: "Approfondimento scritto",
                        file: "/materials/1-a/approfondimento.pdf",
                        date: "Novembre 2021",
                    },
                ],
            },
            {
                id: "5-h",
                title: "Il Movimento del '68",
                category: "Storia Civile",
                description: "Il '68 come punto di svolta nella storia civile e politica italiana ed europea: le rivendicazioni studentesche, il femminismo, i diritti civili e il loro impatto duraturo sulla democrazia.",
                topics: ["Contestazione studentesca", "Diritti civili", "Femminismo", "Riforma sociale"],
                image: "/images/sessantotto.jpg",
                materials: [
                    {
                        type: "slides",
                        title: "Presentazione — I principi fondamentali",
                        file: "/materials/1-a/presentazione.pdf",
                        date: "Ottobre 2021",
                    },
                    {
                        type: "doc",
                        title: "Approfondimento scritto",
                        file: "/materials/1-a/approfondimento.pdf",
                        date: "Novembre 2021",
                    },
                ],
            },
        ],
    },
];