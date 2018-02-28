<template>
  <div>
    <div v-if="authenticated">
    <br>
    <h2 align="center">
    Course Detail
  </h2>
    <loader v-if="loader"></loader>
    <div v-else align="center">
      <div align="center" class="border border-dark" v-for="(slide,k) in coursedata" :key="k">
        <br>
        <div style="font-weight:bold, font-size: 12px">
            <v-card-title primary-title>
              <h2>Name of the course:-        </h2>
              <div>
                <div class="headline mb-0">{{slide.name}}</div>
              </div>
            </v-card-title>
        </div>
        <br>
        <div style="font-size: 12px">

            <v-card-title primary-title>
              <h2>Course Description:-          </h2>
              <div>
                <div class="headline mb-0">{{slide.desc}}</div>
              </div>
            </v-card-title>
        </div>
        <br>
          <h2>Course material:-</h2>
            <iframe :src=slide.docUrl scrolling="no" style = "overflow: hidden; width:400px; height:300px">
            </iframe>
          <br>
          <h2>Course video:-</h2>
            <iframe :src=slide.vimeoId
              width="400" height="300" frameborder="0" title="Untitled" webkitallowfullscreen mozallowfullscreen allowfullscreen>
            </iframe>
      </div>
  </div>

 </div>
 <div v-else>
   Unauthorised Access
 </div>
  </div>
</template>

<script>
  import {mapMutations, mapGetters} from 'vuex'
  import btnLoader from '@/components/gen/btnLoader'
  import loader from '@/components/gen/loader'

export default {
    props: ['auth', 'authenticated'],
    data () {
      return {
        d1: false,
        d2: false,
        d3: false,
        d4: false,
        name: '',
        desc: '',
        docObj: '',
        docUrl: '',
        videoUrl: '',
        f1: false,
        key: '',
        value: 'https://player.vimeo.com/video/257497540?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0'
      }
    },
    methods: {
      ...mapMutations([
        'updatename',
        'updatedesc',
        'updatedocUrl',
        'updatevideoUrl'
      ])
    },
    components: {
      btnLoader,
      loader
    },
    computed: {
      ...mapGetters([
        'btnLoader',
        'patchUpdateDom',
        'loader',
        'coursedata'
      ])
    },
    watch: {

    },
    created () {
      this.$store.commit('gettrainingdata', this.$route.params.item)
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
