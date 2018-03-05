<template>
  <div>
    <div v-if="authenticated && isAdmin">
    <loader v-if="loader"></loader>
    <div v-else>
    <div align="center">
      <br>
      <h3>To add new training course click the button below
      <v-btn flat @click="goTo('/AddData')" style="background-color:#294069">
        Add Course
      </v-btn>
    </h3>
      <br>
      <h2 align="center">
      Available Courses
    </h2>
   </div>
  </div>
  <v-layout>
    <v-expansion-panel class="expansion-panel-remove-shadow" inset>
      <v-expansion-panel-content hide-actions  v-for="(slide,k) in coursedata" :key="k" >
        <div slot="header">
          <div>
            <v-layout>
              <v-flex>
                <v-card-title primary-title>
                  <div>
                    <div @click="goTo('/ViewTrainingData/' + slide.name)" class="headline mb-0">{{slide.name}}</div>
                  </div>
                </v-card-title>
              </v-flex>
            </v-layout>
            <v-divider></v-divider>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn flat fab small @click="dialog=true, name=slide.name, key=k" color="red">
                  <v-icon>delete</v-icon></v-btn>
                <v-dialog v-model="dialog" persistent max-width="290">
                  <v-card style="background-color: #f0f0f0">
                    <v-card-title class="headline">Are you sure you want to delete?</v-card-title>
                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="green darken-1" flat @click.native="deldata({name: name, key: key}),
                      dialog=false">Yes</v-btn>
                      <v-btn color="green darken-1" flat @click.native="dialog = false">No</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-card-actions>
          </div>
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-layout>
  </div>
  <div v-else>
    Unauthorised Access
  </div>
     <div style="visibility: hidden">{{patchUpdateDom}}</div>
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
        dialog: false,
        name: '',
        key: '',
        is_admin: false
      }
    },
    methods: {
      ...mapMutations([
        'goTo',
        'deldata'
      ])
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
        'coursedata',
        'isAdmin'
      ])
    },
    watch: {
    },
    created () {
      this.$store.commit('getdata')
      // this.$store.commit('getisadmin', this.$route.params.name)
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
