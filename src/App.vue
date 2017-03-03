<template>
  <div class="container" id="app">
       <div class="alert alert-info alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        This is a simple news application using VueJs with external newsapi.org's api. Here you can load all the news from various popular news sources.
      </div>
      <div class="row">
        <div class="col-md-8">
          <div v-if="ads">
            <p>Hello</p>
          </div>
          <Newslist v-bind:source="source"></Newslist>
        </div>
        <div class="col-md-4 pull-right">
          <SourceSelection v-on:sourceChanged="sourceChanged"></SourceSelection>
        </div>
      </div>

      <div class="footer">
      <p class="credits">&copy <a href="http://niyazahamed.wordpress.com" target="_blank">More Tech. Updates</a> | <a href="https://www.youtube.com/channel/UC-NdJA98MuWwJF1a0YJCAeg" target="_blank">Channel</a> | Credits : Seeschweiler </p>
    </div>
  </div>
</template>

<script>
import Newslist from './components/Newslist'
import SourceSelection from './components/SourceSelection'

export default {
  name: 'app',
  components: {
    Newslist,
    SourceSelection
  },
  data () {
    return {
      source: "",
      ads: true
    }
  },
  methods: {
    sourceChanged: function (source) {
      this.source = source;
    }
  },
}
</script>

<style>
#app {
  padding-top: 20px;
}
.credits{font-size: 11px; color: #ccc;}
</style>
