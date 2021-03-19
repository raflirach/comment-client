<template>
  <div class="w-full">
    <input
      type="text"
      v-model="name"
      placeholder="name"
      class="w-full border p-2 mb-2"/>
    <textarea
      type="text"
      v-model="message"
      placeholder="message"
      rows="4"
      class="w-full border p-2 mb-1"/>
    <div class="flex gap-2 mb-4">
      <button
        v-if="field === 'comment'"
        class="rounded px-2 py-1 text-white bg-blue-500"
        @click="addComment"
      >
        Comment
      </button>
      <button
        v-else
        class="rounded px-2 py-1 text-white bg-blue-500"
        @click="addReply"
      >
        Reply
      </button>
      <button
        class="rounded px-2 py-1 text-white bg-gray-500"
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
  }
}
</script>

<style>

</style>
