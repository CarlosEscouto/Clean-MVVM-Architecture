<template>
  <Page>
    <div slot="page-header">
      <p>{{ title }}</p>
    </div>

    <div slot="page-body">
      <div><input type="text" @change="generatedPixel" v-model="name" placeholder="Nome" /></div>
      <div><input type="text" @change="generatedPixel" v-model="revenueValue" placeholder="Receita" /></div>
      <div><input type="text" @change="generatedPixel" v-model="payoutValue" placeholder="Custo" /></div>

      <div style="padding: 20px 0">
        <p>PIxel</p>
        <input type="text" v-model="pixelCode" placeholder="Pixel" />
      </div>

      <div style="padding: 60px 0">
        <button @click="save">Salvar</button>
      </div>
    </div>
  </Page>
</template>

<script lang="ts" src="../../View-Models/GoalViewModel.ts" />
