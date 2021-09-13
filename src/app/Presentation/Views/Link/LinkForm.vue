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
import LinkModel from '@/app/Data/Models/LinkModel';

@Component({
  data: () => new LinkViewModel(new LinkModel()),
})
export default class LinkFormController extends Vue {
  tes() {
    console.log((this.$data as LinkViewModel).save())
  }
}
</script>