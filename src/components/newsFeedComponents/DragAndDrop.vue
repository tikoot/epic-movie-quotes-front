<template>
  <div
    @dragenter.prevent="toggleActive"
    @dragleave.prevent="toggleActive"
    @dragover.prevent
    @drop.prevent="toggleActive"
    :class="{ 'active-dropzone': active }"
    class="flex items-center w-full h-[84px] text-[#fff] text-[20px]"
  >
    <img
      src="@/assets/images/photoIcon.png"
      alt="camera icon"
      class="pl-[18px]"
    />
    <span class="pl-[11px] pr-[8px]">Drag & drop your image here or</span>
    <label for="dropzoneFile" class="bg-[#9747FF] p-[10px]">Choose file</label>
    <input type="file" id="dropzoneFile" class="hidden dropzoneFile" />
    <span class="pl-[8px]">{{ thumbnail }}</span>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "DropZone",
  props: ["thumbnail"],
  setup() {
    const active = ref(false);
    const toggleActive = () => {
      active.value = !active.value;
    };
    return { active, toggleActive };
  },
};
</script>

<style scoped>
.active-dropzone {
  color: #fff;
  border-color: #fff;
  background-color: #6c757d;
}
.active-dropzone label {
  background-color: #fff;
  color: #6c757d;
}
</style>
