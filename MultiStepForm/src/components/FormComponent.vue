<template>
  <div class="Form-Component-Wrapper" v-if="ShowForm">
    <h1>{{h1_heading}}</h1>
    <h4>{{h4_heading}}</h4>
    <form class="Form-Wrapper" @submit.prevent="changeForm(+1)">
      <PersonalInfoStep v-if="currentForm_show(1)" />
      <SelectPlanStep v-else-if="currentForm_show(2)"/>
      <AddOnsStep v-else-if="currentForm_show(3)"/>
      <SummaryStep v-else-if="currentForm_show(4)"/>
      <div class="Button-Wrapper">
        <div class="back-btn " @click="changeForm(-1)" v-if="currentForm > 1">Back</div>
        <input class="next-btn btn" type="submit" v-if="currentForm < 4" value="Next Step">
        <div class="summary-btn btn" @click="ShowForm=false" v-else>Confirm</div>
      </div>
    </form>
  </div>
  <div class="Done" v-else>
    <img src="@/assets/images/icon-thank-you.svg" alt="Checkmark">
    <h1>Thank you!</h1>
    <p>Thanks for confirming your subscription! We hope you have fun using our platform.
      If you ever need support, please feel free to email us at support@loremgaming.com</p>
  </div>
</template>

<script setup lang="ts">

import PersonalInfoStep from "@/components/form-steps/PersonalInfoStep.vue";
import {computed, ref} from "vue";
import SelectPlanStep from "@/components/form-steps/SelectPlanStep.vue";
import AddOnsStep from "@/components/form-steps/AddOnsStep.vue";
import SummaryStep from "@/components/form-steps/SummaryStep.vue";

const currentForm = ref(1)

const ShowForm = ref(true)

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