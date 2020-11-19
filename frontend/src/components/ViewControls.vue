<template>
  <div class="flex">
    <button
      data-testid="list-view-btn"
      @click="setViewType('LIST')"
      class="w-8 ml-8"
    >
      <svg
        :class="{ 'stroke-current text-blue-500': viewType === 'LIST' }"
        class="stroke-current hover:text-blue-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
          d="M4 6h16M4 10h16M4 14h16M4 18h16"
        />
      </svg>
    </button>
    <span class="h-full w-1 bg-gray-200 mx-4"></span>
    <button
      data-testid="grid-view-btn"
      @click="setViewType('GRID')"
      class="w-8"
    >
      <svg
        :class="{ 'stroke-current text-blue-500': viewType === 'GRID' }"
        class="stroke-current hover:text-blue-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
          d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "ViewControls",
  props: {
    setViewType: Function,
    viewType: String
  }
};
</script>
