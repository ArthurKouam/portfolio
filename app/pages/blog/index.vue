<script setup>
  useHead({
    titleTemplate: '%s'
  })

  useSeoMeta({
    title: 'Arthur Kouam | Blog',
    ogTitle: 'Arthur Kouam | Blog',
    description: 'I share my discoveries, tips, and thoughts on web development, app creation, and the tools I use daily. I hope you find my content informative and inspiring.',
    ogDescription: 'I share my discoveries, tips, and thoughts on web development, app creation, and the tools I use daily. I hope you find my content informative and inspiring.',
  })

  const { data: allPosts } = await useAsyncData(() => queryCollection('blog').order('date', 'DESC').where('online', '==', true).all())
</script>

<template>

  <main class=" pt-4 ">
    <h2 class=" text-xl text-slate-700">
      Blog
    </h2>
    <p class=" text-light-text dark:text-dark-text mt-2">
      I share my discoveries, tips, and thoughts on web development, app creation, and the tools I use daily. I hope you find my content informative and inspiring.
    </p>

    <div class=" mt-8 ">
      <h3 class=" text-lg text-slate-700">Articles</h3>

      <div class="mt-4">
        <ul class=" w-full flex flex-col gap-3">
          <li v-for="(article, index) in allPosts" :key="index" class=" w-full">
            <a :href="/blog\/[slug]/.test(article.slug) ? article.slug : '/blog/' + article.slug" class=" w-full p-3 border border-slate-900 border-dotted dark:border-slate-400 project flex justify-between items-center">
              <span>{{ article.title }}</span>
              <span class=" text-xs hidden md:inline">{{ article.createdat }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

  </main>

</template>
