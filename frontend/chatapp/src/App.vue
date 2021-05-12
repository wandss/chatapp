<template>
  <div>
    <b-container fluid class="bv-example-row">
    <Navbar />
        <router-view />
    </b-container>
  </div>
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
    if (this.$store.state.csrftoken === null){
      this.$router.push('/login')
    }
  }
}
</script>
