<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    <main class="flex-grow">
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
// Component is automatically registered
</script>
