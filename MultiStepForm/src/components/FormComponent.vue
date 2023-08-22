<template>
  <form class="Form-Wrapper" @submit.prevent="currentForm++">
    <PersonalInfoStep v-show="currentForm === 1" />
    <div class="Button-Wrapper">
      <div class="back-btn " @click="currentForm--" v-if="currentForm > 1">Back</div>
      <input class="next-btn btn" type="submit" v-if="currentForm < 4" value="Next Step">
      <div class="summary-btn btn" @click="currentForm++" v-else>Confirm</div>
    </div>
  </form>
</template>

<script setup lang="ts">

import PersonalInfoStep from "@/components/form-steps/PersonalInfoStep.vue";
import {ref} from "vue";

const currentForm = ref(1)

const test = () =>{
 console.log("AAAAAA")
}

</script>

<style scoped>
@import "@/assets/FormComponent.css";
</style>