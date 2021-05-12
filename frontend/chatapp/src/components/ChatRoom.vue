<template>
<b-col>
    <h3 v-if="(getMessages.length === 0) && ($store.state.room !=null)">
      Welcome. Theres no messages on this room yet!!!
    </h3>
    <div class="chatArea">
      <div v-for="item in getMessages" :key="item.id">
        <ChatMessage :text="item.message" :from="item.username"
        :variant="$store.state.username == item.username?'dark':'primary'"
        :timestamp="item.sent"
        />
      </div>
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
  height: 650px;
  overflow-y: auto;
}
</style>
