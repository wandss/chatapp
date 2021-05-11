<template>
  <b-col cols="2">
    <b-list-group>
      <b-list-group-item active >Chat Rooms</b-list-group-item>
      <b-alert :show="$store.state.rooms.length===0" variant="info" >
       <h5>Well... let's create a room first!</h5>
       All room names must NOT have space or special characters!
       <p></p>
       <p>
       To create a room, enter the room name below and hit enter or press the save button
       </p>
      </b-alert>

    </b-list-group>
    <b-list-group>
      <b-list-group-item button
        v-for="room in this.$store.state.rooms"
        :key="room.id"
        @click="joinRoom(room.name)">
        {{ room.name }}
      </b-list-group-item>
      <b-form-input placeholder="Create a room" v-show="showAddRoom"
        class="addRoom" @keyup.enter="createRoom"
        v-model="newRoomName"
       >
      </b-form-input>
    </b-list-group>
  </b-col>
</template>
<script>
export default {
  name: "LeftPanel",
  data(){
    return {
      showAddRoom: true,
      newRoomName: '',
    }
  },
  methods:{
    joinRoom(room){
      this.$store.commit('setRoomName', room)
      this.$store.dispatch('connectToRoom', room.toLowerCase())
    },
    createRoom(){
      const data = {'name': this.newRoomName}
      this.$store.dispatch('createRoom', data)
      this.newRoomName = ''
    }

  },
}
</script>
<style>
.addRoom{
  margin-top: 1em;
}
</style>
