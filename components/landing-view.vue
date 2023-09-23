<script lang="ts" setup>
import { graphql } from "~/gql";

const a = graphql(`
  query LandingViewQuery($code: ID!) {
    continent(code: $code) {
      code
      name
      countries {
        name
        native
      }
    }
    modal {
      open @client
    }
  }
`);
</script>

<template>
  <div>landing!</div>
</template>
