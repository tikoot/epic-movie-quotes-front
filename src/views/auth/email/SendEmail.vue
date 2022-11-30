<template>
  <base-dialog>
    <div class="flex flex-col items-center pt-[40px]">
      <img
        src="@/assets/images/Vectorsend.png"
        alt="arrow image"
        class="pb-[20px]"
      />
      <h1 class="text-white text-[32px] pb-[31px]">
        {{ $t("auth.thank_you") }}
      </h1>
      <p class="text-white text-center pb-[40px]">
        {{ $t("auth.please_check_your_email_and_follow_the_instructions_to") }}
        <br />
        {{ $t("auth.activate_your_account") }}
      </p>
      <button
        @click="this.$router.replace('/')"
        class="w-full rounded-[4px] py-[7px] px-[13px] text-center text-white bg-[#E31221] mt-[8px]"
      >
        {{ $t("auth.go_to_my_email") }}
      </button>
    </div>
  </base-dialog>
</template>
