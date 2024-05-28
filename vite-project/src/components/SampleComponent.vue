<script setup lang="ts">

defineProps<{ hoge: string }>()
</script>

<template>
  <div>
    <p>{{ hoge }}</p>
  </div>
</template>