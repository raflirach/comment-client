<template>
  <div class="reply-container">
    <div class="comment-row">
      <div class="comment-cols-1">
        <img
          src="https://practicalpython.yasoob.me/images/avatars/sample.jpg"
          alt="avatar"
          class="w-10 h-10"
        >
      </div>
      <div class="comment-cols-2">
        <div class="name-container">
          <div class="font-bold">{{ comment.name }}</div>
          <div class="text-sm text-blue-500">{{ time }}</div>
        </div>
        <div class="text-left">{{ comment.message }}</div>
        <button class="btn-trans-blue" @click="changeIsReply">Reply</button>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'Reply',
  props: ['comment', 'id'],
  methods: {
    async changeIsReply () {
      await this.$store.commit('changeIsReply', '')
      await this.$store.commit('changeReplyName', this.comment.name)
      await this.$store.commit('changeIsReply', this.id)
      document.getElementById('message').focus()
    }
  },
  computed: {
    time () {
      return moment(this.comment.createdAt).fromNow()
    }
  }
}
</script>

<style>

</style>
