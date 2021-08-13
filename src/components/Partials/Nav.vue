<template>

<div class="relative z-10 flex flex-shrink-0 h-16 bg-white border-b border-gray-200 lg:border-none">
<button
        class="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden"
        aria-label="Open sidebar"><svg class="w-6 h-6 transition duration-150 ease-in-out" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path>
        </svg></button>

    <div class="flex flex-1 justify-start px-4 sm:px-6 lg:max-w-8xl lg:px-24">
        <div class="flex items-center space-x-4">
            <a href="/" class="text-xl font-black leading-none text-gray-900 select-none logo">News<span class="text-indigo-600">.</span></a>
        </div>
        <div class="py-3 hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
            <!-- <a class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 focus:outline-none bg-gray-300" href="/">Home</a>
            <a class="px-3 py-2 rounded-md text-sm font-medium text-gray-700 focus:outline-none" href="#">About</a> -->
    </div>
        </div>
    </div>
    <div class="flex flex-1 justify-end px-4 lg:px-28">
        <div class="flex items-center md:ml-6 space-x-4">
                <button
                class="p-1 border-2 border-transparent text-gray-600 rounded-full hover:bg-gray-500 hover:text-white focus:outline-none focus:text-white focus:bg-gray-500"
                aria-label="Notifications"><svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9">
                    </path>
                </svg></button>
        </div>
    </div>
</div>

</template>

<script setup>
import { defineProps, reactive } from 'vue'
</script>

<style scoped>
</style>
