<template>
  <div id="app">
    <!-- <FormGoal /> -->
    <LinkForm />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import FormCampaign from '@/app/Presentation/Views/Campaign/FormCampaign.vue';
import FormGoal from '@/app/Presentation/Views/Goal/FormGoal.vue';
import LinkForm from '@/app/Presentation/Views/Link/LinkForm.vue';

@Component({
  components: {
    FormCampaign,
    FormGoal,
    LinkForm
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
