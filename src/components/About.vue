<template>
    <section class="w-full lg:grid gap-2 lg:h-screen lg:grid-cols-2 bg-neutral-800 lg:place-items-center">

        <div class="lg:h-full h-screen grid pl-7 pt-12">
            <div class="h-full">
                <div class="w-3/4 lg:h-3/5 h-40v bg-gray-800 rounded-2xl" data-aos="zoom-in">

                </div>
                <div class="pt-5 pb-3 lg:w-3/4 w-full overflow-x-hidden" data-aos="slide-up">
                    <h2 class="text-2xl text-white font-bold">ABOUT ME</h2>
                    <p class="pt-3 text-white text-justify pr-3">Passionate about web development, I am a junior developer with a strong interest in web technologies like Javascript and Vue.js. I have already completed several projects. Curious and always learning, I continuously expand my skills by exploring modern frameworks and tools. My goal is to contribute to projects that combine innovation and performance while delivering smooth and intuitive user experiences.
                    </p>
                </div>
            </div>
        </div>

        <div class="pb-5 pt-6 lg:pt-0 lg:pb-0 pl-8 lg:pl-0 lg:h-full flex items-center" data-aos="slide-up">
            <div class="text-white">
                <h1 class="text-white text-3xl lg:text-4xl font-bold">MY BACKGROUND SCHOOL</h1>
                <p class="mt-5"><span class="border-2 rounded-full px-3">2023...</span><span class="text-xl">Computer engineering students at IUT FV</span></p>
                <p class="mt-5"><span class="border-2 rounded-full px-3">2023</span><span class="text-xl">Baccalauréat C in GBHS GOUACHE</span></p>
                <p class="mt-5"><span class="border-2 rounded-full px-3">2021</span><span class="text-xl">Probatoire C in GBHS GOUACHE</span></p>
            </div>
        </div>

    </section>
</template>

<script setup>
    import { onMounted } from 'vue';
    import AOS from 'aos';

    onMounted(()=>{
        AOS.init({
            once: true,
        });
    })
</script>

<style scoped>
 body, html {
    overflow-x: hidden;
}
</style>