<template>
  <div>
    <input type="text" v-model="name" @input="tes">
    <p>{{ name }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import LinkViewModel from '@/app/Presentation/View-Models/LinkViewModel';

@Component({
  data: () => new LinkViewModel(),
})
export default class LinkForm extends Vue {
  tes() {
    console.log((this.$data as LinkViewModel).save(Number((this.$data as LinkViewModel).name)))
  }
}
</script>