<template>
  <font-awesome-icon :icon="icon" :class="classNames" :size="sizeStr" />
</template>

<script>
export default {
  props: {
    icon: String || Array,
    classNames: String,
    sizeStr: {
      type: String,
      validator: (val) =>
        ["xs", "sm", "lg", "2x", "3x", "5x", "7x", "10x"].includes(val),
    },
  },
};
</script>