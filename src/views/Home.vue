<template>
  <div class="home-container">
    <div class="home-content">
      <Form :field="'comment'"/>
      <Comment
        v-for="comment in comments"
        :key="comment.id"
        :comment="comment"
      />
    </div>
  </div>
</template>

<script>
import Comment from '../components/Comment.vue'
import Form from '../components/Form.vue'
// @ is an alias to /src

export default {
  components: { Comment, Form },
  name: 'Home',
  methods: {
    fetchComment () {
      this.$store.dispatch('fetchComment')
    }
  },
  computed: {
    comments () {
      return this.$store.state.comments
    }
  },
  created () {
    this.fetchComment()
  }
}
</script>
