<template>
  <div class="saldo-table">
    <div v-if="!balance.length" class="loading loading-lg"></div>
    <saldo-table-body v-else :balance="balance"></saldo-table-body>
  </div>
</template>

<script>
import SaldoTableBody from './components/SaldoTableBody.vue';

export default {
  name: 'saldo-table',
  props: {
    balance: Array
  },
  components: {
    SaldoTableBody
  }
};
</script>
