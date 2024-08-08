<template>
    <section class="w-full grid grid-cols-1 lg:grid lg:h-screen lg:grid-cols-2 bg-neutral-800 lg:place-items-center">

        <div class="lg:h-full h-screen grid pl-9 pt-16">
            <div class="h-full">
                <div class="w-3/4 h-3/5 bg-gray-800 rounded-2xl" data-aos="zoom-in">

                </div>
                <div class="pt-5 w-3/4 text-justify" data-aos="slide-up">
                    <h2 class="text-2xl text-white font-bold">ABOUT ME</h2>
                    <p class="pt-3 text-white">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, similique debitis ipsa atque, 
                        libero totam ex blanditiis quis cumque temporibus enim dicta, alias laboriosam odio soluta? 
                        Dolorum quas ut accusantium!
                    </p>
                </div>
            </div>
        </div>

        <div class="pb-5 pt-6 lg:pt-0 lg:pb-0 pl-8 lg:pl-0 lg:h-full flex items-center">
            <div class="text-white" data-aos="slide-left">
                <h1 class="text-white text-3xl lg:text-4xl font-bold">MY BACKGROUND SCHOOL</h1>
                <p class="mt-5"><span class="border-2 rounded-full px-3">2023...</span><span class="text-xl"></span></p>
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

<style>

</style>