<template>
  <div>
    <div v-if="authenticated">
    <loader v-if="loader"></loader>
    <div v-else>
      <div align="right" class= "pb-5">
        <h4>
          <pre>
            <h4> Hi {{getname ()}} </h4>
            <h4> {{getemailid ()}} </h4>
          </pre>
        </h4>
        <h4 v-if="!authenticated">
          You are not logged in! Please Log In to continue.
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
                        <div @click="goTo('/ViewTrainingDataUser/' + slide.name)" class="headline mb-0">{{slide.name}}</div>
                        <v-btn flat @click="createpayment(slide.amount, slide.name)">
                          Paypal
                        </v-btn>
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
<div v-else>
  Unauthorised Access
</div>
  </div>
</template>

<script>
  import {mapMutations, mapGetters} from 'vuex'
  import jwtdecode from 'jwt-decode'
  import loader from '@/components/gen/loader'
  import axios from 'axios'
  import {ServerUrl} from '../variables/config'

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
      getname () {
        const idToken = localStorage.getItem('id_token')
        const decoded = jwtdecode(idToken)
        return decoded.nickname
      },
      getemailid () {
        const idToken = localStorage.getItem('id_token')
        const decoded = jwtdecode(idToken)
        return decoded.email
      },
      createpayment (x, y) {
        let url = ServerUrl.url
        let deployUrl = url + 'paypalpayment'
        axios.get(deployUrl, {
          params: {
            amount: x,
            name: y
          }
        })
          .then(function (response) {
            console.log(response.data)
            window.location.href = response.data
          })
          .catch(function (error) {
            console.log(error)
          })
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
