<template>
<div class="Wrapper">
  <div class="Step-Wrapper" v-for="step in steps" :key="step.number">
    <div :class="{'Step-Wrapper__number':true, 'active':currentStep===step.number}">{{step.number}}</div>
    <div class="Step-Wrapper__step">step {{step.number}}</div>
    <div class="Step-Wrapper__info">{{step.info}}</div>
  </div>
</div>
</template>

<script setup lang="ts">
  import {ref} from "vue";


  const props = defineProps(['currentStep'])

  const steps = ref([
    {
      number: 1,
      info: 'your info'
    },
    {
      number: 2,
      info: 'select plan'
    },
    {
      number: 3,
      info: 'add-ons'
    },
    {
      number: 4,
      info: 'summary'
    }
      ]
  )

</script>

<style scoped>
@import "@/assets/StepMenu.css";
</style>