<template>
  <div class="w-full">
    <div class="border-t flex flex-col items-start">
      <div class="pt-4 flex">
        <div class="mr-2 cols-1 flex-none">
          <img src="https://practicalpython.yasoob.me/images/avatars/sample.jpg" alt="" class="w-14 h-14">
        </div>
        <div class="flex flex-col items-start">
          <div class="flex gap-2 items-center">
            <div class="font-bold">{{ comment.name }}</div>
            <div class="text-sm text-blue-500">{{ comment.createdAt }}</div>
          </div>
          <div class="text-left">{{ comment.message }}</div>
          <button class="text-blue-500 mb-2 mt-2">Reply</button>
          <!-- replies -->
          <reply v-for="(reply, i) in comment.replies" :key="i" :comment="reply" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Reply from './Reply.vue'
export default {
  components: { Reply },
  name: 'Comment',
  props: ['comment']
}
</script>

<style>

</style>
