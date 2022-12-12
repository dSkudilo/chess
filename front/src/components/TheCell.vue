<template>
  <div
    class="cell"
    :class="`cell_${cell.color}`"
  />
</template>
<script>
export default {
  name: 'TheBoard',
  props: {
    cell: {
      type: Object,
      require: true
    }
  }
}
</script>
<style lang="scss" scoped>
.cell {
  width: $cell-size;
  height: $cell-size;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cell_white {
  background-color: #eed4ac;
}
.cell_black {
  background-color: deepskyblue;
}
</style>
