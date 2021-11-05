<template>
    <div class="container" >
        <FoodComponent ></FoodComponent>         
        <FoodComponent ></FoodComponent>         
        <FoodComponent ></FoodComponent>         
        <FoodComponent ></FoodComponent>         
        <FoodComponent ></FoodComponent>         
        <FoodComponent ></FoodComponent>         
        <FoodComponent ></FoodComponent>         
        <FoodComponent ></FoodComponent>         
        <FoodComponent ></FoodComponent>         
        <FoodComponent ></FoodComponent>         
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import FoodComponent from "@/components/FoodComponent.vue";
import RecipeDataService from "@/services/RecipeService";

const data = ref([]);
onMounted(()=> { 
    RecipeDataService.getAll().then((res)=>{ 
        data.value = res.data.categories
        console.log(data.value);
        
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

</style>