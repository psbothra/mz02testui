<template>
  <div>
    <loader v-if="loader"></loader>
    <div v-else class= "pb-5 pt-5" align="center">
      <h1> This is for demo purpose<br><br>
      </h1>
      <h4>
        The admin panel here contain the features to upload the documents and the videos.<br>
        The login button authenticates the user with the API auth0.<br> And there you have access to the documents and the videos.<br>
        The training data is fetched from the database mongodb.
    </h4>
<div>
</br></br>
  <h1> Blog Section(Blogger)</h1>
  </br></br>
    <v-layout>
      <v-expansion-panel class="expansion-panel-remove-shadow" inset>
        <v-expansion-panel-content hide-actions  v-for="(slide,k) in blog" :key="k" >
          <div slot="header">
            <div>
              <v-layout>
                <v-flex>
                  <v-card-title primary-title>
                    <div>
                      <div class="headline mb-0">{{slide.title}}</div>
                      <div>{{slide.content}} </div>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
            </div>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-layout>
</div>
<div id="disqus_thread"></div>
<script>

// Change blog3 to the blog ID dynamically to load different threads
var disqusConfig = function () {
  this.page.url = 'http://mz02test-herokuapp/blog1'
  // Replace PAGE_URL with your page's canonical URL variable
  this.page.identifier = 'blog1'
  // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};

(function () { // DON'T EDIT BELOW THIS LINE
  var d = document
  var s = d.createElement('script')
  s.src = 'https://mz02test-herokuapp.disqus.com/embed.js'
  s.setAttribute('data-timestamp', +new Date());
  (d.head || d.body).appendChild(s)
})()
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
  </div>
</div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import loader from '@/components/gen/loader'

export default {

    data () {
      return {}
    },
    components: {
      loader
    },
    computed: {
      ...mapGetters([
        'loader',
        'blog'
      ])
    },
    created () {
      this.$store.commit('getblog')
    }
}
</script>
<style scoped>
a {
  cursor: pointer;
}
</style>
