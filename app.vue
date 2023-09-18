<script setup lang="ts"></script>

<template>
  <GraphqlProvider>
    <div>
      Hello, Nuxt!
      <div class="box">
        <NuxtLink to="/">landing</NuxtLink>
        <NuxtLink to="/about">about</NuxtLink>
        <NuxtLink to="/server">server</NuxtLink>
      </div>
      <NuxtPage />
    </div>
  </GraphqlProvider>
</template>

<style lang="scss" scoped>
.box {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
