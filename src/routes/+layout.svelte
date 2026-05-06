<script>
  import favicon from "$lib/assets/favicon.svg";

  let { children } = $props();
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
</svelte:head>

{@render children()}

<style>
  @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=Crimson+Pro:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap");

  :global(:root) {
    --bg: #05091a;
    --bg-surface: #0b1228;
    --bg-card: #0f1830;
    --bg-card-h: #162040;

    --text: #ede8dc;
    --text-sec: #b0a898;
    --text-muted: #685e50;

    --gold: #c4973a;
    --gold-light: #d9b870;
    --gold-dim: rgba(196, 151, 58, 0.18);
    --gold-border: rgba(196, 151, 58, 0.22);

    --teal: #1f6b5a;
    --teal-light: #2e9477;

    --border: rgba(237, 232, 220, 0.06);
    --border-card: rgba(196, 151, 58, 0.14);

    --ff-display: "Playfair Display", Georgia, serif;
    --ff-body: "Crimson Pro", Georgia, serif;
    --ff-mono: "Space Mono", monospace;

    --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --duration: 0.5s;
  }

  :global(*, *::before, *::after) {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :global(html) {
    scroll-behavior: smooth;
    font-size: 16px;
  }

  :global(body) {
    background-color: var(--bg);
    color: var(--text);
    font-family: var(--ff-body);
    font-size: 1.125rem;
    line-height: 1.75;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  :global(::-webkit-scrollbar) {
    width: 3px;
  }
  :global(::-webkit-scrollbar-track) {
    background: var(--bg);
  }
  :global(::-webkit-scrollbar-thumb) {
    background: var(--gold);
    border-radius: 2px;
  }

  :global(body::before) {
    content: "";
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
    background-size: 200px 200px;
    pointer-events: none;
    z-index: 9999;
    opacity: 0.45;
  }

  :global(.container) {
    width: min(1280px, 100%);
    margin-inline: auto;
    padding-inline: clamp(1.5rem, 5vw, 5rem);
  }

  :global(.label) {
    font-family: var(--ff-mono);
    font-size: 0.65rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold);
  }

  :global(.reveal) {
    opacity: 0;
    transform: translateY(40px);
    transition:
      opacity 0.8s var(--ease-out),
      transform 0.8s var(--ease-out);
  }

  :global(.reveal.visible) {
    opacity: 1;
    transform: translateY(0);
  }
</style>
