<template>
    <div class="min-h-screen bg-gray-100">
      <!-- Sidebar -->
      <aside :class="`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        !isSidebarOpen ? '-translate-x-full' : 'translate-x-0'
      }`">
        <div class="flex items-center justify-center h-16 border-b">
          <h1 class="text-xl font-bold text-gray-800">IELTS Ink Admin</h1>
        </div>
        <nav class="mt-6">
          <div class="px-4 space-y-2">
            <NuxtLink to="/admin/writing/part-one" class="flex items-center px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
              <span class="mx-4">Writing Part 1</span>
            </NuxtLink>
            <NuxtLink to="/admin/writing/part-two" class="flex items-center px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
              <span class="mx-4">Writing Part 2</span>
            </NuxtLink>
            <NuxtLink to="/admin/writing/part-two" class="flex items-center px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
              <span class="mx-4">Reading</span>
            </NuxtLink>
            <a href="#" class="flex items-center px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
              <span class="mx-4">Users</span>
            </a>
            <a href="#" class="flex items-center px-4 py-2 text-gray-600 rounded-lg hover:bg-gray-100">
              <span class="mx-4">Settings</span>
            </a>
          </div>
        </nav>
      </aside>
  
      <!-- Overlay for mobile -->
      <div
        v-if="isSidebarOpen"
        class="fixed inset-0 bg-gray-600 bg-opacity-50 md:hidden"
        @click="toggleSidebar"
      ></div>
  
      <!-- Main Content -->
      <div :class="`transition-all duration-300 ease-in-out ${isSidebarOpen ? 'md:ml-64' : 'md:ml-0'}`">
        <!-- Header -->
        <header class="bg-white shadow-sm">
          <div class="flex items-center justify-between h-16 px-4">
            <button class="text-gray-600" @click="toggleSidebar">
              <span class="sr-only">Toggle sidebar</span>
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div class="flex items-center">
              <div class="relative">
                <button class="flex items-center space-x-2 text-gray-600">
                  <img class="w-8 h-8 rounded-full" :src="defaultAvatar" alt="User avatar" />
                  <span>Admin User</span>
                </button>
              </div>
            </div>
          </div>
        </header>
  
        <!-- Page Content -->
        <main class="p-6">
          <slot />
        </main>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import defaultAvatar from '~/assets/images/default-avatar.jpg'
  
  const isSidebarOpen = ref(true)
  
  const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value
  }
  </script>
