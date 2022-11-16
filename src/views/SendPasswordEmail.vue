<template>
  <base-dialog>
    <div class="flex flex-col items-center pt-[40px]">
      <img
        src="@/assets/images/Vectorsend.png"
        alt="arrow image"
        class="pb-[20px]"
      />
      <h1 class="text-white text-[32px] pb-[31px]">Check your email</h1>
      <p class="text-white text-center pb-[40px]">
        We have sent a password recover instructions
        <br />
        to your email
      </p>
      <button
        @click="this.$router.replace('/')"
        class="w-full rounded-[4px] py-[7px] px-[13px] text-center text-white bg-[#E31221] mt-[8px]"
      >
        Go to my email
      </button>
      <button
        @click="this.$router.replace('/')"
        class="text-[#6C757D] text-center mr-[4px] pt-[32px]"
      >
        Skip, I’ll confirm later
      </button>
    </div>
  </base-dialog>
</template>
