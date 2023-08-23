<template>
  <div class="Summary-Wrapper">
    <div class="Summary-Wrapper__selection">
      <div class="Summary-Wrapper__selection-plan">
        <p class="Summary-Wrapper__selection-plan-display">{{selectedPlanObject.title}}({{billing_monthly ? 'Monthly' : 'Yearly'}})</p>
        <div class="Summary-Wrapper__selection-plan-change-btn" @click="billing_monthly = !billing_monthly">Change</div>
        <div class="Summary-Wrapper__selection-plan-price">{{priceDisplay(selectedPlanObject, false)}}</div>
      </div>
      <hr>
      <div class="Summary-Wrapper__selection-addons" v-for="addon in Addons.addons" :key="addon.title">
        <div class="Summary-Wrapper__selection-addons-name" v-if="addon.selected">{{addon.title}}</div>
        <div class="Summary-Wrapper__selection-addons-price" v-if="addon.selected">{{priceDisplay(addon)}}</div>
      </div>
    </div>
    <div class="Summary-Wrapper__total">
      <p>Total (per {{billing_monthly ? 'month' : 'year'}})</p>
      <div class="">{{'+$'+totalCost + (billing_monthly ? '/mo' : '/yr')}}</div>
    </div>

  </div>
</template>

<script setup lang="ts">

import {useFormStore} from "@/stores/form";
import {storeToRefs} from "pinia";
import {computed} from "vue";

const store = useFormStore()
const {Plan, Addons, billing_monthly, totalCost, selectedPlanObject} = storeToRefs(store)


const priceDisplay = (resource, plus=true) =>{
  if (billing_monthly.value)
  {
    return (plus ? '+': '') +'$'+resource.price_month + '/mo'
  }
  else{
    return (plus ? '+': '') +'$'+resource.price_year + '/yr'
  }
}

</script>

<style scoped>
@import "@/assets/SummaryStep.css";
</style>