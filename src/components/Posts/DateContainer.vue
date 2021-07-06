<template>
  <div class="flex flex-col w-full mt-5">
    <span class="text-gray-400 text-2xl mb-2">{{ parseDate(date) }}</span>
    <div class="flex gap-x-5 w-full">
      <PostCard :postInfo="post" v-for="(post, idx) in posts" :key="idx" />
    </div>
  </div>
</template>

<script>
import PostCard from "@/components/Posts/PostCard";
import { parseMonthName } from "@/utils/helpers.js";

export default {
  components: {
    PostCard,
  },
  props: {
    date: String,
    posts: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const parseDate = (date) => {
      const dateArr = parseMonthName(date);

      return dateArr;
    };

    return {
      parseDate,
    };
  },
};
</script>

<style>
</style>