<script setup lang="ts">
import { $fetch } from "ofetch";
import { definePropsRefs } from "@vue-macros/define-props-refs/macros";

const { no } = definePropsRefs({
  no: {
    type: Number,
    required: true,
  },
});

// de-duplicate request라고 했는데.. 흠...
const { data } = await useFetch("/api/user", {
  key: `common`,
  watch: [no],
});

const name = ref("");

// POST 요청은 이게 맞는건가...???
// const { execute } = await useFetch("/api/user", {
//   method: "POST",
//   lazy: true,
//   server: false,
//   immediate: false,
//   watch: false,
//   body: {
//     name,
//   },
// });

const onFormSubmit = async (e: Event) => {
  e.preventDefault();
  // 이게맞지... 근데 라우팅 타입 지원은 잘 안되는듯..
  const res = await $fetch("/api/user", {
    method: "POST",
    body: {
      name: name.value,
    },
  });
  console.log(res);

  // cache가 갱신 가능..!
  if (data.value) {
    data.value.name = "horang" + new Date().toISOString();
  }
};
</script>

<template>
  <div>
    <h2>my server</h2>
    <div>{{ data?.name }}</div>
    <form @submit="onFormSubmit">
      <input type="text" v-model="name" />
      <button type="submit">submit</button>
    </form>
  </div>
</template>
