<template>
  <div class="w-full">
    <textarea
      type="text"
      v-model="message"
      :id="field !== 'comment' ? 'message' : ''"
      placeholder="message"
      rows="4"
      class="input"/>
    <input
      type="text"
      v-model="name"
      placeholder="name"
      class="input"/>
    <div class="flex gap-2 mb-4 mt-1">
      <button
        v-if="field === 'comment'"
        class="btn-blue"
        @click="addComment"
      >
        Comment
      </button>
      <button
        v-else
        class="btn-blue"
        @click="addReply"
      >
        Reply
      </button>
      <button
        class="btn-gray"
        @click="cancel"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Form',
  props: ['field', 'id'],
  data () {
    return {
      name: '',
      message: ''
    }
  },
  methods: {
    addComment () {
      const { name, message } = this
      const payload = { name, message }
      this.$store.dispatch('addComment', payload)
      this.name = ''
      this.message = ''
    },
    addReply () {
      const { id, name, message } = this
      const payload = { id, name, message }
      this.$store.dispatch('addReply', payload)
      this.name = ''
      this.message = ''
      this.$store.commit('changeIsReply', '')
    },
    cancel () {
      this.$store.commit('changeIsReply', '')
    }
  },
  computed: {
    replyName () {
      return this.$store.state.replyName
    }
  },
  created () {
    if (this.replyName) this.message += `@${this.replyName} `
  }
}
</script>

<style>

</style>
