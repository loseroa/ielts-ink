<template>
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-semibold text-gray-800">Writing Part 2 Exercises</h1>
        <button 
          @click="navigateToCreate" 
          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
        >
          <span class="mr-2">Add Exercise</span>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
          </svg>
        </button>
      </div>
  
      <WritingExerciseTable
        :exercises="exercises"
        @edit="editExercise"
      />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  definePageMeta({
    title: 'Writing Part 1 Exercises',
    layout: 'admin'
  })
  
  const router = useRouter()
  
// Mock data - replace with actual API call
const exercises = ref([
    { id: 1, title: 'Technology and Society', category: 'Technology' },
    { id: 2, title: 'Environmental Issues', category: 'Environment' },
    { id: 3, title: 'Education Systems', category: 'Education' },
    { id: 4, title: 'Cultural Traditions', category: 'Culture' },
    { id: 5, title: 'Work and Career', category: 'Work' }
])
  
  const navigateToCreate = () => {
    router.push('/admin/writing/part-one/create')
  }
  
  const editExercise = (id: number) => {
    router.push(`/admin/writing/part-one/${id}/edit`)
  }
  </script>
  