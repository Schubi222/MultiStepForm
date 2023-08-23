<template>
  <main class="Home-Wrapper">
    <StepMenu :currentStep="currentStep"/>
    <FormComponent @update="currentForm => currentStep=currentForm"/>
  </main>
</template>

<script setup lang="ts">

import StepMenu from "@/components/StepMenu.vue";
import FormComponent from "@/components/FormComponent.vue";
import {ref} from "vue";


const currentStep = ref(1)
</script>

<style scoped>
  @import "@/assets/HomeView.css";
</style>