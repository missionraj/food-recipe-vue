<template >
    <div class="foodcard">
        <div class="p-2">
            <i class="fa fa-heart-o heart" aria-hidden="true"></i>
        </div>
        <div class="image_wrapper">
            <router-link :to="{ path: `/recipe/${id}` }">
                <img :src="img" class="image" alt="" srcset="">
            </router-link> | 
        </div>
        <div>
            <div class="title">
                {{ title }}
            </div>
            <div class="rating"> 
                rating <i class="fa fa-star text-red" aria-hidden="true"></i>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" >
    import { onMounted } from "vue";
    const props = defineProps<{
    title: string,
    img: string,
    id:string
    }>()
    onMounted(()=>{
        
    })
    
</script>

<style scoped>
    .foodcard { 
        background: #fff;
        border-radius: 5px;
        padding: 10px;
        min-height: 250px;
        max-height: 320px;
    }

    .image { 
        width: 100%;
        height: 170px;
        object-fit: cover;
    }

    .rating {
        color: #cacaca;
    }

    .heart { 
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
    }

</style>