<template>
  <div class="Radio-Btns-Wrapper">
    <div class="Radio-Btn-Wrapper" v-for="plan in Plan.plan" :key="plan.title"
         :data-title="plan.title" @click="checkRadioButton">
      <input type="radio" class="Radio-Btn-Wrapper__input"
             :id="plan.title"
             :value="plan.title"
             name="plan"
             v-model="selectedPlan"
             hidden="hidden"
      >
      <img :src="plan.image_url" :alt="plan.title">
      <label class="Radio-Btn-Wrapper__title">{{plan.title}}</label>
      <div class="Radio-Btn-Wrapper__price">{{priceDisplay(plan)}}</div>
    </div>
  </div>
  <div class="Switch-Wrapper" @click="changeBilling">
    <div id="Monthly" :class="{Selected:billing_monthly}">Monthly</div>
    <input type="checkbox" v-model="billing_monthly" hidden="hidden" id="billing_checkbox" ref="billing_checkbox">
    <span :class="{slider:true, yearly:!billing_monthly} "></span>
    <div id="Yearly" :class="{Selected:!billing_monthly}">Yearly</div>
  </div>

</template>

<script setup lang="ts">
import {useFormStore} from "@/stores/form";
import {storeToRefs} from "pinia";
import {ref} from "vue";

const store = useFormStore()

const {Plan, selectedPlan, billing_monthly} = storeToRefs(store)
const billing_checkbox = ref(null)
const priceDisplay = (plan) =>{
  if (billing_monthly.value)
  {
    return '$'+plan.price_month + '/mo'
  }
  else{
    return '$'+plan.price_year + '/yr'
  }
}

const checkRadioButton = (e) =>{
  const div = e.target.parent?.dataset?.title ? e.target.parent : e.target
  selectedPlan.value = div.dataset.title
}

const changeBilling = () =>{
  billing_monthly.value = !billing_monthly.value
}

</script>

<style scoped>
@import "@/assets/SelectPlanStep.css";
</style>