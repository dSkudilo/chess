import Cell from '@/use/Cell'
import { CELL_WHITE, CELL_BLACK } from '@/use/CONSANTS'

export default class Board {
  constructor () {
    this.cells = []
  }

  initCells () {
    for (let i = 0; i < 8; i++) {
      const row = []
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(this, j, i, CELL_BLACK, null))
        } else {
          row.push(new Cell(this, j, i, CELL_WHITE, null))
        }
      }
      this.cells.push(row)
    }
  }
}
