<script>
  import Card from "./lib/Card.svelte";
  import Timer from "./lib/Timer.svelte";
  let key = 0;
  import {
    contextualPrompts,
    structuralPrompts,
    musicalPrompts,
  } from "./prompts.js";
  
  let selectedPrompts = ["♯", "♮", "♭"]; // Initialize with empty strings to avoid layout shift

  function selectPrompts() {
    key++;
    selectedPrompts = [
      contextualPrompts[Math.floor(Math.random() * contextualPrompts.length)],
      structuralPrompts[Math.floor(Math.random() * structuralPrompts.length)],
      musicalPrompts[Math.floor(Math.random() * musicalPrompts.length)],
    ];
  }
</script>

<svelte:head>
  <title>Prompt Generator</title>
</svelte:head>

<main>
  <div class="prompt_section">
    <div class="prompts">
      <Card {key} prompt={selectedPrompts[0]} category="Contextual"/>
      <Card {key} prompt={selectedPrompts[1]} category="Structural"/>
      <Card {key} prompt={selectedPrompts[2]} category="Musical"/>
    </div>
    <button on:click={selectPrompts}>↺</button>
  </div>
  <Timer />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }

  .prompt_section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .prompts {
    display: grid;
    flex-direction: column;
    gap: 1rem;
  }

  @media (min-width: 768px) {
    .prompts {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
</style>
