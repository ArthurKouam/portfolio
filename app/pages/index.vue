<script setup>

  useHead({
    titleTemplate: '%s'
  })

  useSeoMeta({
    title: 'Arthur Kouam | Fullstack Developper',
    ogTitle: 'Arthur Kouam | Fullstack Developper',
    description: 'Hi I\'m Arthur Kouam, I am a Fullstack web and mobile Developer from Cameroon, I\'m building many projects. I\'m passionate about web and mobile development and sofware as a service.',
    ogDescription: 'Hi, I am Arthur Kouam. I am a Fullstack Developper based in Cameroon.',
  })

  const { data: allPosts } = await useAsyncData(() => queryCollection('blog').limit(8).order('date', 'DESC').where('online', '==', true).all())

  const projects = [
    {
      link: 'https://ano.hopto.org',
      title: 'Anonymous',
      description: 'Anonymous allows you to send and receive anonymous messages to your friends, similar to nglink, but without the bots that send you spam.',
      langs: ['Node', 'Typescript']
    },
    {
      link: 'https://mlink.arthurkouam.fr',
      title: 'Mlink',
      description: '(Currently in development) This is my first Sass project, it allows me to shorten links and share them easily. Additionally, it adds metadata to the page and tools to measure the number of clicks.',
      langs: ['Adonis', 'Tailwind']
    },
    {
      link: 'https://country-woad-kappa.vercel.app',
      title: 'Country',
      description: 'Country allows you to easily obtain information about any country in the world',
      langs: ['Nuxt', 'Tailwind']
    },
    {
      link: '',
      title: 'Connect',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quos optio recusandae impedit, maiores odio rerum corrupti nam minima',
      langs: ['Vue', 'Quasar', 'Adonis']
    },
    {
      link: '',
      title: 'NewSchool',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quos optio recusandae impedit, maiores odio rerum corrupti nam minima',
      langs: ['Adonis', 'React Native', 'Nuxt', 'Tailwind']
    }
  ];

  const works = [
    {
      link: '',
      title: 'Groupe Octal',
      post: 'Intern',
      start: '07-2025',
      end: 'Today',
    },
    {
      link: 'https://legionweb.co',
      title: 'Legion Web',
      post: 'Intern',
      start: '04-2025',
      end: '06-2025'
    },
    {
      link: 'https://youpi.cm',
      title: 'YOUPI SARL',
      post: 'Intern',
      start: '07-2024',
      end: '10-2024'
    },
    {
      link: 'https://arthurkouam.fr',
      title: 'Freelance',
      post: 'Independant',
      start: '01-2025',
      end: 'Today'
    },
  ]

  const langs = ['HTML', 'CSS', 'Javascript', 'Typescript', 'node', 'PHP', 'Java', 'C++']

  const frameworks = ['Vue', 'Vite', 'Nuxt', 'React', 'Svelte', 'Adonis', 'Tailwind', 'React Native', 'Ionic']
  
  const tools = ['GIT', 'Github', 'VS code', 'Webstorm', 'n8n']

</script>

<template>
  

      <main class=" flex flex-col gap-8 pt-4 w-full text-justify">
        <div class=" w-full">
          <h2 class=" text-lg text-slate-700">About Me</h2>
          <p class=" mt-3 text-justify">
            I'm a Full-Stack Developer focused on crafting clean, user-friendly experiences. I build responsive websites and web applications that combine elegant design with solid, reliable functionality — from the user interface to the server logic.          
          </p>
          <div class="flex flex-wrap gap-6 mt-4">
            <a target="_blank" href="https://github.com/ArthurKouam"><Icon alt="Github" name="uil:github" size="28px" class="text-dark-bg dark:text-dark-text" /></a>
            <a href="mailto:gkouamarthur@gmail.com"><Icon alt="email" name="uil:envelope" size="28px" class="text-dark-bg dark:text-dark-text" /></a>
            <a target="_blank" href="https://x.com/kouamWeb"><Icon alt="Twitter" name="uil:twitter" size="28px" class="text-dark-bg dark:text-dark-text" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/arthur-kouam-a44274300"><Icon alt="Linkedin" name="uil:linkedin" size="28px" class="text-dark-bg dark:text-dark-text" /></a>
            <a target="_blank" href="https://www.youtube.com/channel/UCNMIuoYie6D1EUtVPRqBPXg"><Icon alt="Youtube" name="uil:youtube" size="28px" class="text-dark-bg dark:text-dark-text" /></a>
          </div>
        </div>

        <div class=" w-full">
          <h2 class=" text-lg text-slate-700">My projects</h2>
          <div class=" mt-4 ">

            <div>
              <ul class=" w-full flex flex-col gap-5">
                <li v-for="(project, index) in projects" :key="index" class=" w-full">
                  <a :href="project.link" class=" w-full">
                    <span class=" text-lg">-><span class="underline">{{ project.title }}</span></span>
                    <p class=" mt-2">{{ project.description }}</p>

                    <div class=" flex flex-wrap gap-2 ">
                      <span class="mt-2 rounded bg-slate-300 dark:bg-slate-800 px-2 py-0.5" v-for="(lang, index) in project.langs" :key="index">
                        {{ lang }}
                      </span>
                    </div>
                  </a>
                </li>
              </ul>

              <p class=" text-blue-800 underline mt-6 cursor-pointer">
                <a target="_blank" href="https://github.com/ArthurKouam">Views more on Github</a>
              </p>
            </div>

          </div>
        </div>

        <div class=" w-full">
          <h2 class=" text-lg text-slate-700">Works</h2>
          <div class=" mt-4 ">

            <div class="">
              <ul class=" w-full flex flex-col gap-3">
                <li v-for="(work, index) in works" :key="index" class=" flex flex-col gap-5">
                  <a :href="work.link" class=" w-full p-2 border border-slate-900 dark:border-slate-400 project">
                    <span>{{ work.title }}</span>

                    <div class=" flex flex-nowrap justify-between items-center mt-2">
                      <span class=""> {{ work.post }} </span>
                      <span class="text-sm">{{ work.start }} / {{ work.end }}</span>
                     </div>
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <div class=" w-full">
          <h2 class=" text-lg text-slate-700">Programming Languages and Tools</h2>
          <div class=" mt-4 ">

            <div>
              <span>
                ->Languages
              </span>

              <div class="mt-2 flex gap-3 flex-wrap">
                <ToolsComponent :langs="langs" />
              </div>
            </div>
              
            <div class=" mt-5 ">
              <span>
                ->Framework
              </span>

              <div class="mt-2 flex gap-3 flex-wrap">

                <ToolsComponent :langs="frameworks" />

              </div>
            </div>

            <div class=" mt-5">
              <span>
                ->Tools
              </span>

              <div class="mt-2 flex gap-3 flex-wrap">

                <ToolsComponent :langs="tools" />

              </div>
            </div>

          </div>
        </div>

        <div class=" w-full">
          <h2 class=" text-lg text-slate-700">Blog</h2>
          <div class=" mt-4 ">

            <div class="">
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
        </div>

      </main>

      

</template>

<style>

.project:hover{
  background-color: rgba(4, 10, 20, 0.7);
}

  h2 {
    font-weight: bold;
  }

</style>
