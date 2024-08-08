<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Home from './views/Home.vue';
import About from './components/About.vue';
import Exp from './components/Exp.vue';
import Skills from './components/Skills.vue';

</script>

<template>
  <Home></Home>
  <About></About>
  <Exp></Exp>
  <Skills></Skills>
  <RouterView />
</template>

<style scoped>

</style>

