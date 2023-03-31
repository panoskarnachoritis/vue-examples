<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import {ref} from 'vue'

let message = ref("Hello world");

let doSomething = () => {
  alert("doing it now");
}

setTimeout(() => {
  message.value = "Changed";
}, 5000);
</script>

<template>
  <main>
    <TheWelcome />

    <p>{{ message }}</p>
    <p>
      <input type="text" v-model="message">
    </p>

    <p>
      <button @click="doSomething">Click Me</button>
    </p>

  </main>
</template>
