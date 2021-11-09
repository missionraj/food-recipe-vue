<template> 
    <div class="detail">
        <img :src="details.strMealThumb" alt="" srcset="" class="recipe-image">
        <div class="p-2">
            
            <h3> {{ details.strMeal }} </h3>
            <p> </p>
            <p> {{ details.strInstructions }} </p>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { onMounted, ref } from "vue";
    import { useRoute } from "vue-router";
    import RecipeDataService from '@/services/RecipeService';

    interface Recipe { 
        strMealThumb:string;
        strMeal:string;   
        strInstructions:string;
    }

    const route = useRoute();
    const details = ref({} as Recipe);


    onMounted(()=>{
        console.log(route.params.id);
        RecipeDataService.getRecipeDetails(route.params.id).then( (res: any) => { 
            if (res.status == 200) {
                details.value = res.data.meals[0]
            }

        })
    })

</script>

<style scoped>
 .detail { 
     padding: 1rem;
     display: flex;
     justify-content: space-around;
 }

 .recipe-image { 
     height: 500px;
     width: 600px;
     object-fit: contain;
 }

@media only screen and (max-width: 600px) {
    .detail {
        flex-direction: column;
    }

    
 .recipe-image { 
     height: 400px;
     width: 100%;
     object-fit: cover;
 }
}
</style>