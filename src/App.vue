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
    </footer>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style lang="sass" scoped>

</style>
