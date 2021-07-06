<template>
  <div class="flex flex-col gap-y-1 w-5/6 pt-2">
    <div v-for="tab in tabs" :key="tab.text" class="flex flex-col w-full">
      <div
        class="flex items-center justify-between py-2 px-4"
        :class="openId === tab.id ? 'bg-customRed' : 'bg-navbarLight'"
      >
        <div class="flex items-center gap-x-2">
          <Icon
            :icon="tab.icon"
            :classNames="openId === tab.id ? 'text-white' : 'text-customRed'"
          />
          <span class="text-white"> {{ tab.text.toUpperCase() }} </span>
        </div>
        <div>
          <Icon
            :icon="openId === tab.id ? 'minus' : 'plus'"
            classNames="opacity-40 cursor-pointer"
            v-if="tab.text !== 'notifications'"
            @click="openTab(tab.id)"
          />
          <div
            v-else
            class="text-white border border-green-400 text-sm px-2 rounded-md"
          >
            29
          </div>
        </div>
      </div>
      <div v-if="openId === tab.id" class="py-1 px-2">
        <div
          v-for="altTab in altTabs"
          :key="altTab"
          class="flex items-center p-1"
          :class="altTab === 'Feed' ? 'text-customRed' : 'text-white'"
        >
          <Icon icon="circle" classNames="mr-3" sizeStr="xs" />
          <span>
            {{ altTab }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import Icon from "@/components/ui/Icon";

export default {
  components: {
    Icon,
  },
  setup() {
    const tabs = reactive([
      {
        text: "notifications",
        icon: "bell",
      },
      {
        text: "summary",
        icon: "chart-line",
        id: 0,
      },
      {
        text: "publish",
        icon: "edit",
        id: 1,
      },
      {
        text: "engage",
        icon: "comments",
        id: 2,
      },
      {
        text: "listen",
        icon: "assistive-listening-systems",
        id: 3,
      },
      {
        text: "report",
        icon: "chart-bar",
        id: 4,
      },
    ]);
    const altTabs = reactive(["Compose", "Feed"]);

    const openId = ref(1);
    const openTab = (tabId) => {
      openId.value = tabId;
    };

    return {
      tabs,
      altTabs,
      openId,
      openTab,
    };
  },
};
</script>