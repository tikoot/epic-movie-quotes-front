<template>
  <base-dialog>
    <div class="flex flex-col items-center pt-[40px]">
      <img
        src="@/assets/images/Vectorcheck.png"
        alt="arrow image"
        class="pb-[20px]"
      />
      <h1 class="text-white text-[32px] pb-[31px]">{{ $t("auth.success") }}</h1>
      <p class="text-white text-center pb-[40px]">
        {{ $t("auth.your_password_changed_successfully") }}
      </p>
      <button
        class="w-full rounded-[4px] py-[7px] px-[13px] text-center text-white bg-[#E31221] mt-[8px]"
      >
        {{ $t("auth.go_to_my_news_feed") }}
      </button>
    </div>
  </base-dialog>
</template>
