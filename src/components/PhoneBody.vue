<template>
  <div class="phone-body">
    <div class="feed">
      <vuegram-post v-for="post in posts"
        :post="post"
        :key="posts.indexOf(post)">
      </vuegram-post>
    </div>
  </div>
</template>

<script>
import VuegramPost from '@/components/VuegramPost'
export default {
  name: 'PhoneBody',
  props: {
    posts: Array,
    filters: Array
  },
  components: {
    VuegramPost
  }
}
</script>

<style lang="scss" src="../styles/phone-body.scss">
// Styles from stylesheet
</style>
