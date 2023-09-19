<script setup lang="ts">
import { useQuery } from "@urql/vue";
import { graphql } from "~/gql";

const { fetching, error, data } = useQuery({
  query: graphql(/* GraphQL */ `
    query LandingPageQuery($code: ID!) {
      continents {
        ...LandingContinentItem
      }
      language(code: $code) {
        name
        ...LandingChild
      }
    }
  `),
  variables: {
    code: "pt",
  },
});
</script>

<template>
  <div>
    <h1>index page</h1>
    <div v-if="fetching">Loading...</div>
    <div v-else-if="error">Oh no... {{ error }}</div>
    <div v-else-if="data">
      <LandingChild v-if="data.language" :fragment="data.language" />
      <div>
        <p>list</p>
        <ul>
          <LandingContinentItem
            v-for="continent in data.continents"
            :fragment="continent"
          />
        </ul>
      </div>
    </div>
    <div class="rawData">{{ data }}</div>
  </div>
</template>

<style scoped lang="scss">
.rawData {
  color: gray;
  font-size: 12px;
}
</style>
