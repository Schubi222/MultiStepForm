<template>

  <h1>Personal Info</h1>
  <h4>Please provide your name, email address, and phone number.</h4>

  <div class="label-and-error-wrapper">
    <label for="name">Name</label>
    <div class="error_message" id="name_error">This field is required</div>
    <input type="text" id="name" name="name"
           placeholder="e.g. Stephen King"
           v-model="Info.name"
           required
           @invalid="setError"
    >
  </div>


  <div class="label-and-error-wrapper">
    <label for="email">Email Address</label>
    <div class="error_message" id="email_error">This field is required</div>
    <input type="email" id="email" name="email"
           placeholder="e.g. stephenking@lorem.com"
           v-model="Info.email"
           required
           @invalid="setError"
    >
  </div>

  <div class="label-and-error-wrapper">
    <label for="phone">Phone Number</label>
    <div class="error_message" id="phone_error">This field is required</div>
    <input type="text" id="phone" name="phone"
           placeholder="e.g. +1 234 567 890"
           v-model="Info.phone"
           required
           @invalid="setError"
    >
  </div>


</template>

<script setup lang="ts">

import {ref} from "vue";
import {useFormStore} from "@/stores/form";
import {storeToRefs} from "pinia";

const store = useFormStore()

const {Info} = storeToRefs(store)


const setError = (e) =>{
  document.getElementById(`${e.target.id}_error`).classList.add('display')
}

</script>

<style scoped>
@import "@/assets/FormStep.css";
</style>