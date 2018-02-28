<template>
  <div>

    <loader v-if="loader"></loader>
    <div v-else>
      <div align="center" v-for="(slide,k) in coursedata" :key="k">
        <br>
        <div style="font-weight:bold, font-size: 12px">
          <v-layout row wrap align-center justify-center>
          <v-flex xs6>
            <v-card-title primary-title>
              <div>
                <div class="headline mb-0">{{slide.name}}</div>
              </div>
            </v-card-title>
          </v-flex>
          <v-flex xs6>
          <v-btn @click="callupdatename(slide.name)" class="fixed-floating-button white--text" fab absolute small
          style="background-color:#35495E">
             <v-icon>edit</v-icon>
           </v-btn>
         </v-flex>
       </v-layout>
        </div>
        <br>
        <div style="font-size: 12px">
          <v-layout row wrap align-center justify-center>
          <v-flex xs6>
            <v-card-title primary-title>
              <div>
                <div class="sub-heading mb-0">{{slide.desc}}</div>
              </div>
            </v-card-title>
          </v-flex>
          <v-flex xs6>
          <v-btn @click="callupdatedesc(slide.name, slide.desc)" class="fixed-floating-button white--text" fab absolute small
          style="background-color:#35495E">
             <v-icon>edit</v-icon>
           </v-btn>
          </v-flex>
          </v-layout>
        </div>
        <br>
        <v-layout row wrap justify-center align-center>
          <v-flex xs6>
            <iframe :src=slide.docUrl scrolling="no" style = "overflow: hidden; width:400px; height:300px">
            </iframe>
            <br>
            <v-btn @click="callupdatedocUrl(slide.name, slide.docurl)" class="fixed-floating-button white--text" fab absolute small
            style="background-color:#35495E">
               <v-icon>edit</v-icon>
            </v-btn>
          </v-flex>
          <v-flex xs6>
            <iframe :src=value
              width="400" height="300" frameborder="0" title="Untitled" webkitallowfullscreen mozallowfullscreen allowfullscreen>
            </iframe>
            <v-btn @click="callupdatevideoUrl(slide.name, slide.videoUrl)" class="fixed-floating-button white--text" fab absolute small
            style="background-color:#35495E">
               <v-icon>edit</v-icon>
             </v-btn>
          </v-flex>
        </v-layout>
      </div>
  </div>

    <v-dialog v-model="d1" maxWidth="600">
      <v-card class="pa-4" style="background-color: #F0F0F0">
        <v-text-field
            label="Name of course"
            v-model="name">
          </v-text-field>
        <btnLoader v-if="btnLoader"></btnLoader>
        <v-btn flat v-else @click="updatename({name: name, key: key})">
          Update
        </v-btn>
      </v-card>
    </v-dialog>

    <v-dialog v-model="d2" maxWidth="600">
      <v-card class="pa-4" style="background-color: #F0F0F0">
        <v-text-field
          label="Short Description"
          v-model="desc"
          multi-line>
        </v-text-field>
        <btnLoader v-if="btnLoader"></btnLoader>
        <v-btn flat v-else @click="updatedesc({desc: desc, key: key})">
          Update
        </v-btn>
      </v-card>
    </v-dialog>

    <v-dialog v-model="d3" maxWidth="600">
      <v-card class="pa-4" style="background-color: #F0F0F0">
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
        <btnLoader v-if="btnLoader"></btnLoader>
        <v-btn flat v-else @click="updatedocUrl({docObj: docObj, docUrl: docUrl, key: key})">
          Update
        </v-btn>
      </v-card>
    </v-dialog>

   <div style="visibility: hidden"> {{update_f1}} {{update_f2}} {{update_f3}} {{update_f4}}</div>

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
        f2: false,
        f3: false,
        f4: false,
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
      ]),
      uploaddoc (event) {
        this.docObj = event.target.files[0]
        this.docUrl = URL.createObjectURL(event.target.files[0])
      },
      callupdatename (x) {
        this.name = x
        this.key = x
        this.d1 = true
      },
      callupdatedesc (x, y) {
        this.desc = y
        this.key = x
        this.d2 = true
      },
      callupdatedocUrl (x, y) {
        this.docUrl = y
        this.key = x
        this.d3 = true
      },
      callupdatevideoUrl (x, y) {
        this.videoUrl = y
        this.key = x
        this.d4 = true
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
      },
      update_f2 () {
        this.f2 = this.$store.state.gen.f1
        return this.f2
      },
      update_f3 () {
        this.f3 = this.$store.state.gen.f1
        return this.f3
      },
      update_f4 () {
        this.f4 = this.$store.state.gen.f1
        return this.f4
      }
    },
    watch: {
      f1: function () {
        if (this.f1) {
          this.name = ''
          this.d1 = false
        }
      },
      f2: function () {
        if (this.f2) {
          this.desc = ''
          this.d2 = false
        }
      },
      f3: function () {
        if (this.f3) {
          this.docUrl = ''
          this.docObj = ''
          this.d3 = false
        }
      },
      f4: function () {
        if (this.f4) {
          this.videoUrl = ''
          this.d4 = false
        }
      }
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
