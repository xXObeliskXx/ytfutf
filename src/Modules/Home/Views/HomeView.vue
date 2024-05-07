<script setup lang="ts">
import {RouterView } from 'vue-router'
import Menu from '../components/Menu.vue';
</script>

<template>
  <main id="home">
    <Menu/>

    <section id="homeSection">
      <RouterView/>
    </section>
  </main>
</template>


<style>
    #home{
      display: grid;
      grid-template-columns: 320px 1fr;
    }

    #homeSection{
      width: 90%;
      margin: 20px auto;
    }
</style>