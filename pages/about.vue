<script setup lang="ts" async>
import { apolloClient } from "~/gql/apollo";
import { graphql } from "~/gql/gql";

const data = await apolloClient.query(
  graphql(`
    query AboutPageQuery {
      continents {
        code
        name
      }
    }
  `),
);
</script>

<template>
  <div>about</div>
  <div v-if="data">{{ data }} / {{ data.country?.phone }}</div>
</template>
