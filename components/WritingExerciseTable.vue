<template lang="">
     <div class="bg-white rounded-lg shadow overflow-hidden">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="exercise in exercises" :key="exercise.id">
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ exercise.id }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ exercise.title }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ exercise.category }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button 
                  @click="editExercise(exercise.id)"
                  class="text-blue-600 hover:text-blue-900"
                >
                  Edit
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</template>
<script>
export default {
    name: 'WritingExerciseTable',
    props: {
        exercises: {
            type: Array,
            required: true
        }
    },
    setup() {
        const editExercise = (id) => {
            console.log('Edit exercise:', id)
        }

        return {
            editExercise
        }
    }
}
</script>
<style lang="">
    
</style>