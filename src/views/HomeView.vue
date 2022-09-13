<script setup> 
  import  { useFlash } from "@/composables/useFlash";

  let { flash } = useFlash();

</script>

<!-- <script > 
  import  { useFlash } from "@/composables/useFlash";

  export default {
    setup() {
      let { flash } = useFlash();

      return { flash };
    }
  }
</script> -->

<!-- <script>
  export default {
    methods: {
      flash(message) {
        alert(message);
      }
    }
  }
</script> -->

<template>
  <main>
    <p>
      <button @click="flash('Test', 'It works!')">Click me</button>
    </p>
  </main>
</template>
