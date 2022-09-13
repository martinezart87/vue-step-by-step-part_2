<script setup>
import TabbableTextarea from "@/components/TabbableTextarea.vue";
import { ref } from "vue";

// zmienna v-model
let comment = ref('test value');

setTimeout(() => {
  comment.value = "It works";
}, 2000);
</script>

<!-- <script setup>

import { onMounted, ref } from "vue";
let textarea = ref(null);

onMounted(() => {
  textarea.value.addEventListener("keydown", (e) => {
    let t = textarea.value;
    
    if(e.keyCode === 9){
      let val = t.value,
        start = t.selectionStart,
        end = t.selectionEnd;

      t.value = val.substring(0, start) + "\t" + val.substring(end);

      t.selectionStart = t.selectionEnd = start + 1;

      e.preventDefault();
    }    
  })
})

// onMounted(() => {
//   console.log(textarea.value.value);
// });

</script> -->

<template>
  <main>
    <form action="">
      <TabbableTextarea v-model="comment" style="width: 100%; height: 300px"></TabbableTextarea>
      <!-- listen keydown.tab -->
      

      <!-- <textarea
        ref="textarea"
        @keydown.tab.prevent="onTabPress"
        style="width: 100%; height: 300px"
      >
Hi there
        </textarea
      > -->

    </form>
  </main>
</template>
