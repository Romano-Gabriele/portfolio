<script>
    import { years } from "../data/projects.js";

    let { scrollY = 0 } = $props();

    let menuOpen = $state(false);

    let scrolled = $derived(scrollY > 60);

    function scrollTo(id) {
        menuOpen = false;
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
</script>

<nav class:scrolled>
    <div class="nav-inner container">
        <button class="logo" onclick={() => scrollTo("hero")}>
            <span class="logo-icon">◈</span>
            <span class="logo-text">Portfolio Educazione Civica</span>
        </button>

        <ul class="nav-links">
            {#each years as year}
                <li>
                    <button onclick={() => scrollTo(`year-${year.id}`)}>
                        <span class="nav-num">{year.ordinal}</span>
                        <span class="nav-label">{year.label}</span>
                    </button>
                </li>
            {/each}
        </ul>

        <button
            class="hamburger"
            class:open={menuOpen}
            onclick={() => (menuOpen = !menuOpen)}
            aria-label="Menu"
        >
            <span></span><span></span><span></span>
        </button>
    </div>

    {#if menuOpen}
        <div class="mobile-menu">
            {#each years as year}
                <button onclick={() => scrollTo(`year-${year.id}`)}>
                    <span class="label">{year.ordinal}</span>
                    {year.label}
                </button>
            {/each}
        </div>
    {/if}
</nav>

<style>
    nav {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 100;
        padding: 1.25rem 0;
        transition:
            background 0.4s ease,
            padding 0.4s ease,
            border-color 0.4s ease;
        border-bottom: 1px solid transparent;
    }

    nav.scrolled {
        background: rgba(5, 9, 26, 0.92);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        padding: 0.75rem 0;
        border-color: var(--border);
    }

    .nav-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
    }

    .logo {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        background: none;
        border: none;
        cursor: pointer;
        color: var(--text);
        padding: 0;
    }

    .logo-icon {
        font-size: 1.4rem;
        color: var(--gold);
        line-height: 1;
    }

    .logo-text {
        font-family: var(--ff-mono);
        font-size: 0.7rem;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: var(--text-sec);
    }

    .nav-links {
        display: flex;
        list-style: none;
        gap: 0.25rem;
    }

    .nav-links button {
        background: none;
        border: none;
        cursor: pointer;
        color: var(--text-muted);
        padding: 0.4rem 0.75rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.1rem;
        border-radius: 4px;
        transition:
            color 0.3s ease,
            background 0.3s ease;
    }

    .nav-links button:hover {
        color: var(--gold);
        background: var(--gold-dim);
    }

    .nav-num {
        font-family: var(--ff-mono);
        font-size: 0.55rem;
        letter-spacing: 0.1em;
        color: var(--gold);
        opacity: 0.6;
    }

    .nav-label {
        font-family: var(--ff-mono);
        font-size: 0.6rem;
        letter-spacing: 0.12em;
        text-transform: uppercase;
    }

    .hamburger {
        display: none;
        flex-direction: column;
        gap: 5px;
        background: none;
        border: none;
        cursor: pointer;
        padding: 4px;
    }

    .hamburger span {
        display: block;
        width: 22px;
        height: 1.5px;
        background: var(--text-sec);
        transition: all 0.3s ease;
        transform-origin: center;
    }

    .hamburger.open span:nth-child(1) {
        transform: translateY(6.5px) rotate(45deg);
    }
    .hamburger.open span:nth-child(2) {
        opacity: 0;
    }
    .hamburger.open span:nth-child(3) {
        transform: translateY(-6.5px) rotate(-45deg);
    }

    .mobile-menu {
        padding: 1rem 1.5rem 1.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        background: rgba(5, 9, 26, 0.96);
        border-top: 1px solid var(--border);
    }

    .mobile-menu button {
        background: none;
        border: none;
        cursor: pointer;
        color: var(--text-sec);
        text-align: left;
        padding: 0.75rem 1rem;
        font-family: var(--ff-body);
        font-size: 1.1rem;
        display: flex;
        align-items: center;
        gap: 1rem;
        border-bottom: 1px solid var(--border);
        transition: color 0.2s;
    }

    .mobile-menu button:hover {
        color: var(--gold);
    }

    @media (max-width: 768px) {
        .nav-links {
            display: none;
        }
        .hamburger {
            display: flex;
        }
    }
</style>
