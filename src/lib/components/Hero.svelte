<script>
    import { onMount } from "svelte";
    import { info } from "../data/projects.js";

    let mounted = $state(false);

    onMount(() => {
        requestAnimationFrame(() => { mounted = true; });
    });
</script>

<section id="hero">
    <div class="grid-bg" aria-hidden="true">
        {#each { length: 12 } as _}
            <div class="grid-line"></div>
        {/each}
    </div>

    <div class="orb orb-1" aria-hidden="true"></div>
    <div class="orb orb-2" aria-hidden="true"></div>

    <div class="hero-content container">
        <div class="hero-label" class:visible={mounted}>
            <span class="label">Esame di Maturità · {info.examYear}</span>
            <span class="dash" aria-hidden="true"></span>
            <span class="label">{info.class} · {info.school}</span>
        </div>

        <h1 class="hero-title" class:visible={mounted}>PORTFOLIO</h1>

        <div class="hero-subtitle-wrap" class:visible={mounted}>
            <div class="subtitle-line"></div>
            <h2 class="hero-subtitle">di Educazione Civica</h2>
            <div class="subtitle-line"></div>
        </div>

        <p class="hero-name" class:visible={mounted}>{info.name}</p>

        <div class="scroll-cue" class:visible={mounted}>
            <span class="label">Scorri per esplorare</span>
            <div class="scroll-track">
                <div class="scroll-thumb"></div>
            </div>
        </div>
    </div>

    <div class="hero-bottom-bar"></div>
</section>

<style>
    section {
        position: relative;
        min-height: 100dvh;
        display: flex;
        align-items: center;
        overflow: hidden;
    }

    .grid-bg {
        position: absolute;
        inset: 0;
        display: flex;
        pointer-events: none;
    }

    .grid-line {
        flex: 1;
        border-right: 1px solid var(--border);
        opacity: 0.5;
    }

    .orb {
        position: absolute;
        border-radius: 50%;
        filter: blur(120px);
        pointer-events: none;
    }

    .orb-1 {
        width: 600px;
        height: 600px;
        background: radial-gradient(
            circle,
            rgba(196, 151, 58, 0.12),
            transparent 70%
        );
        top: -100px;
        right: -100px;
    }

    .orb-2 {
        width: 500px;
        height: 500px;
        background: radial-gradient(
            circle,
            rgba(31, 107, 90, 0.14),
            transparent 70%
        );
        bottom: -100px;
        left: -100px;
    }

    .hero-content {
        position: relative;
        z-index: 1;
        padding-top: 6rem;
        padding-bottom: 4rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1.5rem;
    }

    .hero-label {
        display: flex;
        align-items: center;
        gap: 1.25rem;
        opacity: 0;
        transform: translateY(20px);
        transition:
            opacity 0.8s var(--ease-out) 0.1s,
            transform 0.8s var(--ease-out) 0.1s;
    }

    .hero-label.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .dash {
        display: block;
        width: 2rem;
        height: 1px;
        background: var(--gold);
        opacity: 0.5;
    }

    .hero-title {
        font-family: var(--ff-display);
        font-size: clamp(5rem, 16vw, 14rem);
        font-weight: 900;
        line-height: 0.88;
        letter-spacing: -0.02em;
        color: rgba(237, 232, 220, 0.18);
        -webkit-text-stroke: 1.5px rgba(237, 232, 220, 0.55);
        text-shadow:
            0 0 80px rgba(196, 151, 58, 0.15),
            0 0 160px rgba(196, 151, 58, 0.08);
        user-select: none;
        opacity: 0;
        transform: translateY(60px);
        transition:
            opacity 0.9s var(--ease-out) 0.3s,
            transform 0.9s var(--ease-out) 0.3s;
    }

    .hero-title.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .hero-subtitle-wrap {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        opacity: 0;
        transform: translateX(-30px);
        transition:
            opacity 0.8s var(--ease-out) 0.7s,
            transform 0.8s var(--ease-out) 0.7s;
    }

    .hero-subtitle-wrap.visible {
        opacity: 1;
        transform: translateX(0);
    }

    .subtitle-line {
        flex: 0 0 auto;
        height: 1px;
        width: 3rem;
        background: linear-gradient(to right, var(--gold), transparent);
    }

    .subtitle-line:last-child {
        background: linear-gradient(to left, var(--gold), transparent);
    }

    .hero-subtitle {
        font-family: var(--ff-display);
        font-style: italic;
        font-weight: 400;
        font-size: clamp(1.4rem, 3.5vw, 2.8rem);
        color: var(--gold-light);
        letter-spacing: 0.01em;
        white-space: nowrap;
    }

    .hero-name {
        font-family: var(--ff-mono);
        font-size: 0.85rem;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        color: var(--text-sec);
        opacity: 0;
        transform: translateY(15px);
        transition:
            opacity 0.7s var(--ease-out) 0.9s,
            transform 0.7s var(--ease-out) 0.9s;
    }

    .hero-name.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .scroll-cue {
        margin-top: 3rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 0.6rem;
        opacity: 0;
        transition: opacity 0.7s var(--ease-out) 1.3s;
    }

    .scroll-cue.visible {
        opacity: 1;
    }

    .scroll-track {
        width: 1px;
        height: 60px;
        background: var(--border);
        position: relative;
        margin-left: 0.25rem;
        overflow: hidden;
    }

    .scroll-thumb {
        position: absolute;
        top: -100%;
        left: 0;
        width: 100%;
        height: 50%;
        background: var(--gold);
        animation: scrollThumb 2.4s var(--ease-in-out) infinite 1.5s;
    }

    @keyframes scrollThumb {
        0% {
            top: -50%;
        }
        100% {
            top: 150%;
        }
    }

    .hero-bottom-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(
            to right,
            transparent,
            var(--gold-border) 20%,
            var(--gold-border) 80%,
            transparent
        );
    }
</style>
