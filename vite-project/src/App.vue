<script setup lang="ts">
import SampleComponent from './components/SampleComponent.vue'
import { ref } from 'vue';

const hoge = ref('');
</script>

<template>
  <div>
    <input v-model="hoge" placeholder="書いてくれ！" />
    <SampleComponent :hoge="hoge" />
  </div>
</template>
