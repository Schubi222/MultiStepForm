<template>

  <h1>Personal Info</h1>
  <h4>Please provide your name, email address, and phone number.</h4>

  <div class="label-and-error-wrapper">
    <label for="name">Name</label>
    <div class="error_message" id="name_error">This field is required</div>
  </div>
  <input type="text" id="name" name="name"
         placeholder="e.g. Stephen King"
         v-model="name"
         required
         @invalid="setError"
  >

  <div class="label-and-error-wrapper">
    <label for="email">Email Address</label>
    <div class="error_message" id="email_error">This field is required</div>
  </div>
  <input type="email" id="email" name="email"
         placeholder="e.g. stephenking@lorem.com"
         v-model="mail"
         required
         @invalid="setError">

  <div class="label-and-error-wrapper">
    <label for="phone">Phone Number</label>
    <div class="error_message" id="phone_error">This field is required</div>
  </div>
    <input type="text" id="phone" name="phone"
           placeholder="e.g. +1 234 567 890"
           v-model="phone"
           required
           @invalid="setError">


</template>

<script setup lang="ts">

import {ref} from "vue";

const name = ref('')
const mail = ref('')
const phone = ref('')

const setError = (e) =>{
  e.target.classList.add('error')
  document.getElementById(`${e.target.id}_error`).classList.add('display')
}

</script>

<style scoped>
@import "@/assets/FormStep.css";
</style>