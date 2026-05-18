<script>
    import { base } from '$app/paths';
    let { project, accent = "#C4973A" } = $props();
</script>

<a href="{base}/argomento/{project.id}" class="card" style="--accent: {accent}">
    <div class="card-image">
        <img src="{base}{project.image}" alt={project.title} />
        <div class="image-overlay"></div>
    </div>

    <div class="card-body">
        <div class="card-left">
            <div class="card-labels">
                <span class="card-category label">{project.category}</span>
            </div>
            <h3 class="card-title">{project.title}</h3>
            <p class="card-desc">{project.description}</p>
        </div>

        <div class="card-right">
            <span class="topics-label label">Argomenti</span>
            <ul class="card-topics">
                {#each project.topics as topic, i}
                    <li class="topic-item">
                        <span class="topic-num">{String(i + 1).padStart(2, "0")}</span>
                        <span class="topic-text">{topic}</span>
                    </li>
                {/each}
            </ul>
        </div>
    </div>

    <div class="card-line"></div>
</a>
<style>
    .card {
        position: relative;
        display: grid;
        grid-template-columns: 280px 1fr;
        border: 1px solid var(--border-card);
        border-radius: 2px;
        text-decoration: none;
        cursor: pointer;
        background: var(--bg-card);
        overflow: hidden;
        transition:
            background 0.35s ease,
            border-color 0.35s ease,
            transform 0.35s var(--ease-out),
            box-shadow 0.35s ease;
    }

    .card:hover {
        background: var(--bg-card-h);
        border-color: rgba(196, 151, 58, 0.3);
        transform: translateY(-3px);
        box-shadow: 0 24px 64px rgba(0, 0, 0, 0.4);
    }

    .card-image {
        position: relative;
        overflow: hidden;
        min-height: 220px;
    }

    .card-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        transition:
            transform 0.6s var(--ease-out),
            filter 0.4s ease;
        filter: saturate(0.7) brightness(0.85);
    }

    .card:hover .card-image img {
        transform: scale(1.05);
        filter: saturate(0.9) brightness(0.95);
    }

    .image-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(
            to right,
            transparent 60%,
            var(--bg-card) 100%
        );
        transition: opacity 0.35s ease;
    }

    .card:hover .image-overlay {
        background: linear-gradient(
            to right,
            transparent 50%,
            var(--bg-card-h) 100%
        );
    }

    .card-body {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;
        padding: 2rem 2.5rem;
        align-items: center;
    }

    .card-left {
        display: flex;
        flex-direction: column;
        gap: 0.75rem;
        border-right: 1px solid var(--border);
        padding-right: 2rem;
    }

    .card-labels {
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    .card-category {
        color: var(--accent, var(--gold));
        opacity: 0.85;
        font-size: 0.6rem;
    }

    .card-title {
        font-family: var(--ff-display);
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1.2;
        color: var(--text);
        transition: color 0.3s ease;
    }

    .card:hover .card-title {
        color: #fff;
    }

    .card-desc {
        font-family: var(--ff-body);
        font-size: 0.95rem;
        line-height: 1.7;
        color: var(--text-sec);
    }

    .card-right {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    .topics-label {
        color: var(--text-muted);
        font-size: 0.58rem;
    }

    .card-topics {
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 0;
    }

    .topic-item {
        display: flex;
        align-items: baseline;
        gap: 1rem;
        padding: 0.65rem 0;
        border-bottom: 1px solid var(--border);
        transition: border-color 0.3s ease;
    }

    .topic-item:first-child {
        border-top: 1px solid var(--border);
    }

    .card:hover .topic-item {
        border-color: rgba(196, 151, 58, 0.15);
    }

    .topic-num {
        font-family: var(--ff-mono);
        font-size: 0.58rem;
        color: var(--accent, var(--gold));
        opacity: 0.5;
        flex-shrink: 0;
        width: 1.5rem;
    }

    .topic-text {
        font-family: var(--ff-body);
        font-size: 1rem;
        color: var(--text-sec);
        line-height: 1.3;
        transition: color 0.3s ease;
    }

    .card:hover .topic-text {
        color: var(--text);
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
        grid-column: 1 / -1;
    }

    .card:hover .card-line {
        width: 100%;
    }

    @media (max-width: 1024px) {
        .card {
            grid-template-columns: 220px 1fr;
        }
    }

    @media (max-width: 768px) {
        .card {
            grid-template-columns: 1fr;
        }

        .card-image {
            min-height: 200px;
            max-height: 220px;
        }

        .image-overlay {
            background: linear-gradient(
                to bottom,
                transparent 60%,
                var(--bg-card) 100%
            );
        }

        .card-body {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            padding: 1.5rem;
        }

        .card-left {
            border-right: none;
            padding-right: 0;
            border-bottom: 1px solid var(--border);
            padding-bottom: 1.5rem;
        }
    }
</style>
