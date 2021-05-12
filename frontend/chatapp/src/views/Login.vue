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
    <b-row class="my-3" >
      <b-alert variant="warning" :show="alert.length != 0">
        {{ alert }}
      </b-alert>
    </b-row>
    <b-row class="my-3">
        <b-col sm="1">
          <b-button variant="primary"  type="submit">
            Login
          </b-button>
        </b-col>
    </b-row>
    </b-container>
  </form>
</template>
<script>
import axios from 'axios'

export default {
  name: "Login",
  data(){
    return {
      username: "",
      password: "",
      alert: ""
    }
  },
  methods: {
    login() {
      const loginCredentials = {username: this.username,
        password: this.password}

      if (this.password.length < 8){
        this.alert = "Password must have at least 8 characters long"
      }
      else {
        console.log("loggin in")
        axios.post('/api/v1/frontend/login', loginCredentials)
         .then(resp=>{
           this.$store.commit('setUsername', resp.data.username)
           this.$store.commit('setCsrftoken', this.$cookies.get('csrftoken'))
           this.$router.push('/')
         })
        .catch((error)=>{
          console.log(error.response.status)
          console.log(error.response)

          this.alert = "Invalid credentials. Password must be 8 characters long"
         })
      }

      this.username = ""
      this.password = ""
    }

  }
}
</script>
