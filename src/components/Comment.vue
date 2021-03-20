<template>
  <div class="w-full">
    <div class="comment-container">
      <div class="comment-row">
        <div class="comment-cols-1">
          <img
            src="https://practicalpython.yasoob.me/images/avatars/sample.jpg"
            alt="avatar"
            class="w-14 h-14"
          >
        </div>
        <div class="comment-cols-2">
          <div class="name-container">
            <div class="font-bold">{{ comment.name }}</div>
            <div class="text-sm text-blue-500">{{ time }}</div>
          </div>
          <div class="text-left">{{ comment.message }}</div>
          <button
            class="btn-trans-blue"
            @click="changeIsReply"
          >
            Reply
          </button>
          <!-- replies -->
          <Reply
            v-for="(reply, i) in comment.replies"
            :key="i"
            :comment="reply"
            :id="comment._id"
          />
          <Form
            v-if="isReply === comment._id"
            :id="comment._id"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from './Form.vue'
import Reply from './Reply.vue'
import moment from 'moment'

export default {
  components: { Reply, Form },
  name: 'Comment',
  props: ['comment'],
  computed: {
    isReply () {
      return this.$store.state.isReply
    },
    time () {
      return moment(this.comment.createdAt).fromNow()
    }
  },
  methods: {
    async changeIsReply () {
      await this.$store.commit('changeIsReply', '')
      await this.$store.commit('changeReplyName', '')
      await this.$store.commit('changeIsReply', this.comment._id)
      document.getElementById('message').focus()
    },
    cancel () {
      this.$emit('cancel')
    }
  }
}
</script>

<style>

</style>
