<script>
 import { base } from '$app/paths';
    import Navbar from "$lib/components/Navbar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    
    let { data } = $props();
    const { project } = $derived(data);
</script>

<Navbar scrollY={100} /> <main class="container">
    <header class="project-header">
        <a href="{base}/" class="back-link label">← Torna alla Home</a>
        <span class="label">{project.category}</span>
        <h1>{project.title}</h1>
    </header>

    <div class="content-grid">
        <aside class="info">
            <img src="{base}{project.image}" alt={project.title} />
            
            {#if project.materials}
                <div class="materials">
                    <h3 class="label">Materiali Allegati</h3>
                    {#each project.materials as material}
                        <a href="{base}{material.file}" target="_blank" class="material-card">
                            <span class="type">{material.type}</span>
                            <span class="title">{material.title}</span>
                        </a>
                    {/each}
                </div>
            {/if}
        </aside>

        <article class="description">
            <p>{project.description}</p>
            <h3>Argomenti Trattati</h3>
            <ul>
                {#each project.topics as topic}
                    <li>{topic}</li>
                {/each}
            </ul>
        </article>
    </div>
</main>

<Footer />

<style>
    main { padding-top: 8rem; min-height: 80vh; }
    .project-header { margin-bottom: 3rem; }
    .back-link { display: block; margin-bottom: 1rem; text-decoration: none; }
    h1 { font-family: var(--ff-display); font-size: 3.5rem; margin-top: 0.5rem; }
    
    .content-grid { display: grid; grid-template-columns: 350px 1fr; gap: 4rem; }
    img { width: 100%; border-radius: 2px; border: 1px solid var(--border-card); }
    
    .materials { margin-top: 2rem; display: flex; flex-direction: column; gap: 1rem; }
    .material-card { 
        padding: 1rem; background: var(--bg-card); border: 1px solid var(--border);
        text-decoration: none; color: inherit; display: flex; flex-direction: column;
    }
    .material-card:hover { border-color: var(--gold); }
    .type { font-family: var(--ff-mono); font-size: 0.6rem; color: var(--gold); text-transform: uppercase; }

    .description { font-size: 1.2rem; color: var(--text-sec); }
    ul { margin-top: 1.5rem; }
    li { margin-bottom: 0.5rem; color: var(--text); }

    @media (max-width: 800px) {
        .content-grid { grid-template-columns: 1fr; }
    }
</style>