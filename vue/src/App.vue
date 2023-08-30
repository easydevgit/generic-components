<script setup lang="ts">
import SelectComponent from './components/SelectComponent.vue';

</script>

<template>
  <div>
    <SelectComponent :numberAllow="true" :options="[{ label: 1, value: 1 }, { label: 55, value: 2 }]"/>
  </div>
</template>


