<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50">
        <form @submit.prevent="handleLogin" class="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
            <h1 class="text-2xl font-bold mb-6 text-center text-gray-800">Login</h1>
            
            <div class="mb-4">
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                    type="email"
                    id="email"
                    v-model="email"
                    required
                    placeholder="Enter your email"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
            </div>

            <div class="mb-6">
                <label for="password" class="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <input
                    type="password"
                    id="password"
                    v-model="password"
                    required
                    placeholder="Enter your password"
                    class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
            </div>

            <button 
                type="submit" 
                class="w-full py-3 px-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
                Login
            </button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

definePageMeta({
    title: 'Login',
    layout: ''
})

const handleLogin = () => {
    // Add your login logic here
    console.log('Login attempt:', { email: email.value, password: password.value })
}
</script>