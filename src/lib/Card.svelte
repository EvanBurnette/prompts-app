<script>
  import { fly, fade } from "svelte/transition";
  export let prompt = "";
  export let category = "";
  export let key = -1;
</script>

{#key key}
<main in:fly={{y: -200, duration: 500}}>
  <div>
    <h2>{category}</h2>
    <p>{prompt}</p>
  </div>
</main>
{/key}

<style>
main {
  border: solid white 0.2rem;
  border-radius: 0.5rem;
  padding: 0rem 1rem;
  min-width: 70vw;
}
p {
  font-size: 1.2rem;
}
h2 {
  text-align: center;
}
@media (min-width: 768px) {
    main{
      min-width: 25vw;
      min-height: 10rem;
    }
  }
</style>