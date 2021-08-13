<template>
    <div class="mb-4 px-2 w-full">
        <div class="text-center mb-2">
            <p class="text-gray-600 font-bold">Select News</p>
        </div>
        <div class="relative" v-if="sources">
            <select 
                class="w-full border px-4 pr-8 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none appearance-none" 
                id="select-item" 
                @change='$emit("sourceUpdate", $event.target.value)'
            >
                <option v-bind:value="source.id" v-for="source in sources" :key="source.id">{{ source.name }}</option>
            </select>
            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
            </div>
        </div>
        <div v-if="error">
            <p class="text-center text-sm text-red-300">{{ error }}</p>
        </div>
        <div v-if="loading && !sources" class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div class="animate-pulse flex space-x-4">
                <div class="flex-1 space-y-4 py-1">
                    <div class="h-4 bg-blue-400 rounded w-3/4"></div>
                    <div class="space-y-2">
                        <div class="h-4 bg-blue-400 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  loading: Boolean,
  sources: Object,
  error: String
})
</script>
