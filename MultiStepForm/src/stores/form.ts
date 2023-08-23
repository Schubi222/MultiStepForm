import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', () => {
  const billing = ref('monthly')
  const selectedPlan = 0

  const Info = ref({
    name:'',
    email:'',
    phone:''
  })

  const Plan = ref({
    plan:[
      {
        title: 'Arcade',
        price_month: 9,
        price_year: 90,
      },
      {
        title: 'Advanced',
        price_month: 12,
        price_year: 120,
      },
      {
        title: 'Pro',
        price_month: 15,
        price_year: 150,
      },
    ]
  })
  
  const Addons = ref({
    addons: [
      {
        title: 'Online Services',
        info: 'Access to multiplayer games',
        price_month: 1,
        price_year: 10,
        selected: false
      },
      {
        title: 'Larger storage',
        info: 'Extra 1TB of cloud save',
        price_month: 2,
        price_year: 20,
        selected: false
      },
      {
        title: 'Customizable Profile',
        info: 'Custom theme on your profile',
        price_month: 2,
        price_year: 20,
        selected: false
      },
    ]
  })
  return {Info, Plan, Addons,billing, selectedPlan }
})
