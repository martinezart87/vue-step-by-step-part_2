<!-- script setup - rejestruje komponent -->
<script setup>
import TheWelcome from "@/components/TheWelcome.vue";
// import ref pozwala edytować w czasie rzeczywsitym
// rejestracja pluginu w vite.config.js
import { onMounted } from "vue";

let message = $ref('Hello World!');

// definicja funkcji
let doSomething = () => {
  alert("doing it now");
};

</script>

<!-- <script>
import TheWelcome from "@/components/TheWelcome.vue";
// import ref pozwala edytować w czasie rzeczywsitym
import { onMounted, ref } from "vue";

export default {
  components: { TheWelcome },

  // setup zamiast objektu data
  setup() {
    onMounted(() => {
      alert('Hi there');
    });

    let message = ref('Hello World!');

    setTimeout(() => {
      message.value = 'Ihave Been Chan'
    }, 2000);

    return {
      message,
    };
  },
};
</script> -->

<!-- standardowo -->
<!-- <script>
  import TheWelcome from "../components/TheWelcome.vue";
  export default {
    components: { TheWelcome},

  data() {
    return {
      message: 'Hello World'
    };
  },

  mounted() {
    alert("I have been mounted");
  }

};

</script> -->

<template>
  <main>
    Hello, I'm home!
    <TheWelcome />
    <p>{{ message }}</p>
    <p>
      <input type="text" v-model="message">
      <button @click="doSomething">Click me</button>
    </p>
  </main>
</template>
