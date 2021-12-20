<template>
  <div class="container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item is-size-4 has-text-weight-bold" href="/">
          ManageMy.Domains
        </a>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
        </div>
        <div class="navbar-end">
          <div v-if="user" class="navbar-item">
            <router-link class="button is-primary" to="/overview">Overview</router-link>
          </div>
          <div v-else class="navbar-item">
            <router-link class="button is-primary" to="/login">Login</router-link>
          </div>
        </div>
      </div>
    </nav>
    <main>
      <router-view />
    </main>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          ManageMy.Domains
        </p>
        <p>
          <button v-if="user" class="button is-small" type="submit" @click.prevent="logout">Logout</button>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import { auth } from '@/assets/js/firebase'
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      user: 'user',
    })
  },
  mounted() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setUser(user)
      } else {
        this.removeUser()
      }
    })
  },
  methods: {
    ...mapActions({
      setUser: 'setUser',
      removeUser: 'removeUser'
    }),
    async logout() {
      await auth.signOut()
      await this.removeUser()
    }
  }
}
</script>

<style lang="sass" scoped>
nav
  margin: 0 0 4rem 0
main
  margin: 0 0 4rem 0
</style>
