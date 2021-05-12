<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">Chat App @Jobsity</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
    <b-navbar-nav>
    </b-navbar-nav>
    <!-- Right aligned nav items -->
    <b-button @click="logout">
      Logout
    </b-button>
    <b-navbar-nav class="ml-auto">
</b-navbar-nav>
  </b-collapse>
  </b-navbar>

</template>
<script>
export default {
  name: "Navbar",
  methods: {
    logout(){
      this.$cookies.remove('csrftoken')
      this.$store.commit('setCsrftoken', null)
      this.$store.commit('setUsername', '')
      this.$router.push('/login')
    }
  }
}

</script>
