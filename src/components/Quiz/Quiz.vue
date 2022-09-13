<template>
    <!-- <h1>{{ name }}</h1> -->
    <QuizHeader />

    <QuizQuestion />

    <QuizFooter: quiz="quiz" />

</template>

<script setup>

import QuizHeader from "@/components/Quiz/QuizHeader.vue";
import QuizQuestion from "@/components/Quiz/QuizQuestion.vue";
import QuizFooter from "@/components/Quiz/QuizFooter.vue";
import { provide } from "vue";

let props = defineProps({ quiz: Object });

provide('quiz', props.quiz);
// let name = ref('John Doe');

// provide('name', {
//         name,
//         changeName: () => name.value = 'Changed'
//     });
</script>