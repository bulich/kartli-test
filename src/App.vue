<template>
  <div id="app">
    <div class="container grid-xl">
      <saldo-table :balance="balance"></saldo-table>
    </div>
  </div>
</template>

<script>
import SaldoTable from './components/saldo-table/SaldoTable.vue';
import api from './api';

export default {
  name: 'App',
  data: () => ({
    balance: []
  }),
  components: {
    SaldoTable
  },
  methods: {
    async getInitBalance() {
      try {
        this.balance = await api.getBalance();
      } catch (error) {
        console.log(error);
      }
    }
  },
  mounted() {
    this.getInitBalance();
  }
};
</script>

<style lang="scss">
  :root {
    --color-saldo-passive: #fcfcfc;
    --color-saldo-active: #fff7ef;
    --color-saldo-summary: #f4fcf1;
  }
</style>
