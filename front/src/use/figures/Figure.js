import { FIGURE_NAMES } from '@/use/CONSANTS'

export default class Figure {
  constructor (color, cell) {
    this.color = color
    this.cell = cell
    this.cell.figure = this // используя кольцо можно сразу указать фигуру для клетки
    this.logo = null
    this.name = FIGURE_NAMES
    this.id = Math.random()
  }

  canMove (target) {
    return true
  }

  moveFigure (target) {

  }
}
