<script setup lang="ts">
import { FragmentType, graphql, useFragment } from "~/gql";

const LandingContinentItemFragment = graphql(/* GraphQL */ `
  fragment LandingContinentItem on Continent {
    code
    name
    countries {
      name
      phone
    }
  }
`);

const { fragment } = defineProps<{
  fragment: FragmentType<typeof LandingContinentItemFragment>;
}>();

const continent = useFragment(LandingContinentItemFragment, fragment);
</script>

<template>
  <div>{{ continent.name }}</div>
  <ul>
    <li v-for="country in continent.countries">
      {{ country.name }}, {{ country.phone }}
    </li>
  </ul>
</template>
