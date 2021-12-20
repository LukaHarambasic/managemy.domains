<template>
  <div class="view">
    <h2>Login</h2>
    <form>
      <input v-model="email" type="email" />
      <input v-model="password" type="password" />
      <input type="submit" value="Login" @click.prevent="login" />
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { auth } from '@/assets/js/firebase'

export default {
  name: 'ViewLogin',
  data () {
    return {
      email: 'test-lh@test.com',
      password: 'hallo1234'
    }
  },
  methods: {
    ...mapActions({
      setUser: 'setUser'
    }),
    async login () {
      const user = await auth.signInWithEmailAndPassword(
        this.email,
        this.password
      )
      await this.setUser(user)
    }
  }
}
</script>

<style lang="sass" scoped></style>
