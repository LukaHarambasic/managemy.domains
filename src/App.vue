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
      <button type="submit" @click.prevent="logout" >Logout</button>
    </footer>
  </div>
</template>

<script>
import { auth } from '@/assets/js/firebase'
import { mapActions } from 'vuex'

export default {
  mounted() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log('User is logged in!!!')
      } else {
        console.log('User is logged out.')
      }
    })
  },
  methods: {
    ...mapActions({
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
