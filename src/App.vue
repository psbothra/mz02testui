<template>
  <div id="app">
    <header>
      <div align="right">


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
    admin () {
      this.$router.push('Admin')
    }
  }
}
</script>
