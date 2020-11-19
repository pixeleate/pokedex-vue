<template>
  <div class="flex my-8 rounded border-2 border-gray-100">
    <button
      @click="showAll"
      :class="{ 'bg-gray-100': showing === 'ALL' }"
      class="w-1/2 h-10"
    >
      All</button
    ><button
      @click="showFavorites"
      :class="{ 'bg-gray-100': showing === 'FAVORITES' }"
      class="w-1/2 h-10 hover:bg-blue-50"
    >
      Favorites
    </button>
  </div>
</template>

<script>
export default {
  name: "NavTabs",
  props: {
    showAll: Function,
    showFavorites: Function,
    showing: String
  }
};
</script>
