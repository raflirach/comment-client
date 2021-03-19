<template>
  <div class="w-full">
    <div class="border-t flex flex-col items-start">
      <div class="pt-4 flex w-full">
        <div class="mr-2 cols-1 flex-none">
          <img src="https://practicalpython.yasoob.me/images/avatars/sample.jpg" alt="" class="w-14 h-14">
        </div>
        <div class="flex flex-col items-start flex-grow">
          <div class="flex gap-2 items-center">
            <div class="font-bold">{{ comment.name }}</div>
            <div class="text-sm text-blue-500">{{ comment.createdAt }}</div>
          </div>
          <div class="text-left">{{ comment.message }}</div>
          <button class="text-blue-500 mb-2 mt-2" @click="changeIsReply">Reply</button>
          <!-- replies -->
          <Reply v-for="(reply, i) in comment.replies" :key="i" :comment="reply" />
          <Form v-if="isReply === comment._id" :id="comment._id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from './Form.vue'
import Reply from './Reply.vue'
export default {
  components: { Reply, Form },
  name: 'Comment',
  props: ['comment'],
  computed: {
    isReply () {
      return this.$store.state.isReply
    }
  },
  methods: {
    changeIsReply () {
      this.$store.commit('changeIsReply', this.comment._id)
    },
    cancel () {
      this.$emit('cancel')
    }
  }
}
</script>

<style>

</style>
