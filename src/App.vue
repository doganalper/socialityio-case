<template>
  <div class="flex min-h-screen">
    <Navbar />
    <PostsContainer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar.vue";
import PostsContainer from "@/components/Posts/PostsContainer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    PostsContainer,
  },
  setup() {},
};
</script>