<template>
  <div
    class="locale-changer flex items-center justify-between relative mr-[40px]"
  >
    <select
      v-model="$i18n.locale"
      @change="onChange($event)"
      class="text-[16px] text-[#fff] bg-transparent border-none flex justify-between items-center appearance-none pr-[20px]"
    >
      <option
        v-for="locale in $i18n.availableLocales"
        :key="`locale-${locale}`"
        :value="locale"
        class="text-[16px] text-[#fff] bg-[#11101a] border-none flex justify-between items-center"
      >
        <p v-if="locale == 'ka'">Ka</p>
        <p v-else>Eng</p>
      </option>
    </select>
    <img
      src="@/assets/images/Vector.png"
      alt="arrow down"
      class="pl-[10px] pt-[2.5px] absolute right-0"
    />
  </div>
</template>

<script setup>
import { setLocale } from "@vee-validate/i18n";

function onChange(event) {
  if (event.target.value == "ka") {
    setLocale("ka");
  } else {
    setLocale("en");
  }
}
</script>
