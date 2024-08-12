<template>

    <div class="bg-green-200 rounded-full p-3 fixed bottom-2 right-2 lg:right-4 lg:bottom-4 cursor-pointer" @click="showIcons = !showIcons">
        <UserRound v-if="!showIcons"></UserRound>
        <X v-else></X>
    </div>
    <div class="bg-green-200 rounded-full p-2 fixed bottom-16 right-2 lg:right-4 lg:bottom-20 cursor-pointer anime" v-if="showIcons">
        <a href="mailto:gkouamarthur@gmail.com"><Mail></Mail></a>
    </div>
    

</template>

<script setup>
    import { UserRound } from 'lucide-vue-next';
    import { Mail } from 'lucide-vue-next';
    import { Phone } from 'lucide-vue-next';
    import { X } from 'lucide-vue-next';
    import { ref } from 'vue';
    var showIcons = ref(false);
</script>

<style scoped>
    .anime{
        animation: animIcons 500ms ease;
    }

    @keyframes animIcons{
        0%{
            transform: translateY(40px) scale(0.5);

        }
    }
</style>