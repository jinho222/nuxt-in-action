<script setup lang="ts">
const itemName = ref("");

const items = ref([[{ name: "hello" }, { name: "bye" }, { name: "good" }]]);

const onFormSubmit = (e: Event) => {
  e.preventDefault();

  items.value[0][1].name = itemName.value;
  console.log("submit!");
};
</script>

<template>
  <div>
    <form @submit="onFormSubmit">
      <input type="text" v-model="itemName" />
    </form>
  </div>
  <div>
    <h2>my items</h2>
    <div v-for="item in items">
      <div v-for="el in item">
        {{ el.name }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
