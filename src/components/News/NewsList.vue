<template>
    <div v-for="(news, index) in newsCollection" :key="index">
        <Article :news="news" />
    </div>
    <div v-if="isLoading && !newsCollection" class="shadow rounded-md p-4 max-w-sm w-full mx-auto mt-5">
        <div class="animate-pulse flex space-x-4">
            <div class="flex-1 space-y-4 py-1">
                <div class="h-4 bg-blue-400 rounded w-3/4"></div>
                <div class="space-y-2">
                    <div class="h-4 bg-blue-400 rounded"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { onMounted, ref, } from 'vue'
import Article from './Article.vue'

export default {
    components: {
        Article
    },
    setup () {
        const isLoading = ref(false);
        const newsCollection = ref(null);
        const error = ref(null);

        onMounted(() => {
        })

        return {
            isLoading,
            newsCollection,
            error
        }
    }
}

</script>

<style scoped>
</style>
