<template>
  <div class="hello">
    <div align="right" class= "pb-5">
      <h4 v-if="authenticated">
        You are logged in!
    </h4>
    <h4 v-if="!authenticated">
      You are not logged in! Please <a @click="auth.login()">Log In</a> to continue.
    </h4>
    <v-btn @click="calldb()">Database</v-btn>
    <div v-if="db_connect != ''">{{db_connect}}</div>
    </div>
    <div>
    </v-flex>

   <v-flex xs6>
   <iframe :src="dummy" scrolling="no" style = "overflow: hidden; width:400px; height:300px">
   </iframe>
 </v-flex>

      <v-flex xs6>
   <iframe :src=value
   width="400" height="300" frameborder="0" title="Untitled" webkitallowfullscreen mozallowfullscreen allowfullscreen>
   </iframe>
 </v-flex>
  </div>


  </div>
</template>

<script>
  import axios from 'axios'
  import {mapMutations, mapGetters} from 'vuex'

export default {
    name: 'user',
    props: ['auth', 'authenticated'],
    data () {
      return {
        db_connect: '',
        dummy: 'https://firebasestorage.googleapis.com/v0/b/mindzcloud-ce294.appspot.com/o/Documents%2F5ef0952e-d87d-4e95-b713-adbeed50209d?alt=media&token=57083856-b3e8-4c01-b06a-77ce89d8b9d3#toolbar=0&navpanes=0',
        docObj: '',
        docUrl: '',
        video_redirect: 'https://1512435765.cloud.vimeo.com/upload?ticket_id=133409619&video_file_id=935916915&signature=b8ccecce78a3c327ac66544fbbd85f27&v6=1&redirect_url=https%3A%2F%2Fvimeo.com%2Fupload%2Fapi%3Fvideo_file_id%3D935916915%26app_id%3D120630%26ticket_id%3D133409619%26signature%3D7845d4c7f406eb3527404e7a3bb418b511377332%26redirect%3Dhttp%253A%252F%252F127.0.0.1%253A8080',
        dialog: false,
        d1: false,
        value: 'https://player.vimeo.com/video/255934170?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0'
      }
    },
    methods: {
      ...mapMutations([
      ]),

      calllogin () {
        axios.get(`http://127.0.0.1:5000/login`)
          .then(response => {
            console.log(response)
          })
          .catch(e => {
            console.log(e)
          })
      },
      calllogout () {
        axios.get(`http://127.0.0.1:5000/logout`)
          .then(response => {
            console.log(response.data)
          })
          .catch(e => {
            console.log(e)
          })
      },
      calldb () {
        axios.get(`https://mz02testui.herokuapp.com/connection`)
          .then(response => {
            console.log(response.data)
            this.db_connect = response.data
          })
          .catch(e => {
            console.log(e)
          })
      }
    },
    components: {

    },
    computed: {
      ...mapGetters([

      ])
    },
    watch: {

    }
}
</script>
<style scoped>
a {
  cursor: pointer;
}
</style>
