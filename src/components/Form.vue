<template>
  <div class="w-full">
    <form>
      <input type="text" placeholder="name" class="w-full border p-2 mb-2"/>
      <textarea type="text" placeholder="message" rows="4" class="w-full border p-2 mb-1"/>
      <div class="flex gap-2 mb-4">
        <input v-if="field === 'comment'" type="submit" value="Comment" class="rounded px-2 py-1 text-white bg-blue-500">
        <input v-else type="submit" value="Reply" class="rounded px-2 py-1 text-white bg-blue-500">
        <input type="reset" value="Cancel" class="rounded px-2 py-1 text-white bg-gray-500">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  props: ['field']
}
</script>

<style>

</style>
