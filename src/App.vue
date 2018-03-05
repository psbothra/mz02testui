<template>
  <div id="app">
    <header>
      <div align="right">

        <button
            class="btn btn-primary btn-margin"
            @click="Home(authenticated)">
              Home
          </button>

      <button
          class="btn btn-primary btn-margin"
          v-if="!authenticated"
          @click="login()">
            Log In
        </button>

        <button
          class="btn btn-primary btn-margin"
          v-if="authenticated"
          @click="logout()">
            Log Out
        </button>
      </div>
    </header>
    <main>
      <router-view
      :auth="auth"
        :authenticated="authenticated">
      </router-view>
    </main>
  </div>
</template>

<script>
import AuthService from './auth/AuthService'
import jwtdecode from 'jwt-decode'

const auth = new AuthService()

const { login, logout, authenticated, authNotifier } = auth

export default {
  name: 'app',
  data () {
    authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
    })
    return {
      auth,
      authenticated
    }
  },
  methods: {
    login,
    logout,
    Home (x) {
      let isLogin = x
      if (isLogin) {
        let idToken = localStorage.getItem('id_token')
        let decoded = jwtdecode(idToken)
        let isadmin = decoded['http://mz02testis_admin']
        if (isadmin) {
          this.$store.commit('goTo', '/Admin')
        } else {
          this.$store.commit('goTo', '/User')
        }
      } else {
        this.$router.push('Home')
      }
    }
  }
}
</script>
