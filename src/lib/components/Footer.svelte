<script>
    import { info, years } from "../data/projects.js";
</script>

<footer>
    <div class="footer-top-bar"></div>

    <div class="container footer-inner">
        <div class="footer-identity">
            <div class="footer-icon">◈</div>
            <p class="footer-name">{info.name}</p>
            <p class="footer-school">{info.school}</p>
            <p class="footer-city">{info.city}</p>
        </div>

        <nav class="footer-nav">
            <p class="label footer-nav-title">Indice</p>
            <ul>
                {#each years as year}
                    <li>
                        <a href="#year-{year.id}">
                            <span class="footer-nav-num">{year.ordinal}</span>
                            <span>{year.label}</span>
                        </a>
                    </li>
                {/each}
            </ul>
        </nav>

        <div class="footer-info">
            <p class="label footer-info-title">Esame di Maturità</p>
            <dl>
                <dt>Anno scolastico</dt>
                <dd>{info.examYear}</dd>
                <dt>Classe</dt>
                <dd>{info.class}</dd>
                <dt>Materia</dt>
                <dd>Educazione Civica</dd>
            </dl>
        </div>
    </div>

    <div class="container footer-bottom">
        <p class="footer-copy">Portfolio Educazione Civica · {info.examYear}</p>
        <div class="footer-bottom-line"></div>
    </div>
</footer>

<style>
    footer {
        padding-top: 5rem;
        padding-bottom: 2.5rem;
        margin-top: 2rem;
    }

    .footer-top-bar {
        height: 1px;
        background: linear-gradient(
            to right,
            transparent,
            var(--gold-border) 20%,
            var(--gold-border) 80%,
            transparent
        );
        margin-bottom: 4rem;
    }

    .footer-inner {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 3rem;
    }

    .footer-icon {
        font-size: 2rem;
        color: var(--gold);
        margin-bottom: 1rem;
    }

    .footer-name {
        font-family: var(--ff-display);
        font-size: 1.4rem;
        font-weight: 600;
        color: var(--text);
        margin-bottom: 0.3rem;
    }

    .footer-school,
    .footer-city {
        font-family: var(--ff-mono);
        font-size: 0.65rem;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        color: var(--text-muted);
        line-height: 2;
    }

    .footer-nav-title {
        margin-bottom: 1.2rem;
        color: var(--gold);
        opacity: 0.7;
    }

    .footer-nav ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .footer-nav a {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        color: var(--text-muted);
        text-decoration: none;
        font-family: var(--ff-body);
        font-size: 0.95rem;
        transition: color 0.25s ease;
    }

    .footer-nav a:hover {
        color: var(--gold-light);
    }

    .footer-nav-num {
        font-family: var(--ff-mono);
        font-size: 0.6rem;
        color: var(--text-muted);
        opacity: 0.6;
        width: 1.5rem;
    }

    .footer-info-title {
        margin-bottom: 1.2rem;
        color: var(--gold);
        opacity: 0.7;
    }

    dl {
        display: grid;
        grid-template-columns: auto 1fr;
        gap: 0.4rem 1.2rem;
        align-items: baseline;
    }

    dt {
        font-family: var(--ff-mono);
        font-size: 0.58rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        color: var(--text-muted);
    }

    dd {
        font-family: var(--ff-body);
        font-size: 0.9rem;
        color: var(--text-sec);
    }

    .footer-bottom {
        margin-top: 4rem;
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
    }

    .footer-copy {
        font-family: var(--ff-mono);
        font-size: 0.6rem;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: var(--text-muted);
        opacity: 0.5;
    }

    .footer-bottom-line {
        height: 1px;
        background: var(--border);
    }

    @media (max-width: 768px) {
        .footer-inner {
            grid-template-columns: 1fr;
            gap: 2.5rem;
        }
    }
</style>
