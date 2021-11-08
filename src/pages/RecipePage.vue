<template> 
    <div>
        this is the recipe detail page
    </div>
</template>

<script setup lang="ts">
    import { onMounted, ref } from "vue";
    import { useRoute } from "vue-router";
    import RecipeDataService from "@/services/RecipeService";

    const route = useRoute();
    const details = ref({})
    onMounted(()=>{
        console.log(route.params.id);
        RecipeDataService.getRecipeDetails(route.params.id).then( (res: any) => { 
            if (res.status == 200) {
                details.value = res.data.meals[0]
            }

            console.log("details ....", details.value);
        })
    })

</script>

<style scoped></style>