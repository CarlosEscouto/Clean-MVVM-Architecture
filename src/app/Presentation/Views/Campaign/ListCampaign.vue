<template>
  <Page>
    <div slot="page-header">
      <p>{{ title }}</p>
    </div>

    <div slot="page-body">
      <table>
        <tr v-for="campaign in campaigns" :key="campaign.id">
          <td>{{ name }}</td>
          <td>{{ productId }}</td>
          <td>{{ categoryId }}</td>
          <td>{{ advertiserId }}</td>
        </tr>
      </table>
    </div>
  </Page>
</template>

<script lang="ts">
import Vue from 'vue';
import Page from '@/Shared/Components/Page.vue';
import Component from 'vue-class-component';

@Component({
  components: {
    Page,
  },
})
export default class FormCampaign extends Vue {
  private loading = false;
  public campaigns: Array<any> = [];

  private getCampaign() {
    //
  }
}
</script>
