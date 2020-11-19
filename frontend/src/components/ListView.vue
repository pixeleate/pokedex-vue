<template>
  <main v-if="viewType === 'LIST'" class="flex flex-col w-full ">
    <template v-for="pokemon in pokemons.edges">
      <pokemon-row :pokemon="pokemon" :key="pokemon.id" />
    </template>
  </main>
</template>

<script>
import PokemonRow from "@/components/PokemonRow.vue";

export default {
  name: "ListView",
  props: {
    viewType: String,
    pokemons: Object
  },
  components: {
    PokemonRow
  }
};
</script>
