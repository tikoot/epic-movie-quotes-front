<template>
  <page-base-component activeList>
    <section class="pl-[127px] w-full overflow-auto min-h-[100vh]">
      <h1 class="text-2xl text-[#fff]">
        {{ $t("userPage.movie_description") }}
      </h1>
      <div
        v-for="movie in store.movie_description"
        :key="movie.id"
        class="pt-[30px] flex"
      >
        <div>
          <img
            class="rounded-[12px] w-[809px] h-[481px] pr-[33px]"
            :src="storeCommon.backUrl + 'storage/' + movie.thumbnail"
          />
        </div>
        <div>
          <div class="flex w-[590px] justify-between">
            <div>
              <div v-if="storeCommon.locale == 'en'" class="pb-[24px]">
                <h1 class="text-[#DDCCAA] text-[24px]">
                  {{ movie.movie_name.en }} ({{ movie.year }})
                </h1>
              </div>
              <div v-else class="pb-[24px]">
                <h1 class="text-[#DDCCAA] text-[24px]">
                  {{ movie.movie_name.ka }} ({{ movie.year }})
                </h1>
              </div>
            </div>
            <crud-buttons></crud-buttons>
          </div>
          <div class="flex">
            <div
              v-for="category in JSON.parse(movie.category)"
              :key="category"
              class="pb-[20px] flex"
            >
              <p
                class="rounded-[4px] mr-[8px] bg-[#6C757D] py-[6px] px-[11px] text-[#fff] text-[18px] font-bold w-fit"
              >
                {{ category }}
              </p>
            </div>
          </div>

          <div class="pb-[20px]">
            <p class="text-[#CED4DA] text-[18px]">
              {{ $t("userPage.director") }}:
              <span v-if="storeCommon.locale == 'en'" class="text-[#fff]">{{
                movie.director.en
              }}</span>
              <span v-else class="text-[#fff]">{{ movie.director.ka }}</span>
            </p>
          </div>
          <div class="pb-[20px]">
            <p class="text-[#CED4DA] text-[18px]">
              {{ $t("userPage.budget") }}:
              <span class="text-[#fff]">{{ movie.budget }}$</span>
            </p>
          </div>
          <div>
            <p class="text-[#CED4DA] text-[18px]">
              <span v-if="storeCommon.locale == 'en'">{{
                movie.description.en
              }}</span>
              <span v-else>{{ movie.description.ka }}</span>
            </p>
          </div>
        </div>
      </div>
      <div class="pt-[48px]">
        <div class="flex items-center">
          <h1 class="text-[24px] text-[#fff]">
            {{ $t("userPage.quote") }} ({{ $t("userPage.total") }}

            {{ store.Quotelength }})
          </h1>
          <img
            src="@/assets/images/divideline.png"
            alt="line"
            class="px-[25px]"
          />
          <router-link
            :to="{ name: 'addQuote' }"
            class="flex items-center px-[17px] py-[9px] text-xl text-[#fff] bg-[#E31221] border-[1px] border-[#E31221] rounded"
          >
            <img
              src="@/assets/images/addicon.png"
              alt="add icon"
              class="mr-[8px]"
            />
            {{ $t("userPage.add_quote") }}
          </router-link>
        </div>

        <div v-for="quote in store.quotes" :key="quote.id" class="pt-[76px]">
          <div
            class="bg-[#11101A] px-[32px] py-[24px] rounded-[10px] w-[809px] relative"
          >
            <div class="">
              <div class="flex items-center">
                <div>
                  <img
                    class="w-[226px] h-[140px] pr-[33px] z-0"
                    :src="storeCommon.backUrl + 'storage/' + quote.thumbnail"
                  />
                </div>
                <div v-if="storeCommon.locale == 'en'" class="pb-[24px]">
                  <h1 class="text-[#CED4DA] text-[24px] max-w-[477px]">
                    "{{ quote.quote.en }}"
                  </h1>
                </div>
                <div v-else class="pb-[24px]">
                  <h1 class="text-[#CED4DA] text-[24px] max-w-[477px]">
                    "{{ quote.quote.ka }}"
                  </h1>
                </div>
              </div>
              <button
                class="absolute top-[34px] right-[34px] z-40"
                @click="store.toggleShow"
              >
                <img
                  src="@/assets/images/Vectordots.png"
                  alt=""
                  class="w-[20px] z-40"
                />
              </button>
            </div>
            <div
              v-if="store.visible"
              class="box-border text-[white] absolute top-[48px] left-[753px] px-[40px] py-[32px] z-40 rounded-[10px] bg-[#24222F] w-[250px]"
            >
              <router-link
                :to="{ name: 'viewQuote', params: { id: quote.id } }"
                class="flex items-center pb-[32px]"
              >
                <img
                  src="@/assets/images/Vectoreye.png"
                  alt="icon of eye"
                  class="pr-[16px]"
                />view quote
              </router-link>
              <router-link
                :to="{ name: 'editQuote', params: { id: quote.id } }"
                class="flex items-center pb-[32px]"
              >
                <img
                  src="@/assets/images/Vectorpen.png"
                  alt="icon of pen"
                  class="pr-[16px]"
                />Edit
              </router-link>
              <button
                class="flex items-center"
                @click="store.deleteQuote(quote.id, route.params.id)"
              >
                <img
                  src="@/assets/images/Vectorbin.png"
                  alt="icon of bin"
                  class="pr-[16px]"
                />Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </page-base-component>
</template>

<script setup>
import { useRoute } from "vue-router";
import { onMounted } from "vue";
import { useCrudStore } from "../../stores/crudOperations";
import { useCommonStore } from "../../stores/common";
const storeCommon = useCommonStore();
const store = useCrudStore();
const route = useRoute();

onMounted(() => {
  store.movieDescription(route.params.id);
  store.showQuotes(route.params.id);
});
</script>
