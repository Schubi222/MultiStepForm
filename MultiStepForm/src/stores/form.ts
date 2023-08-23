import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', () => {
  const billing_monthly = ref(true)
  const selectedPlan = ref('Arcade')

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
        image_url:'/src/assets/images/icon-arcade.svg'
      },
      {
        title: 'Advanced',
        price_month: 12,
        price_year: 120,
        image_url:'/src/assets/images/icon-advanced.svg'
      },
      {
        title: 'Pro',
        price_month: 15,
        price_year: 150,
        image_url:'/src/assets/images/icon-pro.svg'
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

  const selectedPlanObject = computed(() =>{
    return Plan.value.plan.filter((plan) => plan.title === selectedPlan.value)[0]
  })

  const totalCost = computed(() =>{
    let total_cost = 0

    Addons.value.addons.forEach((addon) =>{
      if(addon.selected && billing_monthly.value){
        total_cost += addon.price_month
      }
      else if(!billing_monthly.value && addon.selected){
        total_cost += addon.price_year
      }
    })
    const selected = selectedPlanObject
    total_cost += billing_monthly.value ? selected.value.price_month : selected.value.price_year

    return total_cost
  })

  return {Info, Plan, Addons, billing_monthly, selectedPlan, totalCost, selectedPlanObject }
})
