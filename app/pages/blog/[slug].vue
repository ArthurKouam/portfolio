<script setup>
  const slug = useRoute().params.slug
  const { data: post } = await useAsyncData(() => queryCollection('blog').where('slug', '==', slug).where('online', '==', true).first())

  useHead({
    titleTemplate: '%s'
  })

  useSeoMeta({
    title: post.value?.title,
    ogTitle: post.value?.title,
    description: post.value?.description,
    ogDescription: post.value?.description
  })

  console.log(post.value)
</script>



<template>
  <main class=" pt-4 ">
    <ContentRenderer v-if="post" :value="post.meta" />
    <div class="text-center h-[50vh] flex justify-center items-center text-light-text dark:text-dark-text font-bold text-4xl" v-else>
      Page not found
    </div>
  </main>
  
</template>

