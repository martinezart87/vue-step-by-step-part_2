<template>
    <footer>
        <QuizFooterLinks :quiz="quiz" />
    </footer>
</template>

<script setup>
import QuizFooterLinks from "@/components/Quiz/QuizFooterLinks.vue";

defineProps({
   quiz: Object 
});
</script>