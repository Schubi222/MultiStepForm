<template>
  <div class="Add-On-Wrapper noSelect" v-for="addon in Addons.addons" :key="addon.title" @click="checkBox(addon)">
    <input type="checkbox" v-model="addon.selected" :id="addon.title">
    <div class="Info">
      <h3>{{addon.title}}</h3>
      <div class="additional-info">{{addon.info}}</div>
    </div>
    <div class="price">{{priceDisplay(addon)}}</div>

  </div>
</template>

<script setup lang="ts">

import {useFormStore} from "@/stores/form";
import {storeToRefs} from "pinia";

const store = useFormStore()

const {Addons, billing_monthly} = storeToRefs(store)

const checkBox = (addon) =>{
  addon.selected = !addon.selected
}

const priceDisplay = (addon) =>{
  if (billing_monthly.value)
  {
    return '+$'+addon.price_month + '/mo'
  }
  else{
    return '+$'+addon.price_year + '/yr'
  }
}

</script>

<style scoped>
@import "@/assets/AddOnsStep.css";
</style>