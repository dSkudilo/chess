import Figure from '@/use/figures/Figure'
import blackLogo from '@/assets/black-pawn.png'
import whiteLogo from '@/assets/white-pawn.png'
import { FIGURE_NAMES } from '@/use/CONSANTS'

export default class Pawn extends Figure {
  constructor (color, cell) {
    super(color, cell)
    this.logo = color === 'black'
      ? blackLogo
      : whiteLogo
    this.name = FIGURE_NAMES.PAWN
  }
}
