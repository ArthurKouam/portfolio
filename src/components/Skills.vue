<template>
    <section class="w-full pb-4 relative text-white bg-gray-800 pt-7">
        <h2 class="text-3xl lg:text-4xl font-bold text-center">MY RECENTS PROJECTS</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 w-full place-items-center pt-8 gap-4">
            <div class="h-60 w-2/3 lg:col-span-2 rounded-lg bg-neutral-800 p-5" data-aos="slide-up" data-aos-duration="400">
                <h3><a href="https://to-do-list-umber-ten.vercel.app/">Todo list</a></h3><br>
                <p>Platforms: Web</p><br>
                <p>
                    A minimalist web application for task management 
                </p>
            </div>
            <div class="h-60 w-2/3 lg:col-span-2 rounded-lg bg-neutral-800 p-5" data-aos="slide-up" data-aos-duration="600">
                <h3>Todo apk</h3><br>
                <p>Platforms: Android</p><br>
                <p>
                    My first mobile app, use quasar and capacitor
                </p>
            </div>
            <div class="h-60 w-2/3 lg:col-span-2 rounded-lg bg-neutral-800 p-5" data-aos="slide-up" data-aos-duration="800">
                <h3><a href="https://fasttap.vercel.app/">Fasttap</a></h3><br>
                <p>Platforms: Web</p><br>
                <p>
                    A tool to measure your keyboard speed
                </p> 
            </div>
            <div class="h-60 w-2/3 lg:col-span-2 hidden lg:block rounded-lg bg-neutral-800 p-5" data-aos="slide-up" data-aos-duration="400">
                <h3>TODO APK</h3><br>
                <p>Platforms: android ios</p><br>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quia ea asperiores nobis 
                </p>
            </div>
            <div class="h-60 w-2/3 lg:col-span-2 hidden lg:block rounded-lg bg-neutral-800 p-5" data-aos="slide-up" data-aos-duration="600">
                <h3>TIC TAC TO</h3><br>
                <p>Platforms: Web android</p><br>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quia ea asperiores nobis reprehenderit 
                </p>
            </div>
            <div class="h-60 w-2/3 lg:col-span-2 hidden lg:block rounded-lg bg-neutral-800 p-5" data-aos="slide-up" data-aos-duration="800">
                <h3>Calculatrice</h3><br>
                <p>Platforms: computer</p><br>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quia ea asperiores nobis 
                </p>
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