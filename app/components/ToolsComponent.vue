<script setup>
  defineProps(['langs'])
</script>



<template>
  <div class="text-sm border border-slate-800 dark:border-slate-200 px-2 py-0.5" v-for="(lang, index) in langs" :key="index">
    {{ lang }}
  </div>
</template>