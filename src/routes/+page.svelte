<script>
  import { years } from "$lib/data/projects.js";
  import Navbar from "$lib/components/Navbar.svelte";
  import Hero from "$lib/components/Hero.svelte";
  import YearSection from "$lib/components/YearSection.svelte";
  import Footer from "$lib/components/Footer.svelte";

  let scrollY = $state(0);
</script>

<svelte:window bind:scrollY />

<Navbar {scrollY} />

<Hero />

<main>
  {#each years as year, i}
    <YearSection {year} index={i} />
  {/each}
</main>

<Footer />

<style>
  main {
    flex: 1;
  }
</style>
