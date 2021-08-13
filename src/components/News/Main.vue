<template>
    <main class="text-gray-700 body-font overflow-hidden bg-gray-100">
        <section class="text-gray-700 body-font overflow-hidden bg-gray-100">
            <div class="container px-5 py-12 mx-auto">
                <div class="lg:w-full mx-auto flex flex-wrap">
                    <div class="lg:w-1/4">
                        <div>
                            <div class="hidden lg:block">
                                <div class="bg-white shadow p-4 rounded">
                                    <div class="flex justify-center mt-4">
                                        <Source 
                                            :loading="isSourceFetching" 
                                            :sources="sourcesList" 
                                            :error="sourceError" 
                                            @source-update="sourceUpdated" 
                                        />
                                    </div>
                                </div>
                                
                                <div class="bg-white p-4 mt-4 shadow rounded w-full">
                                    <h4 class="text-gray-600 font-bold mb-3">Ads</h4>
                                    <div class="flex flex-row flex-wrap text-xs select-none">
                                        <a href="https://www.vultr.com/?ref=7051589" target="_blank"><img src="https://www.vultr.com/media/banner_3.png" width="300" height="250" class="responsive"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full lg:w-3/4 px-6">
                        <div class="lg:ml-4">
                            <h1 class="text-gray-800 md:text-2xl font-bold mb-2">Latest News</h1>
                            <div class="border-blue-500 border-b-2 border-t-2 w-32 md:w-24 rounded"></div>
                        </div>

                        <div v-if="newsError">
                            <p class="mt-4 px-4 text-sm text-red-300">{{ newsError }}</p>
                        </div>

                        <div v-if="isNewsFetching && !newsCollection" class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                            <div class="animate-pulse flex space-x-4">
                                <div class="flex-1 space-y-4 py-1">
                                    <div class="h-4 bg-blue-400 rounded w-3/4"></div>
                                    <div class="space-y-2">
                                        <div class="h-4 bg-blue-400 rounded"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-else class="grid grid-flow-col grid-cols-2 grid-rows-5 gap-2">
                            <div v-for="(news, index) in newsCollection" :key="index">
                                <Article :news="news" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import { onMounted, ref, } from 'vue'
import Source from './Source.vue'
import Article from './Article.vue'

export default {
    components: {
        Source,
        Article
    },

    setup () {
        const isSourceFetching = ref(false);
        const sourceName = ref('bbc-news');
        const sourcesList = ref(null);
        const sourceError = ref(null);
        const isNewsFetching = ref(false);
        const newsCollection = ref(null);
        const newsError = ref(null);

        onMounted(() => {
            fetchNewsSources()
            fetchNewsCollection()
        })

        const sourceUpdated = (e) => {
            sourceName.value = e;
            fetchNewsCollection();
        }

        const fetchNewsSources = () => {
            isSourceFetching.value = true;
            fetch('https://newsapi.org/v1/sources?langauge=en')
            .then(res => res.json())
            .then(data => {
                isSourceFetching.value = false;
                sourcesList.value = data.sources;
            })
            .catch(err => {
                isSourceFetching.value = false;
                sourceError.value = "Something went wrong";
            })
        }

        const fetchNewsCollection = () => {
            isNewsFetching.value = true;
            fetch(`https://newsapi.org/v1/articles?source=${sourceName.value}&apiKey=${process.env.NEWS_API_KEY}`)
            .then(res => res.json())
            .then(data => {
                isNewsFetching.value = false;
                if(data.status == 'error') {
                    newsError.value = "Something went wrong. Try again later.";
                    return;
                }
                newsCollection.value = data.articles;
            })
            .catch(err => {
                console.log(err)
                isNewsFetching.value = false;
                newsError.value = "Something went wrong. Try again later.";
            })
        }

        return {
            sourceName,
            sourceUpdated,
            sourcesList,
            newsCollection,
            isSourceFetching,
            isNewsFetching,
            newsError,
            sourceError
        }
    }
}

</script>

<style scoped>
</style>
