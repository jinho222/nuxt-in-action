<script setup lang="ts">
import {
  cacheExchange,
  createClient,
  fetchExchange,
  provideClient,
} from "@urql/vue";

const client = createClient({
  url: "https://countries.trevorblades.com/",
  exchanges: [cacheExchange, fetchExchange],
});

provideClient(client);
</script>

<template>
  <slot />
</template>
