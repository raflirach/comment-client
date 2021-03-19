<template>
  <div class="flex flex-col items-start">
    <div class="pt-4 flex">
      <div class="mr-2 cols-1 flex-none">
        <img src="https://practicalpython.yasoob.me/images/avatars/sample.jpg" alt="" class="w-10 h-10">
      </div>
      <div class="flex flex-col items-start">
        <div class="flex gap-2 items-center">
          <div class="font-bold">{{ comment.name }}</div>
          <div class="text-sm text-blue-500">{{ comment.createdAt }}</div>
        </div>
        <div class="text-left">{{ comment.message }}</div>
        <button class="text-blue-500 mb-2 mt-2">Reply</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reply',
  props: ['comment']
}
</script>

<style>

</style>
