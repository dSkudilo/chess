<template>
  <div class="board">board</div>
</template>
<script>
export default {
  name: 'TheBoard'
}
</script>
<style lang="scss" scoped>
.board {
  width: calc($cell-size * 8);
  height: calc($cell-size * 8);
  display: flex;
  flex-wrap: wrap;
}
</style>
