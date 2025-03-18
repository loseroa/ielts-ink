<template>
  <form @submit.prevent="handleSubmit" class="space-y-6 max-w-2xl mx-auto p-6">
    <div>
      <label for="title" class="block text-sm font-medium text-gray-700 mb-1">Title</label>
      <input
        id="title"
        v-model="form.title"
        type="text"
        required
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-150 ease-in-out h-12 px-4"
      />
    </div>

    <div>
      <label for="category" class="block text-sm font-medium text-gray-700 mb-1">Category</label>
      <select
        id="category"
        v-model="form.category"
        required
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-150 ease-in-out h-12 px-4"
      >
        <option value="Charts">Charts</option>
        <option value="Graphs">Graphs</option>
        <option value="Process">Process</option>
        <option value="Maps">Maps</option>
      </select>
    </div>

    <div>
      <label for="description" class="block text-sm font-medium text-gray-700 mb-1">Description</label>
      <textarea
        id="description"
        v-model="form.description"
        rows="3"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-150 ease-in-out px-4 py-3"
      />
    </div>

    <div>
      <label for="imageUrl" class="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
      <input
        id="imageUrl"
        v-model="form.imageUrl"
        type="url"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-150 ease-in-out h-12 px-4"
      />
    </div>

    <div>
      <label for="questionText" class="block text-sm font-medium text-gray-700 mb-1">Question Text</label>
      <textarea
        id="questionText"
        v-model="form.questionText"
        required
        rows="4"
        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 transition duration-150 ease-in-out px-4 py-3"
      />
    </div>

    <div class="flex justify-end gap-4">
      <button
        type="button"
        @click="$emit('cancel')"
        class="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        Cancel
      </button>
      <button
        type="submit"
        class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <span v-if="isSubmitting" class="loader"></span>
        Save Exercise
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { NewExercise } from '@/types/exercise'

const emit = defineEmits<{
  (e: 'submit', form: NewExercise): void
  (e: 'cancel'): void
}>()

const form = reactive<NewExercise>({
  title: '',
  category: 'Charts',
  description: '',
  imageUrl: '',
  questionText: ''
})

const isSubmitting = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  try {
    await emit('submit', { ...form })
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style>
/* Add this style block for the loading icon */
.loader {
  border: 4px solid #f3f3f3;
  border-radius: 50%;
  border-top: 4px solid #3498db;
  width: 16px;
  height: 16px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
  display: inline-block;
  margin-right: 8px;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
