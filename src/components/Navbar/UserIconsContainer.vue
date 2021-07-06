<template>
  <div
    class="
      flex flex-col
      items-center
      p-2
      gap-y-3
      bg-navbarDark
      w-1/6
      min-h-screen
    "
  >
    <UserIcon v-for="icon in 5" :key="icon" />
  </div>
</template>

<script>
import UserIcon from "@/components/Navbar/UserIcon";

export default {
  name: "UserIconsContainer",
  components: {
    UserIcon,
  },
  setup() {},
};
</script>