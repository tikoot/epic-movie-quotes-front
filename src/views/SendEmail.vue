<template>
  <base-dialog>
    <div class="flex flex-col items-center pt-[40px]">
      <img
        src="@/assets/images/Vectorsend.png"
        alt="arrow image"
        class="pb-[20px]"
      />
      <h1 class="text-white text-[32px] pb-[31px]">Thank you!</h1>
      <p class="text-white text-center pb-[40px]">
        Please check your email and follow the instructions to
        <br />
        activate your account.
      </p>
      <button
        @click="$router.back()"
        class="w-full rounded-[4px] py-[7px] px-[13px] text-center text-white bg-[#E31221] mt-[8px]"
      >
        Go to my email
      </button>
    </div>
  </base-dialog>
</template>
