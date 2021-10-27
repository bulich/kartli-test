<template>
  <div class="saldo-table__col saldo-table__col--summary">
    {{ summaryValue }}
  </div>
</template>

<script>
export default {
  name: 'saldo-table-sum-col',
  props: {
    passiveValue: {
      type: Number,
      default: 0
    },
    activeValue: {
      type: Number,
      default: 0
    }
  },
  computed: {
    summaryValue() {
      const sumBalance = this.activeValue - this.passiveValue;
      return String(sumBalance).split(/(\d{3})/).join(' ').trim();
    }
  }
};
</script>

<style lang="scss">
  .saldo-table__col {
    &--summary {
      background-color: var(--color-saldo-summary);
    }
  }
</style>
