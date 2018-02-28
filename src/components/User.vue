<template>
  <div>
    <loader v-if="loader"></loader>
    <div v-else>
      <div align="right" class= "pb-5">
        <h4 v-if="authenticated">
          You are logged in!
          <pre>
            <h4> Hi {{getname ()}} </h4>
            <h4> {{getemailid ()}} </h4>
          </pre>
        </h4>
        <h4 v-if="!authenticated">
          You are not logged in! Please <a @click="auth.login()">Log In</a> to continue.
        </h4>
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
              </div>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-layout>
  </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import {mapMutations, mapGetters} from 'vuex'
  import jwtdecode from 'jwt-decode'
  import loader from '@/components/gen/loader'

export default {
    name: 'user',
    props: ['auth', 'authenticated'],
    data () {
      return {
      }
    },
    methods: {
      ...mapMutations([
        'goTo'
      ]),

      calllogin () {
        axios.get(`http://127.0.0.1:5000/login`)
          .then(response => {
            console.log(response)
          })
          .catch(e => {
            console.log(e)
          })
      },
      calllogout () {
        axios.get(`http://127.0.0.1:5000/logout`)
          .then(response => {
            console.log(response.data)
          })
          .catch(e => {
            console.log(e)
          })
      },
      getname () {
        const idToken = localStorage.getItem('id_token')
        const decoded = jwtdecode(idToken)
        console.log(decoded.nickname)
        return decoded.nickname
      },
      getemailid () {
        const idToken = localStorage.getItem('id_token')
        const decoded = jwtdecode(idToken)
        console.log(decoded)
        return decoded.email
      }
    },
    components: {
      loader
    },
    computed: {
      ...mapGetters([
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
</style>
