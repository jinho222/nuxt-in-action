<script setup lang="ts">
import { gql, useQuery } from "@urql/vue";

const { fetching, error, data } = useQuery({
  query: gql`
    query FirstQuery {
      Media {
        id
        idMal
        genres
        isAdult
      }
    }
  `,
});
</script>

<template>
  <div>
    <h1>index page</h1>
    <div v-if="fetching">Loading...</div>
    <div v-else-if="error">Oh no... {{ error }}</div>
    <div v-else-if="data">
      {{ data }}
    </div>
  </div>
</template>
