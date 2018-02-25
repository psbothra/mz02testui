<template>
  <div>

    <v-layout>
      <v-expansion-panel class="expansion-panel-remove-shadow" inset>
        <v-expansion-panel-content hide-actions  v-for="(slide,k) in coursedata" >
          <div slot="header">
            <div>
              <v-layout>
                <v-flex>
                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">{{slide.name}}</h3>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider></v-divider>
            </div>
          </div>

          <v-card>
            <v-card-text class="grey lighten-3">
              <v-layout>
                <v-flex>
                  <div class="pa-5">{{slide.desc}}</div>
                </v-flex>
                <v-flex>
                  <a :href='slide.docUrl' target="_blank">Click to view document</a>
                </v-flex>
                <v-flex>
                  <iframe :src='slide.videoUrl'
                  width="400" height="300" frameborder="0" title="Untitled" webkitallowfullscreen mozallowfullscreen allowfullscreen>
                  </iframe>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>

        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-layout >

  </div>
</template>

<script>
  import {mapMutations, mapGetters} from 'vuex'
  import btnLoader from '@/components/gen/btnLoader'

export default {
    props: ['auth', 'authenticated'],
    data () {
      return {
      }
    },
    methods: {
      ...mapMutations([
      ])
    },
    components: {
      btnLoader
    },
    computed: {
      ...mapGetters([
        'btnLoader',
        'patchUpdateDom',
        'coursedata'
      ])
    },
    watch: {
    },
    created () {
      this.$store.commit('insertdata', {name: this.$route.params.item, videoUrl: this.$route.query.video_uri})
    }
}
</script>

<style scoped>
  a {
    cursor: pointer;
  }
  label{
    padding: 10px;
    background: grey;
    display: table;
    color: #fff;
    border-radius: 100%;
  }
  input[type="file"] {
    display: none;
  }
</style>
