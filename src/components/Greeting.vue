<script setup>
import { ref } from "vue";

const props = defineProps({
  messages: {
    type: Array,
    required: true,
    default: ["デフォルト"],
  }
});
const greeting = ref("");

const setGreeting = () => {
  greeting.value = props.messages[(Math.floor(Math.random() * props.messages.length))];
};

const greetingButton = () => {
  setGreeting();
};

setGreeting();
</script>

<template>
  <div>
    <h3>{{ greeting }}</h3>
    <button @click="greetingButton">新しい挨拶</button>
  </div>
</template>