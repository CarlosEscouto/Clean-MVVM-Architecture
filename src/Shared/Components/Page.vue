<template>
  <div>
    <slot style="padding: 10px 20px" name="page-header" />
    <slot style="padding: 10px 20px" name="page-body" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
export default class Page extends Vue {}
</script>
