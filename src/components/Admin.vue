<template>
  <div class="admin">

    <div>
      <v-layout row wrap>
        <v-flex xs6>
    <v-btn @click="dialog=true" flat fab>
      <v-icon>file_upload</v-icon>
    </v-btn>Upload Doc
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
    name: 'admin',
    props: ['auth', 'authenticated'],
    data () {
      return {
        db_connect: '',
        docObj: '',
        docUrl: '',
        dialog: false,
        d1: false
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
a {
  cursor: pointer;
}
</style>
