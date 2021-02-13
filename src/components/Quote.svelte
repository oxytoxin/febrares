<script>
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  let quote = "";
  let visible = false;
  onMount(async () => {
    await fetch(`http://localhost:8081/quotes/random`)
      .then((r) => r.json())
      .then((data) => {
        quote = data;
        visible = true;
      });
  });

  const changeQuote = async () => {
    visible = !visible;
    await fetch(`http://localhost:8081/quotes/random`)
      .then((r) => r.json())
      .then((data) => {
        quote = data;
      });
    visible = !visible;
  };
</script>

<div class="flex items-center justify-center h-48">
  {#if visible}
    <h1 class="text-justify md:text-center" out:fade in:fade>
      {quote.quote}
    </h1>
  {/if}
</div>
<button
  on:click={changeQuote}
  class="p-3 text-white bg-red-400 focus:outline-none focus:text-gray-600"
  >MORE</button
>
