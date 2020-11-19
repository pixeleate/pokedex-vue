<template>
  <form name="search-form" class="w-full" v-on:submit.prevent="search">
    <input
      name="search-input"
      class="w-full border rounded-md pl-2 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline"
      type="text"
      placeholder="Search for a Pokemon"
    />
  </form>
</template>

<script>
export default {
  name: "SearchBar",
  props: {
    search: Function
  }
};
</script>
