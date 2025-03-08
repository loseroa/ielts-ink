<template>
    <!-- top bar displaying the questionId -->
    <div class="flex items-center justify-between p-5 bg-white shadow-sm">
        <div class="text-lg font-semibold text-gray-700">Question ID: {{ $route.params.id }}</div>
    </div>
    <!-- main content -->
    <div class="flex flex-col min-h-screen p-5">
      <div class="text-center mb-5">
        <div class="text-4xl font-bold text-gray-700 mb-3">{{ formatTime(timeRemaining) }}</div>
        <button 
          v-if="!isStarted" 
          @click="startTest" 
          class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          Start Test
        </button>
      </div>
  
      <div class="flex-1 grid grid-cols-2 gap-5">
        <div class="bg-white rounded-lg p-5 shadow">
          <h2 class="text-xl font-semibold mb-4">Writing Task</h2>
          <div class="space-y-4 leading-relaxed">
            <p>You should spend about 40 minutes on this task.</p>
            <p class="text-gray-700">
              Write about the following topic:<br><br>
              Some people believe that it is best to accept a bad situation, 
              such as an unsatisfactory job or shortage of money. Others argue 
              that it is better to try and improve such situations.<br><br>
              Discuss both these views and give your own opinion.
            </p>
            <p>Write at least 250 words.</p>
          </div>
        </div>
        
        <div class="bg-white rounded-lg p-5 shadow">
          <h2 class="text-xl font-semibold mb-4">Your Response</h2>
          <textarea 
            v-model="essayContent"
            placeholder="Start writing your essay here..."
            class="w-full h-[calc(100%-5rem)] p-4 border border-gray-200 rounded resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 disabled:cursor-not-allowed"
            :disabled="!isStarted"
          ></textarea>
          <div class="mt-3 text-right text-gray-600">
            Words: {{ wordCount }}
          </div>
        </div>
      </div>
  
      <div class="mt-5 text-center">
        <button 
          @click="submitEssay" 
          class="px-8 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
          :disabled="!isStarted"
        >
          Submit Essay
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        essayContent: '',
        isStarted: false,
        timeRemaining: 40 * 60, // 40 minutes in seconds
        timerInterval: null,
      }
    },
    computed: {
      wordCount() {
        return this.essayContent.trim()
          ? this.essayContent.trim().split(/\s+/).length
          : 0
      }
    },
    methods: {
      startTest() {
        this.isStarted = true;
        this.timerInterval = setInterval(() => {
          if (this.timeRemaining > 0) {
            this.timeRemaining--;
          } else {
            this.endTest();
          }
        }, 1000);
      },
      endTest() {
        clearInterval(this.timerInterval);
        this.isStarted = false;
        // Optionally auto-submit here
      },
      formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
      },
      submitEssay() {
        // Handle essay submission
        console.log('Essay submitted:', this.essayContent)
      }
    },
    beforeDestroy() {
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
      }
    }
  }
  </script>