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
          <v-expansion-panel-content hide-actions  v-for="(slide,k) in purchasedcourse" :key="k" >
            <div slot="header">
              <div>
                <v-layout>
                  <v-flex>
                    <v-card-title primary-title>
                      <div>
                        <div class="headline mb-0">{{slide.paymentId}}</div>
                        <div class="mb-0">{{slide.name}}</div>
                        <div class="mb-0">{{slide.emailId}}
                        </div>
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
      }
    },
    components: {
      loader
    },
    computed: {
      ...mapGetters([
        'loader',
        'purchasedcourse'
      ])
    },
    watch: {

    },
    created () {
      this.$store.commit('getorders')
    }
}
</script>
<style scoped>
a {
  cursor: pointer;
}
</style>
