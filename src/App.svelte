<script>
  import Tailwindcss from "./Tailwindcss.svelte";
  import Quote from "./components/Quote.svelte";
</script>

<Tailwindcss />
<main class="grid w-full h-full text-gray-600 place-items-center">
  <div class="px-6 mx-auto space-y-10 text-center md:w-1/2 md:space-y-20">
    <h1 class="text-3xl md:text-7xl">Oxy & Sero</h1>
    <Quote />
  </div>
</main>

<style>
</style>
