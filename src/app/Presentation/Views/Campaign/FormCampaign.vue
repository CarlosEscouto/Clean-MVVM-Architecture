<template>
  <Page>
    <div slot="page-header">
      <p>{{ title }}</p>
    </div>

    <div slot="page-body">
      <div><input type="text" v-model="name" placeholder="Nome" /></div>
      <div><input type="text" v-model="productId" placeholder="Produto" /></div>
      <div><input type="text" v-model="categoryId" placeholder="Categoria" /></div>
      <div><input type="text" v-model="advertiserId" placeholder="Anunciante" /></div>

      <div style="padding: 60px 0">
        <button @click="save">Salvar</button>
      </div>
    </div>
  </Page>
</template>

<script lang="ts" src="../../View-Models/CampaignViewModel.ts" />
