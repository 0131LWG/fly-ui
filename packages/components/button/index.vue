<template>
  <button>{{ type }}</button>
</template>

<script setup lang="ts">
  import { FlyButton } from "./button";

  withDefaults(defineProps<FlyButton>(), {
    type: "primary"
  });
</script>

<style lang="scss" scoped></style>
