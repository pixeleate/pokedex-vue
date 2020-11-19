<template>
  <main class="flex-grow flex justify-center items-center">
    <div
      class="bg-white shadow-lg rounded-lg px-4 py-6 mx-4 my-4 lg:w-1/2 sm:w-1/2 w-full"
    >
      <div class="flex justify-end">
        <button
          data-testid="favorite-btn"
          class="block h-12 w-12 p-2 "
          v-on:click="favorite(pokemonByName.id)"
        >
          <svg
            class="stroke-current text-red-600"
            :class="{ 'fill-current': pokemonByName.isFavorite }"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
      <div class="mx-auto h-64 rounded-md mt-1">
        <img
          data-testid="image"
          class="h-64 mx-auto"
          :src="pokemonByName.image"
          :alt="pokemonByName.name"
        />
      </div>
      <div class="flex flex-col items-center mt-4 bg-gray-50">
        <div class="flex items-center mb-4">
          <p data-testid="name" class="py-4">{{ pokemonByName.name }}</p>

          <button
            data-testid="sound-btn"
            v-on:click="playSound"
            class="block h-12 w-12 p-2 ml-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
              />
            </svg>
          </button>
          <audio id="pokemon-sound" :src="pokemonByName.sound" hidden></audio>
        </div>
        <div class="mb-4" data-testid="types">
          <span
            v-for="type in pokemonByName.types"
            :key="type"
            class="rounded-full px-4 py-1 mx-1"
            :class="{
              'bg-green-200': type === 'Grass',
              'bg-purple-200': type === 'Poison',
              'bg-blue-300': type === 'Water',
              'bg-red-200': type === 'Fire',
              'bg-green-500 text-white': type === 'Bug',
              'bg-blue-100': type === 'Flying',
              'bg-yellow-50': type === 'Normal',
              'bg-yellow-900 text-white': type === 'Ground',
              'bg-pink-300': type === 'Fairy',
              'bg-yellow-300': type === 'Electric'
            }"
            >{{ type }}</span
          >
        </div>
        <div
          data-testid="evolutions"
          v-if="pokemonByName.evolutions && pokemonByName.evolutions.length > 0"
          class="flex flex-col mt-8 items-center"
        >
          <p>Evolutions</p>
          <div class="flex">
            <div
              class="flex flex-col items-center m-8"
              v-for="evolution in pokemonByName.evolutions"
              :key="evolution.id"
            >
              <img
                class="h-20 w-20 p-4 bg-white rounded-full"
                :src="evolution.image"
                :alt="evolution.name"
              />
              <p>{{ evolution.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import POKEMON_BY_NAME from "@/graphql/PokemonByName";

export default {
  name: "detail",
  data() {
    return {
      pokemonByName: {},
      error: null
    };
  },
  methods: {
    playSound: () => {
      document.getElementById("pokemon-sound").play();
    }
  },
  apollo: {
    pokemonByName: {
      query: POKEMON_BY_NAME,
      variables() {
        return {
          name: this.$route.params.name
        };
      }
    }
  }
};
</script>
