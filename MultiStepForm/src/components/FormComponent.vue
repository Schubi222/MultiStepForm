<template>
  <form class="Form-Wrapper" @submit.prevent="changeForm(+1)">
    <PersonalInfoStep v-if="currentForm_show" />
    <div class="Button-Wrapper">
      <div class="back-btn " @click="changeForm(-1)" v-if="currentForm > 1">Back</div>
      <input class="next-btn btn" type="submit" v-if="currentForm < 4" value="Next Step">
      <div class="summary-btn btn" @click="console.log('TODO: IMPLEMENT')" v-else>Confirm</div>
    </div>
  </form>
</template>

<script setup lang="ts">

import PersonalInfoStep from "@/components/form-steps/PersonalInfoStep.vue";
import {computed, ref} from "vue";

const currentForm = ref(1)

const changeForm = (change:number) =>{
  currentForm.value += change
  emit("update", currentForm.value)
}
const currentForm_show = computed(() =>{
  return currentForm.value === 1
})
const emit = defineEmits<{update:[currentForm:number]}>()
</script>

<style scoped>
@import "@/assets/FormComponent.css";
</style>