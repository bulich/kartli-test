<template>
  <saldo-table-row>
    <template v-slot:left-col>
      <div class="saldo-table__header-col saldo-table__header-col--active">
        <div class="columns">
          <div class="column col-6">Вид актива</div>
          <div class="column col-6">Активы</div>
        </div>
      </div>
    </template>
    <template v-slot:right-col>
      <div class="saldo-table__header-col saldo-table__header-col--passive">
        <div class="columns">
        <div class="column col-6">Вид пассива</div>
        <div class="column col-6">Пассивы</div>
        </div>

      </div>
    </template>
    <template v-slot:summary-col>
      <div class="saldo-table__header-col saldo-table__header-col--summary">
        Сальдо
      </div>
    </template>
  </saldo-table-row>
</template>

<script>
import SaldoTableRow from './SaldoTableRow.vue';

export default {
  name: 'saldo-table-header',
  components: {
    SaldoTableRow
  }
};
</script>

<style lang="scss">
  .saldo-table__header-col {
    padding: 10px;
    font-size: 12px;

    &--active {
      background-color: var(--color-saldo-active);
    }

    &--passive {
      background-color: var(--color-saldo-passive);

      .columns {
        flex-direction: row-reverse;
      }
    }

    &--summary {
      background-color: var(--color-saldo-summary);
    }
  }
</style>
