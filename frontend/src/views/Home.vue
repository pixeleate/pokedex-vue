<template>
  <div class="flex justify-center">
    <div class="flex flex-col lg:w-full lg:mx-10 sm:w-4/5 mx-6 w-full">
      <nav-tabs
        data-testid="nav-tabs"
        :showAll="showAll"
        :showFavorites="showFavorites"
        :showing="showing"
      />
      <div class="flex">
        <search-bar data-testid="search-bar" :search="search" />
        <view-controls
          data-testid="view-controls"
          :setViewType="setViewType"
          :viewType="viewType"
        />
      </div>
      <list-view
        data-testid="list-view"
        :pokemons="pokemons"
        :viewType="viewType"
      />
      <grid-view
        data-testid="grid-view"
        :pokemons="pokemons"
        :viewType="viewType"
      />
      <div class="flex w-full justify-center my-8">
        <button
          data-testid="load-more-btn"
          class="h-10 px-4 bg-red-500 text-white rounded-md"
          @click="loadMore"
        >
          Load more Pokemons
        </button>
      </div>
      <footer class="flex justify-center mt-12 py-6 border-t-2">
        Made in Austin, TX by Ulises Garcia
      </footer>
    </div>
  </div>
</template>

<script>
import POKEMONS from "@/graphql/Pokemons";
import POKEMON_TYPES from "@/graphql/PokemonTypes";

import ViewControls from "@/components/ViewControls.vue";
import SearchBar from "@/components/SearchBar.vue";
import NavTabs from "../components/NavTabs.vue";
import ListView from "../components/ListView.vue";
import GridView from "../components/GridView.vue";

export default {
  name: "Home",
  data() {
    return {
      pokemons: {},
      pokemonTypes: [],
      error: null,
      filtedResults: {},
      original: {},
      viewType: "GRID",
      showing: "ALL",
      offset: 0
    };
  },
  components: {
    NavTabs,
    SearchBar,
    ViewControls,
    GridView,
    ListView
  },
  methods: {
    search() {
      const inputValue = document["search-form"]["search-input"].value;

      if (Object.keys(this.original).length === 0) {
        this.original = this.pokemons;
      }

      const { count, limit, offset } = this.pokemons;

      this.filtedResults = {
        count,
        limit,
        offset,
        edges: [
          ...this.original.edges.filter(pokemon => {
            return (
              pokemon.name.includes(inputValue) ||
              pokemon.types.find(type => type.includes(inputValue))
            );
          })
        ]
      };

      this.pokemons = this.filtedResults;
    },
    showAll() {
      this.pokemons = this.original;
      this.showing = "ALL";
    },
    showFavorites() {
      this.showing = "FAVORITES";
      if (Object.keys(this.original).length === 0) {
        this.original = this.pokemons;
      }
      const { count, limit, offset } = this.pokemons;

      this.filtedResults = {
        count,
        limit,
        offset,
        edges: [
          ...this.original.edges.filter(pokemon => {
            return pokemon.isFavorite === true;
          })
        ]
      };

      this.pokemons = this.filtedResults;
    },
    setViewType(type) {
      this.viewType = type;
    },
    loadMore() {
      this.offset = this.offset + 10;
      this.$apollo.queries.pokemons.fetchMore({
        variables: {
          limit: 10,
          offset: this.offset
        },

        updateQuery: (previousResult, { fetchMoreResult }) => {
          const newPokemons = fetchMoreResult.pokemons.edges;

          return {
            pokemons: {
              __typename: previousResult.pokemons.__typename,
              edges: [...previousResult.pokemons.edges, ...newPokemons],
              count: previousResult.pokemons.count,
              limit: previousResult.pokemons.limit,
              offset: previousResult.pokemons.offset
            }
          };
        }
      });
    }
  },
  apollo: {
    pokemons: {
      query: POKEMONS,
      variables: {
        limit: 10,
        offset: 0
      }
    },
    pokemonTypes: {
      query: POKEMON_TYPES
    }
  }
};
</script>
