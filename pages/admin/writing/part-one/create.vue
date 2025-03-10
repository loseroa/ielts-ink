<template>
  <div class="p-6 max-w-3xl mx-auto">
    <div class="mb-6">
      <h1 class="text-2xl font-semibold text-gray-800">Create Writing Part 1 Exercise</h1>
    </div>

    <div class="bg-white rounded-lg shadow p-6">
      <WritingExerciseForm
        @submit="handleSubmit"
        @cancel="router.back()"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { NewExercise } from '@/types/exercise'

definePageMeta({
  title: 'Create Writing Part 1 Exercise',
  layout: 'admin'
})
  
const router = useRouter()

const handleSubmit = async (exercise: NewExercise) => {
  try {
    // TODO: Implement API call to save the exercise
    console.log('Saving exercise:', exercise)
    // After successful save, navigate back to list
    router.push('/admin/writing-part-one')
  } catch (error) {
    console.error('Error saving exercise:', error)
    // TODO: Implement error handling
  }
}
</script>
