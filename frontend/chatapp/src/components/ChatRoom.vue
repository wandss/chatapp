<template>
  <b-col>
    <h3 v-if="(getMessages.length === 0) && ($store.state.room !=null)">
      Welcome. Theres no messages on this room yet!!!
    </h3>
      <div v-for="item in getMessages" :key="item.id">
        <ChatMessage :text="item.message" :from="item.username"
        :variant="$store.state.username == item.username?'dark':'primary'"
        :timestamp="item.sent"
        />
      </div>
    <b-form-input v-model="chatInput" v-if="$store.state.room != null"
      @keyup.enter="testSend" >
    </b-form-input>
  </b-col>
</template>
<script>
import {mapGetters} from 'vuex'
import ChatMessage from '@/components/ChatMessage.vue'

export default {
  name: 'ChatRoom',
  components: {
    ChatMessage
  },
  data() {
    return {
      chatInput: ''
    }
  },
  methods: {
    testSend(){
      const message = {
        "message": this.chatInput,
        "username": this.$store.state.username,
        "id": '',
        "sent": '',
      }
      this.$store.commit('sendMessage', message)
      this.chatInput = ''
    }
  },
  computed: {
    ...mapGetters([
      'getMessages'
    ])
  }
}
</script>
<style>
.chatArea {
  position:absolute;
  height: 80%;
  width: 60%;
  border: 1px dashed black;
  margin: 1em 0 0 0;
}
.chatInput {
  position: absolute;
  bottom: 0;
  max-width: 60%;
  margin-bottom: 2%;
}
</style>
