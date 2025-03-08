<template>
  <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
    <div class="px-6 py-4 bg-gray-50 border-b border-gray-100">
      <h2 class="text-xl font-semibold text-gray-800">{{ title }}</h2>
    </div>
    <div class="px-6 py-4">
      <slot></slot>
    </div>
  </div>ç
</template>

<script>
export default {
  name: 'SkillCard',
}
</script>
