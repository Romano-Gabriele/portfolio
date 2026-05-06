// ─── Informazioni studente ─────────────────────────────────────────────────
export const info = {
    name: "Gabriele Romano",
    school: "Istituto Internazionale Edoardo Agnelli",
    city: "Torino",
    examYear: "2025 / 2026",
    class: "5ª Informatica",
};

// ─── Anni scolastici ───────────────────────────────────────────────────────
export const years = [
    {
        id: 1,
        ordinal: "01",
        label: "Primo Anno",
        period: "2021 — 2022",
        theme: "Le fondamenta della democrazia",
        color: "#2A6B5A",
        projects: [
            {
                id: "1-a",
                title: "La Costituzione Italiana",
                category: "Diritto Costituzionale",
                description: "Studio approfondito dei principi fondamentali della Costituzione della Repubblica Italiana: nascita, struttura e valori portanti dell'ordinamento democratico.",
                topics: ["Principi fondamentali", "Diritti e doveri", "Assemblea Costituente", "Storia repubblicana"],
            },
            {
                id: "1-b",
                title: "Cittadinanza Attiva",
                category: "Partecipazione Civica",
                description: "Il ruolo del cittadino nella vita democratica: dalla partecipazione al voto alla partecipazione nei processi decisionali locali e nazionali.",
                topics: ["Voto e democrazia", "Enti locali", "Partecipazione giovanile", "Associazionismo"],
            },
        ],
    },
    {
        id: 2,
        ordinal: "02",
        label: "Secondo Anno",
        period: "2022 — 2023",
        theme: "Ambiente, futuro e responsabilità globale",
        color: "#1F5E8A",
        projects: [
            {
                id: "2-a",
                title: "Agenda 2030 e Sviluppo Sostenibile",
                category: "Sostenibilità",
                description: "Analisi degli Obiettivi di Sviluppo Sostenibile delle Nazioni Unite: impatti locali e globali, responsabilità individuale e collettiva per un futuro equo.",
                topics: ["SDGs", "Clima", "Giustizia sociale", "Economia verde"],
            },
            {
                id: "2-b",
                title: "Pandemia e Salute Pubblica",
                category: "Salute e Società",
                description: "Riflessione critica sull'esperienza pandemica da Covid-19: il rapporto tra scienza e politica, la solidarietà sociale e la gestione dell'emergenza sanitaria.",
                topics: ["Sanità pubblica", "Comunicazione scientifica", "Solidarietà", "Governance"],
            },
        ],
    },
    {
        id: 3,
        ordinal: "03",
        label: "Terzo Anno",
        period: "2023 — 2024",
        theme: "Legalità, etica e memoria civile",
        color: "#7A3F1A",
        projects: [
            {
                id: "3-a",
                title: "Legalità e Antimafia",
                category: "Legalità",
                description: "Percorso sulla cultura della legalità: storia e contrasto alla criminalità organizzata, il coraggio dei testimoni di giustizia e il ruolo della scuola.",
                topics: ["Criminalità organizzata", "Testimoni di giustizia", "Falcone e Borsellino", "Educazione alla legalità"],
            },
            {
                id: "3-b",
                title: "Memoria e Shoah",
                category: "Memoria Storica",
                description: "Il dovere della memoria collettiva: studio della Shoah, delle leggi razziali in Italia e del percorso di costruzione di una coscienza civile europea post-bellica.",
                topics: ["Shoah", "Leggi razziali", "Giorno della Memoria", "Diritti umani"],
            },
        ],
    },
    {
        id: 4,
        ordinal: "04",
        label: "Quarto Anno",
        period: "2024 — 2025",
        theme: "Europa, diritto internazionale e globalizzazione",
        color: "#4A2080",
        projects: [
            {
                id: "4-a",
                title: "Unione Europea e Istituzioni",
                category: "Diritto Europeo",
                description: "Funzionamento e storia dell'Unione Europea: istituzioni, valori fondanti, cittadinanza europea e il processo di integrazione dal Trattato di Roma ad oggi.",
                topics: ["Trattati UE", "Parlamento Europeo", "Cittadinanza EU", "Euro e politica economica"],
            },
            {
                id: "4-b",
                title: "Diritto Internazionale e ONU",
                category: "Relazioni Internazionali",
                description: "L'ordinamento giuridico internazionale: la Carta delle Nazioni Unite, il diritto umanitario, la tutela dei rifugiati e i meccanismi di risoluzione dei conflitti.",
                topics: ["Carta ONU", "Diritto umanitario", "Rifugiati", "Peacekeeping"],
            },
        ],
    },
    {
        id: 5,
        ordinal: "05",
        label: "Quinto Anno",
        period: "2025 — 2026",
        theme: "Tecnologia, lavoro e futuro della democrazia",
        color: "#1A5A6E",
        projects: [
            {
                id: "5-a",
                title: "Intelligenza Artificiale ed Etica",
                category: "Etica Digitale",
                description: "Le implicazioni civili e etiche dell'Intelligenza Artificiale: il quadro normativo europeo (AI Act), la tutela dei dati personali e il futuro della democrazia nell'era digitale.",
                topics: ["AI Act UE", "GDPR", "Fake news", "Democrazia digitale"],
            },
            {
                id: "5-b",
                title: "Lavoro e Diritti dei Lavoratori",
                category: "Diritto del Lavoro",
                description: "Evoluzione storica del diritto del lavoro in Italia: dallo Statuto dei Lavoratori alle sfide del lavoro precario, dello smart working e della gig economy.",
                topics: ["Statuto dei lavoratori", "Sindacati", "Lavoro digitale", "Welfare state"],
            },
        ],
    },
];