<script setup lang="ts">
const count = ref(0);

const onClick = () => {
  count.value++;
};
</script>

<template>
  <div>counter</div>
  <div>
    <p>{{ count }}</p>
    <button @click="count++">click</button>
    <button @click="onClick">click</button>
  </div>
</template>
