<template>
    <section class="py-4 animation-fade animation-delay relative">
        <div class="container mx-auto px-0 sm:px-3">
            <div class="rounded border md:shadow w-full overflow-hidden">
                <div>
                    <a :href="news.url" target="_blank">
                        <img class="w-full h-48 object-cover"
                            :src="news.urlToImage"
                            alt="card 1" />
                    </a>
                </div>

                <div class="px-4 py-4">
                    <div class="text-xs text-gray-600 font-medium">
                        <a href="#" class="uppercase hover:underline">
                            {{ news.author }}
                        </a>
                        <!-- <span class="mx-1">&bull;</span>
                        <span>May 4, 2020</span> -->
                    </div>

                    <h3 class="font-semibold text-gray-800 my-4 hover:underline text-lg">
                        <a :href="news.url" target="_blank">{{ news.title.length > 80 ? news.title.substring(0,80) + '..' : news.title }}</a>
                    </h3>

                    <div class="text-gray-700">{{ news.description.substring(0, 90) + '...' }}</div>

                    <div class="mt-4">
                        <a :href="news.url" target="_blank" class="py-2 text-indigo-600 text-xs uppercase hover:underline">Read More
                            <span>&rarr;</span></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  news: Object
})
</script>
