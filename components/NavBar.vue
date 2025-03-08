<template>
  <nav class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <NuxtLink to="/" class="text-xl font-bold text-gray-800">
            IELTS Ink
          </NuxtLink>
        </div>
        
        <div class="flex items-center space-x-4">
          <div class="flex items-center bg-gray-100 px-3 py-1 rounded-full">
            <span class="text-gray-600 text-sm font-medium">{{ tokens }} tokens</span>
          </div>
          <NuxtLink to="/practice" class="text-gray-600 hover:text-gray-900">
            Practice
          </NuxtLink>
          <NuxtLink to="/resources" class="text-gray-600 hover:text-gray-900">
            Resources
          </NuxtLink>
          <NuxtLink to="/about" class="text-gray-600 hover:text-gray-900">
            About
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { tokens } = useTokens()
</script>
