<script setup> 
  import  { useFlash } from "@/composables/useFlash";

  let { flash } = useFlash();

</script>

<!-- <script>
import flash from "@/mixins/flash";

export default {
  mixins: [flash]
}; 
</script>-->

<!-- <script>
import swal from 'sweetalert';

export default {
  methods: {
    flash(message) {
      swal('Success!', message, 'success');
    }
  }
}
</script> -->

<template>
  <div>
    <p>
      <button @click="flash('Yay!', 'It works on the about page!', 'info')">Click me</button>
    </p>
  </div>
</template>