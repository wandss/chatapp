<template>
<b-container fluid class="bv-example-row">
  <Navbar />
      <!--
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      -->
      <router-view/>
</b-container>
</template>
<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'APP',
  components: {
    Navbar
  },
  mounted() {
    this.$store.dispatch('fetchRooms')
    this.$store.commit('setCsrftoken', this.$cookies.get('csrftoken'))
  }
}
</script>
