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
import { auth } from '@/assets/js/firebase'

export default {
  name: 'ViewLogin',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login () {
      const user = await auth.signInWithEmailAndPassword(
        this.email,
        this.password
      )
      console.log(user)
    }
  }
}
</script>

<style lang="sass" scoped></style>
