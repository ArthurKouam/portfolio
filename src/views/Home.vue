<template>

    <section class="w-full h-screen text-white" translate="no">
        <img src="../assets/image/natri.jpg" alt="" class="w-full h-full object-cover object-center grayscale">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center bg-neutral-800 w-11/12 sm:w-2/5 h-1/3 grid place-items-center rounded-xl shadow-2xl shadow-neutral-800">
            <div>
                <span class="text-xl">Hi, I am</span><br> 
                <span class="text-3xl bg-blue-800 my-3 font-bold">Arthur KOUAM</span><br>
                <span class="text-lg" id="text">|</span>
                <div class="flex justify-around mt-6">
                    <a href="https://github.com/ArthurKouam/"><GithubIcon class="cursor-pointer"/></a>
                    <a href="https://www.linkedin.com/in/arthur-kouam-a44274300?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><LinkedinIcon class="cursor-pointer"/></a>
                    <TwitterIcon class="cursor-pointer"/>
                </div>
            </div>
        </div>
    </section>

</template>

<script setup>
    import { GithubIcon } from 'lucide-vue-next';
    import { LinkedinIcon } from 'lucide-vue-next';
    import { TwitterIcon } from 'lucide-vue-next';
    import { onMounted } from 'vue';

    import AOS from 'aos';

    onMounted(()=>{
        AOS.init({
            once: true,
        });
    })
    
    const text = "Web Developper";
    const time = window.setInterval(Mytext, 150)
    let i = 0;
    function Mytext(){
        document.getElementById("text").innerHTML = text.substring(0, i) + '<span class="anim text-2xl">|<span>';
        i++;
        if (i === text.length + 1) {
                clearInterval(time)
    }

        }
        
    
</script>

<style>
    .anim{
        animation: myanim 300ms ease infinite;
    }

    @keyframes myanim {
        75%, 100% {
            transform: scale(2);
            opacity: 0;
        }
    }
    
</style>