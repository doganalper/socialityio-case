<template>
  <div class="flex gap-x-5">
    <div
      class="flex items-center gap-x-2"
      v-for="color in colors"
      :key="color.text"
    >
      <Icon icon="circle" sizeStr="xs" :classNames="color.color" />
      <span class="text-gray-600">
        {{ color.text }}
      </span>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/ui/Icon";
import { ref } from "@vue/reactivity";

export default {
  components: {
    Icon,
  },
  setup() {
    const colors = ref([
      {
        text: "Published",
        color: "text-published",
      },
      {
        text: "Scheduled",
        color: "text-scheduled",
      },
      {
        text: "Need Approval",
        color: "text-approval",
      },
      {
        text: "Error",
        color: "text-error",
      },
      {
        text: "Notes",
        color: "text-notes",
      },
    ]);

    return { colors };
  },
};
</script>

<style>
</style>