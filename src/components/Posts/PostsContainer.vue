<template>
  <div class="p-5 flex flex-col w-full">
    <Colors />
    <DateContainer
      :date="date"
      :posts="posts"
      v-for="(posts, date) in dates"
      :key="date"
    />
  </div>
</template>

<script>
import Colors from "@/components/Posts/Colors";
import Data from "@/assets/data.json";
import { ref } from "@vue/runtime-core";
import DateContainer from "@/components/Posts/DateContainer";

export default {
  components: {
    Colors,
    DateContainer,
  },
  setup() {
    const dates = ref(Data.posts_by_date);

    return {
      dates,
    };
  },
};
</script>

<style>
</style>