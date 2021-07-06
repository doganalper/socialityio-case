<template>
  <div class="min-h-screen flex flex-col w-1/6 bg-navbarLight">
    <div class="w-full text-center text-3xl py-2 bg-navbarDark text-gray-900">
      <span class="font-extrabold">Sociality</span>.io
    </div>
    <div class="flex">
      <UserIconsContainer />
      <Tabs />
    </div>
  </div>
</template>

<script>
import UserIconsContainer from "@/components/Navbar/UserIconsContainer";
import Tabs from "@/components/Navbar/Tabs";

export default {
  name: "Navbar",
  components: {
    UserIconsContainer,
    Tabs,
  },
  setup() {},
};
</script>