<template>
  <div class="columns">
    <div class="column col-5">
      <slot name="left-col"></slot>
    </div>
    <div class="column col-5">
      <slot name="right-col"></slot>
    </div>
    <div class="column col-2">
      <slot name="summary-col"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'saldo-table-row'
};
</script>
