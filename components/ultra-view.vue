<script setup lang="ts">
type Task =
  | {
      status: "idle";
    }
  | {
      status: "loading";
    }
  | {
      status: "success";
      data?: {
        layer?: {
          content?: string;
        };
      };
    }
  | {
      status: "error";
      error: string;
    };

const someTask = ref<Task>({
  status: "idle",
});

const onClickSuccess = () => {
  someTask.value = {
    status: "success",
    data: {
      layer: {
        content: "hello world",
      },
    },
  };
};
</script>

<template>
  <div>
    <h2>ultra view</h2>
    <div>current status: {{ someTask.status }}</div>
    <div v-if="someTask.status === 'idle'">you can do something~</div>
    <div v-else-if="someTask.status === 'loading'">currently loading</div>
    <div v-else-if="someTask.status === 'success'">
      {{ someTask.data?.layer?.content }}
    </div>
    <div v-if="someTask.status === 'error'" class="error">you've got error</div>
    <div class="buttons">
      <button @click="someTask.status = 'idle'">make idle</button>
      <button @click="someTask.status = 'loading'">make loading</button>
      <button @click="onClickSuccess">make success</button>
      <button @click="someTask.status = 'error'">make error</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.buttons {
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
}

.error {
  color: red;
}
</style>
