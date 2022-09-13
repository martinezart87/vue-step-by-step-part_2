<script setup>
  import { useStorage } from "@/composables/useStorage";

  // po refreshu strony wartości będą zapisane w local storage
  let food = useStorage('food');
  let age = useStorage('age');

  let obj = useStorage('obj', { one: 'one' });

  setTimeout(() => {
    obj.value.one = 'CHANGED';
    // jak nie ma parametru deep: true w funkcji watch
    // obj.value = 'CHANGED';

  }, 2000);
</script>

<!-- <script setup> 
  import { ref, watch } from "vue";

  // pobranie wartości z local storage i przypisanie do zmiennej, po refreshu wartość zostanie w inpucie
  let food = ref(localStorage.getItem('food'));
  let age = ref(localStorage.getItem('age'));

  // obserwator food
  watch(food, (val) => {
    write('food', val);
  });

  // po refreshu strony warość zostaje w local storage
  function write(key, val) {
    localStorage.setItem(key,val);
  }

  setTimeout(() => {
    food.value = 'changed';
  }, 2000);
</script> -->

<template>
  <main>
    <p>
      What is your favourite food?
      <input type="text" v-model="food">
      <!-- <input type="text" v-model="food" @input="write('food', food)"> -->
    </p>

    <p>
      How old are you??
      <input type="text" v-model="age">
      <!-- <input type="text" v-model="age" @input="write('age', age)"> -->
    </p>
  </main>
</template>
