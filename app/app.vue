<script setup>
import {onMounted, ref} from 'vue';

const theme = ref('light');

const getSystemTheme = () => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light';
};

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme.value);
  localStorage.setItem('theme', theme.value);
};

const watchSystemTheme = () => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (!localStorage.getItem('theme')) {
        theme.value = e.matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme.value);
      }
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }
};

onMounted(() => {
  theme.value = localStorage.getItem('theme') || getSystemTheme();
  document.documentElement.setAttribute('data-theme', theme.value);
  watchSystemTheme();
});

useHead({
  titleTemplate: '%s',
  script: [
    {
      src: 'https://cloud.umami.is/script.js',
      async: true,
      defer: true,
      'data-website-id': '87be06fe-f70c-4f22-96e7-f278627de223'
    }
  ],
  htmlAttrs: {
    lang: 'en',
    
  }
})

</script>

<template>

  <div class=" w-full min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text pt-9 pb-5 px-6 md:px-0">
    <div class="max-w-2xl mx-auto w-full flex flex-col gap-6">
      <header class=" flex justify-between items-start">
        <div>
          <h1 class=" font-semibold"><NuxtLink to="/">Arthur Kouam</NuxtLink></h1>
          <p class=" text-sm">-> Software engineer</p>
        </div>

        <div class=" flex items-center gap-4">
          <button 
            @click="toggleTheme" 
            class="h-6 cursor-pointer w-6 flex items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            :aria-label="theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'"
          >
            <Icon v-if="theme === 'light'" name="ph:moon" class="h-5 w-5" />
            <Icon v-else name="ph:sun" class="h-5 w-5" />
          </button>
          <NuxtLink class=" underline" to="/projects">Projects</NuxtLink>
          <NuxtLink class=" underline" to="/blog">Blog</NuxtLink>
        </div>
      </header>

      <NuxtPage />
      
      <footer class="flex justify-between pb-4 pt-8">
        <p>Code by <a href="" class=" underline">Arthur Kouam</a></p>
        <p class="hidden md:block">All rigths reserved</p>
      </footer>  
    </div>
  </div>
</template>
