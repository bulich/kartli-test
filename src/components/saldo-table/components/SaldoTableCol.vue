<template>
  <div class="saldo-table__col" :class="balanceTypeClass"
       @click="clickHandler">
    <div class="columns">
      <div class="column col-6">{{ balanceData.name }}</div>
      <div class="column col-6">{{ balanceData.value | prettifyValue }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'saldo-table-col',
  props: {
    balanceType: {
      type: String,
      default: 'active'
    },
    balanceData: {
      type: Object,
      default() {
        return {
          name: '-',
          value: 0
        };
      }
    }
  },
  computed: {
    balanceTypeClass() {
      return `saldo-table__col--${this.balanceType}`;
    }
  },
  methods: {
    clickHandler() {
      const debugMessage = `You clicked at - ${this.balanceType}: ${this.balanceData.name}`;
      this.$emit('col-click', debugMessage);
      alert(debugMessage);
    }
  },
  filters: {
    prettifyValue(value) {
      return String(value).split(/(\d{3})/).join(' ').trim();
    }
  }
};
</script>

<style lang="scss">
  .saldo-table__col {
    padding: 10px;
    border-top: 1px solid #cecece;
    font-size: 14px;
    height: 100%;
    cursor: pointer;

    &:hover {
      background-color:#cecece;
    }
    &--active {
      background-color: var(--color-saldo-active);
    }

    &--passive {
      background-color: var(--color-saldo-passive);

      .columns {
        flex-direction: row-reverse;
      }
    }
  }
</style>;
