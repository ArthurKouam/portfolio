<template>
    <section class="w-full h-screen relative text-white" >
        <img src="../assets/image/fauxels.jpg" class="w-full h-full object-cover object-center grayscale shadow-2xl shadow-gray-900" alt="">
        <div  class="bg-gray-800 rounded-2xl lg:w-2/3 w-11/12 h-1/2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h2 class="text-white text-3xl lg:text-4xl text-center font-bold pt-3">WORKING EXPERIENCE</h2>
            <div class=" grid grid-cols-1 grid-rows-1 w-full h-5/6 pt-8">
                
                <div class="m-1 pl-16 grid justify-center h-6" data-aos="zoom-in">
                    <span class="border-2 rounded-full px-3 w-min">2025</span><br>
                    <p>Lorem ipsum dolor, sit amet consectetur</p><br>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, quis. Dolores, voluptate </p>
                </div>
                
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