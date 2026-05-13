<script>
    import { onMount } from "svelte";
    import ProjectCard from "./ProjectCard.svelte";

    let { year, index = 0 } = $props();

    let sectionEl = $state(null);
    let visible = $state(false);

    // Raggruppa i progetti per il campo "group"
    const projectBlocks = $derived(() => {
        const blocks = [];
        const seen = new Map();

        for (const project of year.projects) {
            if (project.group) {
                if (!seen.has(project.group)) {
                    seen.set(project.group, {
                        type: "group",
                        label: project.group,
                        items: [],
                    });
                    blocks.push(seen.get(project.group));
                }
                seen.get(project.group).items.push(project);
            } else {
                blocks.push({ type: "single", items: [project] });
            }
        }
        return blocks;
    });

    onMount(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    visible = true;
                    observer.disconnect();
                }
            },
            { threshold: 0.08 },
        );
        observer.observe(sectionEl);
        return () => observer.disconnect();
    });
</script>

<section
    id="year-{year.id}"
    bind:this={sectionEl}
    class:visible
    style="--accent: {year.color}"
>
    <!-- Header anno -->
    <div class="year-header container">
        <div class="year-header-left">
            <span class="year-ordinal" aria-hidden="true">{year.ordinal}</span>
            <div class="year-header-info">
                <span class="label" style="color: var(--accent)"
                    >Anno Scolastico · {year.period}</span
                >
                <h2 class="year-label">{year.label}</h2>
                <p class="year-theme">{year.theme}</p>
            </div>
        </div>
        <div class="year-header-line"></div>
    </div>

    <!-- Progetti -->
    <div class="year-projects container">
        {#each projectBlocks() as block, blockIndex}
            {#if block.type === "single"}
                <div
                    class="project-wrapper"
                    style="--card-delay: {blockIndex * 150 + 200}ms"
                    class:visible
                >
                    <ProjectCard project={block.items[0]} accent={year.color} />
                </div>
            {:else}
                <!-- Gruppo di progetti correlati -->
                <div
                    class="group-wrapper"
                    style="--card-delay: {blockIndex * 150 + 200}ms"
                    class:visible
                >
                    <div class="group-header">
                        <div class="group-header-line"></div>
                        <span class="label group-label">{block.label}</span>
                        <div class="group-header-line"></div>
                    </div>

                    <div class="group-cards">
                        {#each block.items as project, i}
                            <div
                                class="project-wrapper"
                                style="--card-delay: {blockIndex * 150 +
                                    i * 120 +
                                    200}ms"
                                class:visible
                            >
                                <ProjectCard {project} accent={year.color} />
                            </div>
                        {/each}
                    </div>
                </div>
            {/if}
        {/each}
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
        top: 0;
        left: -200px;
        width: 600px;
        height: 100%;
        background: radial-gradient(
            ellipse at left,
            var(--accent, var(--gold)) 0%,
            transparent 60%
        );
        opacity: 0.03;
        pointer-events: none;
        transition: opacity 1s ease;
    }

    section.visible::before {
        opacity: 0.06;
    }

    .year-header {
        display: flex;
        align-items: center;
        gap: 2rem;
        margin-bottom: 3rem;
        opacity: 0;
        transform: translateY(30px);
        transition:
            opacity 0.8s var(--ease-out),
            transform 0.8s var(--ease-out);
    }

    section.visible .year-header {
        opacity: 1;
        transform: translateY(0);
    }

    .year-header-left {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        flex-shrink: 0;
    }

    .year-ordinal {
        font-family: var(--ff-display);
        font-size: clamp(4rem, 8vw, 8rem);
        font-weight: 900;
        line-height: 1;
        color: transparent;
        -webkit-text-stroke: 1px var(--accent, var(--gold));
        opacity: 0.25;
        letter-spacing: -0.04em;
        user-select: none;
    }

    .year-header-info {
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
    }

    .year-label {
        font-family: var(--ff-display);
        font-size: clamp(1.6rem, 3vw, 2.4rem);
        font-weight: 700;
        line-height: 1.1;
        color: var(--text);
    }

    .year-theme {
        font-family: var(--ff-body);
        font-style: italic;
        font-size: 1rem;
        color: var(--text-sec);
    }

    .year-header-line {
        flex: 1;
        height: 1px;
        background: linear-gradient(
            to right,
            var(--accent, var(--gold)),
            transparent
        );
        opacity: 0.2;
    }

    .year-projects {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }

    .project-wrapper {
        opacity: 0;
        transform: translateY(40px);
        transition:
            opacity 0.7s var(--ease-out) var(--card-delay, 0ms),
            transform 0.7s var(--ease-out) var(--card-delay, 0ms);
    }

    .project-wrapper.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .group-wrapper {
        opacity: 0;
        transform: translateY(40px);
        transition:
            opacity 0.7s var(--ease-out) var(--card-delay, 0ms),
            transform 0.7s var(--ease-out) var(--card-delay, 0ms);
        display: flex;
        flex-direction: column;
        gap: 0;
        border: 1px solid var(--border-card);
        border-radius: 2px;
        overflow: hidden;
    }

    .group-wrapper.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .group-header {
        display: flex;
        align-items: center;
        gap: 1.25rem;
        padding: 1rem 2.5rem;
        background: rgba(196, 151, 58, 0.05);
        border-bottom: 1px solid var(--border-card);
    }

    .group-header-line {
        flex: 1;
        height: 1px;
        background: var(--accent, var(--gold));
        opacity: 0.2;
    }

    .group-label {
        color: var(--accent, var(--gold));
        font-size: 0.62rem;
        white-space: nowrap;
        opacity: 0.7;
    }

    .group-cards {
        display: flex;
        flex-direction: column;
        gap: 0;
    }

    .group-cards .project-wrapper + .project-wrapper {
        border-top: 1px solid var(--border);
    }

    .group-cards :global(.card) {
        border: none;
        border-radius: 0;
    }

    .section-bottom {
        margin-top: 4rem;
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
        .year-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
        }
        .year-header-line {
            display: none;
        }
        .group-header {
            padding: 0.75rem 1.5rem;
        }
    }
</style>
