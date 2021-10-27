<template>
  <div class="saldo-table__body">
    <saldo-table-header></saldo-table-header>

    <saldo-table-row v-for="(item, idx) in balance" :key="idx">
      <template v-slot:left-col>
        <saldo-table-col :balanceData="item.active" balanceType="active">
        </saldo-table-col>
      </template>
      <template v-slot:right-col>
        <saldo-table-col :balanceData="item.passive" balanceType="passive">
        </saldo-table-col>
      </template>
      <template v-slot:summary-col>
        <saldo-table-sum-col
          :activeValue="item.active && item.active.value"
          :passiveValue="item.passive && item.passive.value">
        </saldo-table-sum-col>
      </template>
    </saldo-table-row>
  </div>
</template>

<script>
import SaldoTableHeader from './SaldoTableHeader.vue';
import SaldoTableRow from './SaldoTableRow.vue';
import SaldoTableCol from './SaldoTableCol.vue';
import SaldoTableSumCol from './SaldoTableSumCol.vue';

export default {
  name: 'saldo-table-body',
  props: {
    balance: Array
  },
  components: {
    SaldoTableHeader,
    SaldoTableRow,
    SaldoTableCol,
    SaldoTableSumCol
  }
};
</script>
