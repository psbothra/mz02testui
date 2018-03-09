<template>
  <div>
    <div class= "pb-5 pt-5" align="center">
      <h1> This is for demo purpose<br><br>
      </h1>
      <h4>
        The admin panel here contain the features to upload the documents and the videos.<br>
        The login button authenticates the user with the API auth0.<br> And there you have access to the documents and the videos.<br>
        The training data is fetched from the database mongodb.
    </h4>
<div>
  <loader v-if="loader"></loader>
  <h1> Blog Section<br><br>
    <v-layout>
      <v-expansion-panel class="expansion-panel-remove-shadow" inset>
        <v-expansion-panel-content hide-actions  v-for="(slide,k) in blog" :key="k" >
          <div>test</div>
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
