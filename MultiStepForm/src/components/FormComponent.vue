<template>
  <div class="Form-Component-Wrapper">
    <h1>{{h1_heading}}</h1>
    <h4>{{h4_heading}}.</h4>
    <form class="Form-Wrapper" @submit.prevent="changeForm(+1)">
      <PersonalInfoStep v-if="currentForm_show(1)" />
      <SelectPlanStep v-else-if="currentForm_show(2)"/>
      <AddOnsStep v-else-if="currentForm_show(3)"/>
      <SummaryStep v-else-if="currentForm_show(4)"/>
      <div class="Button-Wrapper">
        <div class="back-btn " @click="changeForm(-1)" v-if="currentForm > 1">Back</div>
        <input class="next-btn btn" type="submit" v-if="currentForm < 4" value="Next Step">
        <div class="summary-btn btn" @click="console.log('TODO: IMPLEMENT')" v-else>Confirm</div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">

import PersonalInfoStep from "@/components/form-steps/PersonalInfoStep.vue";
import {computed, ref} from "vue";
import SelectPlanStep from "@/components/form-steps/SelectPlanStep.vue";
import AddOnsStep from "@/components/form-steps/AddOnsStep.vue";
import SummaryStep from "@/components/form-steps/SummaryStep.vue";

const currentForm = ref(1)

const changeForm = (change:number) =>{
  currentForm.value += change
  emit("nextForm", currentForm.value)
}
const currentForm_show = (slide_number:number) =>{
  return currentForm.value === slide_number
}

const h1_heading = computed(() =>{
  switch (currentForm.value){
    case 1:
      return 'Personal Info'
    case 2:
      return 'Select your plan'
    case 3:
      return 'Pick add-ons'
    case 4:
      return 'Finishing up'
  }
  return "Error"
})
const h4_heading = computed(() =>{
  switch (currentForm.value){
    case 1:
      return 'Please provide your name, email address, and phone number.'
    case 2:
      return 'You have the option of monthly or early billing.'
    case 3:
      return 'Add-ons help enhance your gaming experience.'
    case 4:
      return 'Double-check everything looks OK before confirming.'
  }
  return "Error"
})
const emit = defineEmits<{nextForm:[currentForm:number]}>()
</script>

<style scoped>
@import "@/assets/FormComponent.css";
</style>