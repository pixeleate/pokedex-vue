<template>
  <main
    v-if="viewType === 'GRID'"
    class="flex-grow flex justify-center items-center"
  >
    <div class="mx-auto px-4 sm:px-8 py-2 text-center">
      <div class="grid grid-cols-6 gap-4 items-start mt-8 mx-auto px-8">
        <template v-for="pokemon in pokemons.edges">
          <pokemon-card :pokemon="pokemon" :key="pokemon.id" />
        </template>
      </div>
    </div>
  </main>
</template>

<script>
import PokemonCard from "@/components/PokemonCard.vue";

export default {
  name: "GridView",
  props: {
    pokemons: Object,
    viewType: String
  },
  components: {
    PokemonCard
  }
};
</script>
