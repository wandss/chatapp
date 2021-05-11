<template>
<div>
  <b-alert :variant="variant" show
  >
  <h5>
    <b>{{ from }} </b>
    <i>{{ timestamp.split('.')[0] }}</i>
  </h5>
  <p>
    {{ text }}
  </p>
  </b-alert>
</div>
</template>
<script>
export default {
  name: 'ChatMessage',
  props: {
    variant: {
      type: String,
      default: "dark"
    },
    text: {
      type: String,
      default: ''
    },
    from: {
      type: String,
      default: ''
    },
    timestamp: {
      type: String,
      default: ''
    }
  }
}
</script>
<style>
i{
 font-size: 0.8rem;
}
</style>
