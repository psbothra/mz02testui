<template>
  <div>
    <loader v-if="loader"></loader>
    <div v-else>
    <div align="center">
      <br>
      To add new training course click the button
    <v-btn @click="goTo('/AddData')" class="fixed-floating-button white--text" fab absolute small
    style="background-color:#35495E">
       <v-icon>add</v-icon>
     </v-btn>
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
                  <v-card>
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
       <div style="visibility: hidden"> {{patchUpdateDom}}</div>
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
        key: ''
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
        'coursedata'
      ])
    },
    watch: {
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
