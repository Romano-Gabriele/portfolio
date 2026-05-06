<script>
    import { onMount } from "svelte";
    import ProjectCard from "./ProjectCard.svelte";

    let { year, index = 0 } = $props();

    let sectionEl = $state(null);
    let visible = $state(false);

    onMount(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    visible = true;
                    observer.disconnect();
                }
            },
            { threshold: 0.12 },
        );
        observer.observe(sectionEl);
        return () => observer.disconnect();
    });
</script>

<section
    id="year-{year.id}"
    bind:this={sectionEl}
    class:visible
    style="--accent: {year.accent}"
>
    <div class="section-topline container">
        <div class="topline-left"></div>
        <span class="label topline-label">{year.period}</span>
        <div class="topline-right"></div>
    </div>

    <div class="section-body container">
        <div class="section-meta">
            <div class="year-number-wrap">
                <span class="year-ordinal" aria-hidden="true">{year.ordinal}</span>
            </div>
            <div class="year-info">
                <span class="label" style="color: var(--accent, var(--gold))">Anno Scolastico</span>
                <h2 class="year-label">{year.label}</h2>
                <p class="year-theme">{year.color}</p>
                <div class="year-divider"></div>
                <div class="year-period">{year.period}</div>
            </div>
        </div>

        <div class="section-cards">
            {#each year.projects as project, i}
                <div
                    class="card-wrapper"
                    style="--card-delay: {i * 150 + 200}ms"
                    class:visible
                >
                    <ProjectCard {project} accent={year.accent} />
                </div>
            {/each}
        </div>
    </div>

    <div class="section-bottom container">
        <div class="bottom-rule"></div>
    </div>
</section>

<style>
    section {
        padding: clamp(4rem, 8vw, 8rem) 0;
        position: relative;
        overflow: hidden;
    }

    section::before {
        content: "";
        position: absolute;
        top: 50%;
        left: -200px;
        width: 500px;
        height: 500px;
        background: radial-gradient(
            circle,
            var(--accent, var(--gold)) 0%,
            transparent 70%
        );
        opacity: 0.04;
        transform: translateY(-50%);
        pointer-events: none;
        transition: opacity 1s ease;
    }

    section.visible::before {
        opacity: 0.07;
    }

    .section-topline {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        margin-bottom: 3rem;
        opacity: 0;
        transform: scaleX(0.6);
        transition:
            opacity 0.8s var(--ease-out),
            transform 0.8s var(--ease-out);
    }

    section.visible .section-topline {
        opacity: 1;
        transform: scaleX(1);
    }

    .topline-left {
        flex: 0 0 2rem;
        height: 1px;
        background: var(--accent, var(--gold));
        opacity: 0.6;
    }

    .topline-label {
        color: var(--text-muted);
    }

    .topline-right {
        flex: 1;
        height: 1px;
        background: linear-gradient(to right, var(--border), transparent);
    }

    .section-body {
        display: grid;
        grid-template-columns: 280px 1fr;
        gap: clamp(2rem, 5vw, 6rem);
        align-items: start;
    }

    .section-meta {
        position: relative;
        opacity: 0;
        transform: translateX(-30px);
        transition:
            opacity 0.8s var(--ease-out) 0.1s,
            transform 0.8s var(--ease-out) 0.1s;
    }

    section.visible .section-meta {
        opacity: 1;
        transform: translateX(0);
    }

    .year-number-wrap {
        position: absolute;
        top: -1.5rem;
        left: -1rem;
        pointer-events: none;
        user-select: none;
        z-index: 0;
    }

    .year-ordinal {
        font-family: var(--ff-display);
        font-size: clamp(7rem, 12vw, 12rem);
        font-weight: 900;
        line-height: 1;
        color: transparent;
        -webkit-text-stroke: 1px rgba(237, 232, 220, 0.05);
        letter-spacing: -0.04em;
    }

    .year-info {
        position: relative;
        z-index: 1;
        padding-top: 0.5rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }

    .year-label {
        font-family: var(--ff-display);
        font-size: 1.8rem;
        font-weight: 700;
        line-height: 1.1;
        color: var(--text);
    }

    .year-theme {
        font-family: var(--ff-body);
        font-style: italic;
        font-size: 1rem;
        color: var(--text-sec);
        line-height: 1.5;
    }

    .year-divider {
        width: 2.5rem;
        height: 1px;
        background: var(--accent, var(--gold));
        opacity: 0.5;
        margin: 0.25rem 0;
    }

    .year-period {
        font-family: var(--ff-mono);
        font-size: 0.65rem;
        letter-spacing: 0.2em;
        color: var(--text-muted);
        text-transform: uppercase;
    }

    .section-cards {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.25rem;
    }

    .card-wrapper {
        opacity: 0;
        transform: translateY(40px);
        transition:
            opacity 0.7s var(--ease-out) var(--card-delay, 0ms),
            transform 0.7s var(--ease-out) var(--card-delay, 0ms);
    }

    .card-wrapper.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .section-bottom {
        margin-top: 3rem;
        opacity: 0;
        transition: opacity 0.8s ease 0.5s;
    }

    section.visible .section-bottom {
        opacity: 1;
    }

    .bottom-rule {
        height: 1px;
        background: linear-gradient(
            to right,
            transparent,
            var(--border) 15%,
            var(--border) 85%,
            transparent
        );
    }

    @media (max-width: 900px) {
        .section-body {
            grid-template-columns: 1fr;
            gap: 2.5rem;
        }
        .year-number-wrap {
            position: static;
            margin-bottom: -3.5rem;
        }
        .year-ordinal {
            font-size: 6rem;
        }
    }
</style>
