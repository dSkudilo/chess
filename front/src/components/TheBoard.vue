<template>
  <div class="board" v-if="board">
    <div v-for="(row, id) in board.cells" :key="id">
      <TheCell
        v-for="cell in row"
        :key="cell.id"
        :cell="cell"
      />
    </div>
  </div>
</template>
<script>
import TheCell from '@/components/TheCell'
export default {
  name: 'TheBoard',
  components: {
    TheCell
  },
  props: {
    board: {
      require: true
    }
  }
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
