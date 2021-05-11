<template>
  <b-row>
    <LeftPanel />
    <ChatRoom />
  </b-row>
</template>

<script>
import LeftPanel from '@/components/LeftPanel.vue'
import ChatRoom from '@/components/ChatRoom.vue'

export default {
  name: 'Home',
  components: {
    LeftPanel,
    ChatRoom
  }
}
</script>
