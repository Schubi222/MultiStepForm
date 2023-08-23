<template>
  <form class="Form-Wrapper" @submit.prevent="currentForm++">
    <PersonalInfoStep v-if="currentForm_show" />
    <div class="Button-Wrapper">
      <div class="back-btn " @click="currentForm--" v-if="currentForm > 1">Back</div>
      <input class="next-btn btn" type="submit" v-if="currentForm < 4" value="Next Step">
      <div class="summary-btn btn" @click="currentForm++" v-else>Confirm</div>
    </div>
  </form>
</template>

<script setup lang="ts">

import PersonalInfoStep from "@/components/form-steps/PersonalInfoStep.vue";
import {computed, ref} from "vue";

const currentForm = ref(1)

const test = () =>{
 console.log("AAAAAA")
}
const currentForm_show = computed(() =>{
  console.log(currentForm.value === 1)
  console.log(currentForm.value)
  return currentForm.value === 1
})

</script>

<style scoped>
@import "@/assets/FormComponent.css";
</style>