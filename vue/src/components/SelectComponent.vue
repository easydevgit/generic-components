<script setup lang="ts" generic="T extends boolean, U extends Option<T>">
import type { Option } from '../types'

defineProps<{
  options: U[],
  numberAllow: T
}>()

</script>

<template>
  <select name="select" id="select">
    <option v-for="option in options" :value="option.value" :key="option.value">
      {{ option.label }}
    </option>
  </select>
</template>