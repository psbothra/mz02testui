<template>
  <div class="hello">
    <div align="right" class= "pb-5">
    <v-btn @click="calllogin()">Login</v-btn>
    <v-btn @click="calllogout()">Logout</v-btn>
    <v-btn @click="calldb()">Database</v-btn>
    <div v-if="db_connect != ''">{{db_connect}}</div>
    </div>
    <div>
      <v-layout row wrap>
        <v-flex xs6>
    <v-btn @click="dialog=true" flat fab>
      <v-icon>file_upload</v-icon>
    </v-btn>Upload Doc
  </v-flex>

    <v-flex xs6>
    <iframe :src="dummy" scrolling="no" style = "overflow: hidden; width:400px; height:300px">
    </iframe>
  </v-flex>
</v-layout>

    <v-dialog v-model="dialog" maxWidth="600">
      <v-card class="pa-4" style="background-color: #0000">
        <v-card flat v-show=" docUrl != '' ">
          <a :href="docUrl" target="_blank">Click to view file
          </a>
        </v-card>

        <v-card-actions>

          <label id="#bb1" style="margin-left: 17px;">
            <v-icon class="white--text">
              file_upload
            </v-icon>
            <input type="file" name="doc" accept="*" @change="uploaddoc($event)" id="uploaddoc">
          </label>

        </v-card-actions>

        <btnLoader v-if="btnLoader"></btnLoader>
        <v-btn flat v-else @click="uploaddocument(docObj, docUrl)">
          Add
        </v-btn>

      </v-card>
    </v-dialog>
  </div>

  <div>
      <v-layout row wrap>
        <v-flex xs6>
      <v-btn @click="callupload()" flat fab>
        <v-icon>file_upload</v-icon>
      </v-btn>Upload Video
    </v-flex>
    <v-flex xs6>
    <iframe :src=value
    width="400" height="300" frameborder="0" title="Untitled" webkitallowfullscreen mozallowfullscreen allowfullscreen>
    </iframe>
  </v-flex>
</v-layout>
  </div>
  <v-dialog v-model="d1" style="width:600; height:200">
    <form method="POST"
    :action=video_redirect
    enctype="multipart/form-data">
      <label for="file" style="margin-left: 17px;">
      <input type="file" name="file_data" id="file">
      <br>
      </label>
      <input type="submit" name="submit" value="Submit">
    </form>
  </v-dialog>
  </div>
</template>

<script>
  import axios from 'axios'
  import {mapMutations, mapGetters} from 'vuex'

export default {
    name: 'hello',
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
      uploaddoc (event) {
        console.log(event.target.files[0].mozFullPath)
        this.docObj = event.target.files[0]
        this.docUrl = URL.createObjectURL(event.target.files[0])
      },
      callupload () {
        axios.get(`https://mz02testui.herokuapp.com/uploadvideo`)
          .then(response => {
            console.log(response.data)
            this.video_redirect = response.data
            this.d1 = true
            // var res = str.replace(/255370320/g, "210")
          })
          .catch(e => {
            console.log(e)
          })
      },
      calllogin () {
        axios.get(`https://mz02testui.herokuapp.com/login`)
          .then(response => {
            console.log(response)
          })
          .catch(e => {
            console.log(e)
          })
      },
      calllogout () {
        axios.get(`https://mz02testui.herokuapp.com/logout`)
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
      },
      uploaddocument (x, y) {
        axios.get(`https://mz02testui.herokuapp.com/uploaddoc`, {
          params: {
            docObj: x,
            docUrl: y
          }
        })
          .then(response => {
            console.log(response.data)
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

</style>
