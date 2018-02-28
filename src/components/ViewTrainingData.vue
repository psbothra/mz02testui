<template>
  <div>

    <loader v-if="loader"></loader>
    <div v-else>
      <div align="center" v-for="(slide,k) in coursedata" :key="k">
        <br>
        <div style="font-weight:bold, font-size: 12px">{{slide.name}}</div>
        <br>
        <div style="font-size: 12px">{{slide.desc}}</div>
        <br>
        <iframe :src=slide.docUrl scrolling="no" style = "overflow: hidden; width:400px; height:300px">
        <br>
        <iframe :src=value
        width="400" height="300" frameborder="0" title="Untitled" webkitallowfullscreen mozallowfullscreen allowfullscreen>
        </iframe>
      </div>
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
        value: 'https://player.vimeo.com/video/257497540?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0'
      }
    },
    methods: {
      ...mapMutations([
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
