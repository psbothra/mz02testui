<template>
  <div>

    <loader v-if="loader"></loader>
    <div v-else>
    <v-layout>
      <v-expansion-panel class="expansion-panel-remove-shadow" inset>
        <v-expansion-panel-content hide-actions  v-for="(slide,k) in coursedata" :key="k" >
          <div slot="header">
            <div>
              <v-layout>
                <v-flex>
                  <v-card-title primary-title>
                    <div>
                      <h3 class="headline mb-0">{{slide.name}}</h3>
                    </div>
                  </v-card-title>
                </v-flex>
              </v-layout>
              <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn @click="goTo('/video/' + slide.name)" fab small flat>
                  <v-icon>edit</v-icon>
                </v-btn>
              </v-card-actions>
            </div>
          </div>

          <v-card>
            <v-card-text class="grey lighten-3">
              <v-layout>
                <v-flex>
                  <div class="pa-5">{{slide.desc}}</div>
                </v-flex>
                <v-flex>
                  <a :href='slide.docUrl' target="_blank">Click to view document</a>
                </v-flex>
              </v-layout>
            </v-card-text>
          </v-card>

        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-layout >

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
    </v-dialog>

    <v-btn @click="dialog=true" class="fixed-floating-button white--text" fab absolute fixed
    style="background-color:#35495E">
       <v-icon>add</v-icon>
     </v-btn>
     </div>
     <div style="visibility: hidden"> {{update_f1}} {{patchUpdateDom}}</div>
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
      }
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
    },
    created () {
      this.$store.commit('getdata')
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
