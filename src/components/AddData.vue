<template>
  <div>
    <v-card class="pa-4" flat>
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
     <div style="visibility: hidden"> {{update_f1}} {{patchUpdateDom}}</div>
  </div>
</template>

<script>
  import {mapMutations, mapGetters} from 'vuex'
  import btnLoader from '@/components/gen/btnLoader'

export default {
    props: ['auth', 'authenticated'],
    data () {
      return {
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
