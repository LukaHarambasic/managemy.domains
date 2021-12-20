<template>
  <div class="container">
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/overview">Overview</router-link></li>
        <li><router-link to="/login">Login</router-link></li>
      </ul>
    </nav>
    <main>
      <router-view />
    </main>
    <footer>
      ManageMy.Domains
      <button v-if="user" type="submit" @click.prevent="logout">Logout</button>
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

</style>
