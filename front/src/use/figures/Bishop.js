import Figure from '@/use/figures/Figure'
import blackLogo from '@/assets/black-bishop.png'
import whiteLogo from '@/assets/white-bishop.png'
import { FIGURE_NAMES } from '@/use/CONSANTS'

export default class Bishop extends Figure {
  constructor (color, cell) {
    super(color, cell)
    this.logo = color === 'black'
      ? blackLogo
      : whiteLogo
    this.name = FIGURE_NAMES.BISHOP
  }
}
