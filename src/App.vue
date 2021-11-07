<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Homepage from "@/pages/homepage.vue";
import Header from "@/components/Header.vue";


</script>

<template>
  <router-view></router-view> 
</template>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Manrope&family=Merriweather:ital@0;1&family=Mukta&family=Roboto+Slab&display=swap');

  @import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css";
  body { 
    margin: 0;
    font-family: 'Manrope', sans-serif;
    font-family: 'Merriweather', serif;
    font-family: 'Mukta', sans-serif;
    font-family: 'Roboto Slab', serif;
  }

  .text-red {
    color: red;
  }

  .p-2 {
    padding: 10px;
  }

  
</style>
