<script setup lang="ts">
const { data, execute } = await useFetch("/api/user?number=23");

const num = ref(1);
</script>

<template>
  <div>
    <div>{{ data?.id }}</div>
    <div>{{ data?.name }}</div>
    <button @click="() => execute()">fetch again</button>
    <button @click="num++">num++</button>
    <server-view :no="1" />
    <server-view :no="2" />
  </div>
</template>

<style scoped lang="scss"></style>
