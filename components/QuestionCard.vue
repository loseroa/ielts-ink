<template>
  <div 
    class="group bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden cursor-pointer"
    @click="navigateToQuestion"
  >
    <div class="relative w-full pt-[56.25%] bg-gray-100">
      <img
        v-if="background"
        :src="background"
        :alt="title"
        class="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div v-else class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <span class="text-gray-400">No image available</span>
      </div>
    </div>
    
    <div class="p-6 space-y-4">
      <h2 class="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
        {{ title }}
      </h2>
      
      <div class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium"
           :class="{
             'bg-green-100 text-green-700': type === 'Task 1',
             'bg-purple-100 text-purple-700': type === 'Task 2'
           }">
        {{ type }}
      </div>
      
      <p class="text-gray-700 text-base">
        {{ fullQuestion }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps({
  id: {
    type: [Number, String],
    required: true
  },
  background: {
    type: String,
    default: '' // Changed to accept image URL instead of text
  },
  title: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true,
    validator: (value) => ['Task 1', 'Task 2'].includes(value)
  },
  fullQuestion: {
    type: String,
    required: true
  }
});

const navigateToQuestion = () => {
  router.push(`/writing/${props.id}`);
};
</script>
