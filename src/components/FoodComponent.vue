<template >
    <div class="foodcard">
        <div>
            <i class="fa fa-heart-o" aria-hidden="true"></i>
        </div>
        <div class="image_wrapper">
            <img src="@/assets/product.jpg" class="image" alt="" srcset="">
        </div>
        <div>
            <div class="title">
                Carrot Burger
            </div>
            <div class="rating"> 
                rating <i class="fa fa-star text-red" aria-hidden="true"></i>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" >

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

</style>