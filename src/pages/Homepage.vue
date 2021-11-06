<template>
    <div class="container" >

        <FoodComponent v-for="meal in meals" :title="meal.strMeal" :img="meal.strMealThumb" ></FoodComponent>         
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import FoodComponent from "@/components/FoodComponent.vue";
import RecipeDataService from "@/services/RecipeService";

const meals = ref([]);
onMounted(()=> { 
    RecipeDataService.getAll().then((res)=>{ 
        console.log("recipe meals .....", res.data.meals);
        meals.value = res.data.meals
    })

})


</script>

<style scoped>
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