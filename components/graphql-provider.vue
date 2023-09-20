<script setup lang="ts">
import { cacheExchange, createClient, fetchExchange, provideClient } from "@urql/vue";
import { devtoolsExchange } from "@urql/devtools";

const client = createClient({
  url: "https://countries.trevorblades.com/",
  exchanges: [devtoolsExchange, cacheExchange, fetchExchange],
});

provideClient(client);
</script>

<template>
  <slot />
</template>
