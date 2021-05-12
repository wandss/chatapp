<template>
  <form @submit.prevent="login">
    <b-container fluid>
      <b-row class="my-2">
        <b-col sm="3">
          <b-form-input type="text" required placeholder="username" v-model="username"></b-form-input>
        </b-col>
    </b-row>
    <b-row>
        <b-col sm="3">
          <b-form-input type="password" required placeholder="password" v-model=password></b-form-input>
        </b-col>
    </b-row>
    <b-row class="my-3">
        <b-col sm="1">
          <b-button variant="primary"  type="submit">
            Login
          </b-button>
        </b-col>
    </b-row>
    </b-container>
    <b-row class="my-3">
      <b-progress variant="warning" :show="$store.state.loginMessage != null" 
        :max="6" :value="6" height="4px">
        {{$store.state.loginMessage}}
      </b-progress>
    </b-row>
  </form>
</template>
<script>
export default {
  name: "Login",
  data(){
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', {username: this.username,
        password: this.password})
      this.username = ""
      this.password = ""
      this.$router.push('/')
      this.$store.commit('setCsrftoken', this.$cookies.get('csrftoken'))
    }

  }
}
</script>
