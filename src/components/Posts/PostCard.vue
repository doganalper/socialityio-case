<template>
  <div class="flex border border-gray-400 rounded-md w-96">
    <div
      class="h-full w-10 flex items-center justify-center"
      :class="renderStatusColor()"
    >
      <Icon :icon="renderPostChannelIcon()" classNames="text-white" size="lg" />
    </div>
    <div class="flex flex-col p-4 w-full">
      <!-- Top -->
      <div class="flex items-center justify-between">
        <span class="text-gray-400">
          {{ parsePostDate(postInfo["created_at"]) }}
        </span>
        <div class="flex items-center gap-x-2">
          <Icon
            icon="ban"
            classNames="text-gray-400 cursor-pointer"
            sizeStr="sm"
          />
          <Icon
            icon="trash-alt"
            classNames="text-gray-400 cursor-pointer"
            sizeStr="sm"
          />
          <Icon
            icon="ellipsis-h"
            classNames="text-gray-400 cursor-pointer"
            sizeStr="sm"
          />
        </div>
      </div>

      <!-- Content -->
      <div class="flex flex-col mt-2">
        <span class="text-gray-700 text-sm mb-2">{{
          postInfo.entry.message
        }}</span>
        <img :src="imgSrc" @error="conlog" class="h-72" />
      </div>

      <!-- Bottom -->
      <div class="flex items-center w-1/2 justify-between mt-2">
        <Icon
          icon="thumbs-up"
          classNames="text-gray-400 cursor-pointer"
          sizeStr="sm"
        />
        <Icon
          icon="comment-alt"
          classNames="text-gray-400 cursor-pointer"
          sizeStr="sm"
        />
        <Icon
          icon="share-alt"
          classNames="text-gray-400 cursor-pointer"
          sizeStr="sm"
        />
        <Icon
          icon="eye"
          classNames="text-gray-400 cursor-pointer"
          sizeStr="sm"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { parseMonthName } from "@/utils/helpers.js";
import Icon from "@/components/ui/Icon";
import { ref } from "@vue/reactivity";

export default {
  components: {
    Icon,
  },
  props: {
    postInfo: Object,
  },
  setup(props) {
    const parsePostDate = (dateStr) => {
      const [date, hour] = dateStr.split(" ");
      const parsedDate = parseMonthName(date);
      const parsedHour = hour
        .split(":")
        .filter((str) => hour.split(":").pop() !== str)
        .join(":");
      return `${parsedDate} - ${parsedHour}`;
    };

    console.log(props.postInfo.account.channel);
    const imgSrc = ref(props.postInfo.entry.image[0]);
    const conlog = () => {
      imgSrc.value = "./no-post-image.png";
    };

    // 0 for Need Approval, 1 for Scheduled, 2 for Publishing, 3 for Published, 4 for Error
    const renderStatusColor = () => {
      let color;
      switch (props.postInfo.status) {
        case 0:
          color = "bg-approval";
          break;
        case 1:
          color = "bg-scheduled";
          break;
        case 2:
        case 3:
          color = "bg-published";
          break;
        case 4:
          color = "bg-error";
          break;
        default:
          break;
      }

      return color;
    };

    const renderPostChannelIcon = () => {
      const channelStr = props.postInfo.account.channel;
      const iconArr = ["fab"];
      if (channelStr.includes("twitter")) iconArr.push("twitter");
      if (channelStr.includes("instagram")) iconArr.push("instagram");
      if (channelStr.includes("facebook")) iconArr.push("facebook-f");

      return iconArr;
    };

    return {
      parsePostDate,
      conlog,
      imgSrc,
      renderStatusColor,
      renderPostChannelIcon,
    };
  },
};
</script>

<style>
</style>