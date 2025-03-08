<!--template with a titlte-->
<template>
          <!-- Page Content -->
          <main class="p-6">
          <div class="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
            <div class="p-6 bg-white rounded-lg shadow">
              <h3 class="text-lg font-semibold text-gray-700">Total Users</h3>
              <p class="text-3xl font-bold text-gray-900">1,234</p>
            </div>
            <div class="p-6 bg-white rounded-lg shadow">
              <h3 class="text-lg font-semibold text-gray-700">Total Essays</h3>
              <p class="text-3xl font-bold text-gray-900">5,678</p>
            </div>
            <div class="p-6 bg-white rounded-lg shadow">
              <h3 class="text-lg font-semibold text-gray-700">Active Users</h3>
              <p class="text-3xl font-bold text-gray-900">891</p>
            </div>
          </div>
  
          <div class="bg-white rounded-lg shadow">
            <div class="p-6">
              <h2 class="text-lg font-semibold text-gray-700">Recent Activity</h2>
              <!-- Add your content here -->
            </div>
          </div>
        </main>
</template>

<script setup>
    definePageMeta({
        layout: 'admin'
    })
</script>