<template>
  <div>

    <v-layout>
      <v-expansion-panel class="expansion-panel-remove-shadow" inset>
        <v-expansion-panel-content hide-actions  v-for="(slide,k) in coursedata" :key="k" >
          <div slot="header">
            <h4 v-if="authenticated">
              Hello Admin
              <h4> Hi {{getname ()}} </h4>
              <h4> {{getemailid ()}} </h4>
          </h4>

          </div>


        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-layout >


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

        <v-card v-show=" docUrl != '' " class="text-xs-center" flat>
          <a :href= 'docUrl' target="_blank">Click here to view document </a>
        </v-card>

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
            <btnLoader v-if="btnLoader"></btnLoader>
            <v-btn v-else flat @click="uploaddata({name: course_name,
              description: course_description,
              docObj: docObj,
              docUrl: docUrl})">
              Add
            </v-btn>
        </v-card-actions>

      </v-card>


     <div style="visibility: hidden"> {{update_f1}}</div>

  </div>
</template>

<script>
  import {mapMutations, mapGetters} from 'vuex'
  import btnLoader from '@/components/gen/btnLoader'
  import jwtdecode from 'jwt-decode'

export default {
    props: ['auth', 'authenticated'],
    data () {
      return {
        db_connect: '',
        docObj: '',
        docUrl: '',
        dialog: false,
        course_name: '',
        course_description: '',
        f1: false
      }
    },
    methods: {
      ...mapMutations([
        'uploaddata',
        'goTo'
      ]),
      uploaddoc (event) {
        this.docObj = event.target.files[0]
        this.docUrl = URL.createObjectURL(event.target.files[0])
      },
      getname () {
        const idToken = localStorage.getItem('id_token')
        const decoded = jwtdecode(idToken)
        return decoded.nickname
      },
      getemailid () {
        const idToken = localStorage.getItem('id_token')
        const decoded = jwtdecode(idToken)
        console.log(decoded['http://mz02testis_admin'])
        return decoded.email
      }
    },
    components: {
      btnLoader
    },
    computed: {
      ...mapGetters([
        'btnLoader',
        'patchUpdateDom',
        'coursedata'
      ]),
      update_f1 () {
        this.f1 = this.$store.state.gen.f1
        return this.f1
      }
    },
    watch: {
      f1: function () {
        if (this.f1) {
          this.course_name = ''
          this.course_description = ''
          this.docObj = ''
          this.docUrl = ''
          document.getElementById('uploaddoc').value = ''
          this.dialog = false
        }
      }
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
