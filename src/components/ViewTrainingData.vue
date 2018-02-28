<template>
  <div>
    <div v-if="authenticated">
    <br>
    <h2 align="center">
    Course Detail
  </h2>
  <br>
    <loader v-if="loader"></loader>
    <div v-else align="center">
      <div align="center" class="border border-dark" v-for="(slide,k) in coursedata" :key="k">
        <table style="width:95%; border: 1px solid black;
        border-collapse: collapse">
          <tr>
            <th class="headline" style="border: 1px solid black;
            border-collapse: collapse;">Name of the course</th>
            <th class="title" style="border: 1px solid black;
            border-collapse: collapse">{{slide.name}}</th>
            <th style="border: 1px solid black;
            border-collapse: collapse"><v-btn flat @click="callupdatename(slide.name)" style="background-color:#35495E">
             <v-icon>edit</v-icon>
           </v-btn></th>
          </tr>
          <tr>
            <th class="headline" style="border: 1px solid black;
            border-collapse: collapse">Course Description</th>
            <th class="title" style="border: 1px solid black;
            border-collapse: collapse">{{slide.desc}}</th>
            <th style="border: 1px solid black;
            border-collapse: collapse"><v-btn flat @click="callupdatedesc(slide.name, slide.desc)" style="background-color:#35495E">
             <v-icon>edit</v-icon>
           </v-btn></th>
          </tr>
          <tr>
            <th class="headline" style="border: 1px solid black;
            border-collapse: collapse">Course material</th>
            <th class="title" style="border: 1px solid black;
            border-collapse: collapse"><iframe :src=slide.docUrl scrolling="no" style = "overflow: hidden; width:400px; height:300px">
            </iframe></th>
            <th style="border: 1px solid black;
            border-collapse: collapse"><v-btn flat @click="callupdatedocUrl(slide.name, slide.docurl)" style="background-color:#35495E">
               <v-icon>edit</v-icon>
            </v-btn></th>
          </tr>
          <tr>
            <th class="headline" style="border: 1px solid black;
            border-collapse: collapse">Course video</th>
            <th class="title" style="border: 1px solid black;
            border-collapse: collapse"><iframe :src=slide.vimeoId
              width="400" height="300" frameborder="0" title="Untitled" webkitallowfullscreen mozallowfullscreen allowfullscreen>
            </iframe></th>
            <th style="border: 1px solid black;
            border-collapse: collapse"><v-btn flat @click="callupdatevideoUrl(slide.name, slide.vimeoId)" style="background-color:#35495E">
               <v-icon>edit</v-icon>
             </v-btn></th>
          </tr>
        </table>
      </div>

    <v-dialog v-model="d1" maxWidth="600">
      <v-card class="pa-4" style="background-color: #F0F0F0">
        <v-text-field
            label="Name of course"
            v-model="name">
          </v-text-field>
        <btnLoader v-if="btnLoader"></btnLoader>
        <v-btn flat v-else @click="updatename({name: name, key: key})">
          Update Name
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
          Update Description
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
          Update Document
        </v-btn>
      </v-card>
    </v-dialog>

    <v-dialog v-model="d4" maxWidth="600">
      <v-card class="pa-4" style="background-color: #F0F0F0">
        <v-text-field
          label="Vimeo ID"
          v-model="vimeoId">
        </v-text-field>
        <btnLoader v-if="btnLoader"></btnLoader>
        <v-btn flat v-else @click="updatevideoUrl({vimeoId: vimeoId, key: key})">
          Update Vimeo Id
        </v-btn>
      </v-card>
    </v-dialog>

   <div style="visibility: hidden"> {{update_f1}} {{update_f2}} {{update_f3}} {{update_f4}}</div>
 </div>
 <div v-else>
   Unauthorised Access
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
        d1: false,
        d2: false,
        d3: false,
        d4: false,
        name: '',
        desc: '',
        docObj: '',
        docUrl: '',
        vimeoId: '',
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
        this.vimeoId = y
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
          this.vimeoId = ''
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
