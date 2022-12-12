<template>
  <div class="chess">
    <TheBoard
      :board="board"
    />
  </div>
</template>
<script>
import TheBoard from '@/components/TheBoard'
import Board from '@/use/Board'
export default {
  name: 'ChessPage',
  components: { TheBoard },
  data () {
    return {
      board: null
    }
  },
  mounted () {
    this.restart()
  },
  methods: {
    restart () {
      const newBoard = new Board()
      newBoard.initCells()
      this.setBoard(newBoard)
    },
    setBoard (val) {
      this.board = val
    }
  }
}
</script>
<style lang="scss" scoped>
.chess{
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
