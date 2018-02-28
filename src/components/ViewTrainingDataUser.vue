<template>
  <div>
    <div v-if="authenticated">
    <br>
    <h2 align="center">
    Course Detail
  </h2>
  <br>
    <loader v-if="loader"></loader>
    <div v-else align="center">
      <div align="center" class="border border-dark" v-for="(slide,k) in coursedata" :key="k">
        <table style="width:95%; border: 1px solid black;
        border-collapse: collapse">
          <tr>
            <th class="headline" style="border: 1px solid black;
            border-collapse: collapse">Name of the course</th>
            <th class="title" style="border: 1px solid black;
            border-collapse: collapse">{{slide.name}}</th>
          </tr>
          <tr>
            <th class="headline" style="border: 1px solid black;
            border-collapse: collapse;">Course Description</th>
            <th class="title" style="border: 1px solid black;
            border-collapse: collapse">{{slide.desc}}</th>
          </tr>
          <tr>
            <th class="headline" style="border: 1px solid black;
            border-collapse: collapse">Course material</th>
            <th class="title" style="border: 1px solid black;
            border-collapse: collapse"><iframe :src=slide.docUrl scrolling="no" style = "overflow: hidden; width:400px; height:300px">
            </iframe></th>
          </tr>
          <tr>
            <th class="headline" style="border: 1px solid black;
            border-collapse: collapse">Course video</th>
            <th class="title" style="border: 1px solid black;
            border-collapse: collapse"><iframe :src=slide.vimeoId
              width="400" height="300" frameborder="0" title="Untitled" webkitallowfullscreen mozallowfullscreen allowfullscreen>
            </iframe></th>
          </tr>
        </table>
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
