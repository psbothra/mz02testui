<template>
  <div>


    <v-dialog v-model="dialog" maxWidth="400">
      <v-card class="pa-4" >
        <v-text-field
          label="Name of course"
          v-model="course_name">
        </v-text-field>

        <v-text-field
          label="Short Description"
          v-model="course_description"
          multi-line>
        </v-text-field>

        <v-card-actions>
          <label id="#bb1" style="margin-left: 17px;">
            <v-icon class="white--text">
              file_upload
            </v-icon>
            <input type="file" name="doc" accept="*"  @change="uploaddoc($event)" id="uploaddoc">
          </label>
          <span class="caption">Upload Document</span>
        </v-card-actions>

        <v-card-actions>
          <v-spacer></v-spacer>
            <v-btn flat @click="uploaddata({name: course_name,
              description: course_description,
              docObj: docObj,
              docUrl: docUrl})">
              Add
            </v-btn>
        </v-card-actions>

      </v-card>
    </v-dialog>

    <v-btn @click="dialog=true" class="fixed-floating-button white--text" fab absolute fixed
    style="background-color:#35495E">
       <v-icon>add</v-icon>
     </v-btn>

  </div>
</template>

<script>
  import {mapMutations, mapGetters} from 'vuex'

export default {
    props: ['auth', 'authenticated'],
    data () {
      return {
        db_connect: '',
        docObj: '',
        docUrl: '',
        dialog: false,
        course_name: '',
        course_description: ''
      }
    },
    methods: {
      ...mapMutations([
        'uploaddata'
      ]),
      uploaddoc (event) {
        this.docObj = event.target.files[0]
        this.docUrl = URL.createObjectURL(event.target.files[0])
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
