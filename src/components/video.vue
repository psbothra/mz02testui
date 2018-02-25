<template>
  <div>
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

  <v-btn @click=callupload() class="fixed-floating-button white--text" fab absolute fixed
  style="background-color:#35495E">
     <v-icon>add</v-icon>
   </v-btn>

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
        d1: false,
        video_redirect: ''
      }
    },
    methods: {
      ...mapMutations([
      ]),
      callupload () {
        axios.get(`https://mz02test.herokuapp.com/uploadvideo`, {
          params: {
            url: this.$route.params.item
          }
        })
          .then(response => {
            console.log(response.data)
            this.video_redirect = response.data
            this.d1 = true
            // var res = str.replace(/255370320/g, "210")
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
