<script>
    let { project, accent = "#C4973A" } = $props();
</script>

<article class="card" style="--accent: {accent}">
    <div class="card-inner">
        <div class="card-header">
            <span class="card-category label">{project.category}</span>
        </div>

        <h3 class="card-title">{project.title}</h3>
        <p class="card-desc">{project.description}</p>

        <div class="card-topics">
            {#each project.topics as topic}
                <span class="topic-tag">{topic}</span>
            {/each}
        </div>

        <div class="card-corner" aria-hidden="true">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                    d="M0 40 L40 0"
                    stroke="currentColor"
                    stroke-width="0.5"
                    opacity="0.3"
                />
                <path
                    d="M10 40 L40 10"
                    stroke="currentColor"
                    stroke-width="0.5"
                    opacity="0.2"
                />
                <path
                    d="M20 40 L40 20"
                    stroke="currentColor"
                    stroke-width="0.5"
                    opacity="0.1"
                />
                <circle
                    cx="38"
                    cy="2"
                    r="1.5"
                    fill="currentColor"
                    opacity="0.4"
                />
            </svg>
        </div>

        <div class="card-line"></div>
    </div>
</article>

<style>
    .card {
        position: relative;
        cursor: default;
    }

    .card-inner {
        position: relative;
        background: var(--bg-card);
        border: 1px solid var(--border-card);
        border-radius: 2px;
        padding: 2rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        overflow: hidden;
        transition:
            background 0.35s ease,
            border-color 0.35s ease,
            transform 0.35s var(--ease-out),
            box-shadow 0.35s ease;
    }

    .card:hover .card-inner {
        background: var(--bg-card-h);
        border-color: rgba(196, 151, 58, 0.35);
        transform: translateY(-4px);
        box-shadow:
            0 20px 60px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(196, 151, 58, 0.1) inset;
    }

    .card-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }

    .card-category {
        color: var(--accent, var(--gold));
        opacity: 0.8;
        font-size: 0.6rem;
        text-align: right;
    }

    .card-title {
        font-family: var(--ff-display);
        font-size: 1.35rem;
        font-weight: 600;
        line-height: 1.25;
        color: var(--text);
        transition: color 0.3s ease;
    }

    .card:hover .card-title {
        color: #fff;
    }

    .card-desc {
        font-family: var(--ff-body);
        font-size: 0.95rem;
        line-height: 1.65;
        color: var(--text-sec);
        flex: 1;
    }

    .card-topics {
        display: flex;
        flex-wrap: wrap;
        gap: 0.4rem;
        margin-top: auto;
        padding-top: 0.5rem;
        border-top: 1px solid var(--border);
    }

    .topic-tag {
        font-family: var(--ff-mono);
        font-size: 0.58rem;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        color: var(--text-muted);
        background: rgba(237, 232, 220, 0.04);
        border: 1px solid var(--border);
        border-radius: 2px;
        padding: 0.25rem 0.6rem;
        transition:
            color 0.3s ease,
            border-color 0.3s ease,
            background 0.3s ease;
    }

    .card:hover .topic-tag {
        color: var(--text-sec);
        border-color: rgba(196, 151, 58, 0.2);
        background: var(--gold-dim);
    }

    .card-corner {
        position: absolute;
        bottom: 0;
        right: 0;
        color: var(--gold);
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.4s ease;
    }

    .card:hover .card-corner {
        opacity: 1;
    }

    .card-line {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        width: 0;
        background: linear-gradient(
            to right,
            var(--accent, var(--gold)),
            var(--gold-light)
        );
        transition: width 0.5s var(--ease-out);
    }

    .card:hover .card-line {
        width: 100%;
    }
</style>
