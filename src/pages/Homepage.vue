<template>
    <div class="title"> 
      <div class="name"> Recipe App </div>
      <div class="input-wrapper"> 
          <input type="text" v-model="searchText" @keyup.enter="search">
          <i class="fa fa-search" aria-hidden="true" @click="search"></i>
      </div>
    </div>
    <div class="container" >
        <FoodComponent v-for="meal in meals" :title="meal.strMeal" :img="meal.strMealThumb" ></FoodComponent>         
    </div>
</template>

<script setup lang="ts">

import { onMounted, ref } from "vue";
import FoodComponent from "@/components/FoodComponent.vue";
import RecipeDataService from "@/services/RecipeService";




const searchText = ref("");
function search() { 
  RecipeDataService.search(searchText.value).then(res=>{
      meals.value = res.data.meals;
  })
}


const meals = ref([]);
onMounted(()=> { 
    RecipeDataService.getAll().then((res)=>{ 
        if (res.status == 200) {
            meals.value = res.data.meals
        }
    })

})


</script>

<style scoped>

    .title { 
        padding: 10px 5px;
        display: flex;
        align-items: center;
    }

    .name { 
        flex: 1;    
    }

    .input-wrapper { 
        border:2px solid rgb(185, 181, 181);
        border-radius: 5px;
        padding: 5px;
    }

    .input-wrapper input { 
        border:none;
        outline: none;
    }
    .container { 
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap:1em;
        padding: 1rem 0.5rem;
        background:rgb(207, 205, 205);
    }

    @media only screen and (max-width: 600px) {
        .container {
            grid-template-columns: 1fr;
        }
    }
</style>