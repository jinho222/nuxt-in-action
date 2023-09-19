<script setup lang="ts">
import { FragmentType, graphql, useFragment } from "~/gql";

const LandingChildFragment = graphql(/* GraphQL */ `
  fragment LandingChild on Language {
    native
  }
`);

const { fragment } = defineProps<{
  fragment: FragmentType<typeof LandingChildFragment>;
}>();

const language = useFragment(LandingChildFragment, fragment);
</script>

<template>
  <h2>child</h2>
  <div>
    hi native: <b class="danger">{{ language.native }}</b>
  </div>
</template>

<style scoped lang="scss">
.danger {
  color: red;
}
</style>
